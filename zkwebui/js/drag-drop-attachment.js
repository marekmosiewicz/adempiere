/*******************************************************************************
 * Copyright (C) 2017 Adaxa Pty Ltd. All Rights Reserved. This program is free
 * software; you can redistribute it and/or modify it under the terms version 2
 * of the GNU General Public License as published by the Free Software
 * Foundation. This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 ******************************************************************************/
/*******************************************************************************
 * Drag and Drop functionality for Attachment
 * 
 * @author Sachin Bhimani @ Logilite
 * @since Jan 22, 2018
 */

function DropToAttachFiles() {

    var clsName = " attachment-drag-entered";

    this.init = init;
    this.findAndReplace = findAndReplace;
    
    /***************************************************************************
	 * If progBarID & progLabelID is Null/Empty then it will not show progress
	 * and it's updation information.
	 */
    function init(dropAreaID, layoutID, fileUploadDialogID, desktopID, progBarID, progLabelID, maxUploadSize) {

        var seqID = 0;
        var progressbar;
        var highlightDragging;
        
        var layout = document.getElementById(layoutID);
        var dropBtn = document.getElementById(dropAreaID);

        var isSupported = {
            dnd: 'draggable' in document.createElement('span'),
            formdata: !!window.FormData,
            progress: ("upload" in new XMLHttpRequest) && !(progBarID == undefined || progBarID == "")
        };
        
        if (isSupported.progress) {
        	progressbar = document.getElementById(progBarID);
        }
        
        // Events for Drag & Drop
        if (isSupported.dnd) {
            if (dropBtn != null) {

	            //
	            dropBtn.ondragover = function() {
	                return false;
	            };
	            //
	            dropBtn.ondragenter = function(e) {
	            	highlightDragging = e.target;
	            	layout.className = layout.className + clsName;
	            	return false;
	            };
	            //
	            dropBtn.ondragleave = function(e) {
	                if (e.target === highlightDragging) {
	                    layout.className = findAndReplace(layout.className, clsName, '');
	                }
	                return false;
	            };
	            //
	            dropBtn.ondrop = function(e) {
	                e.preventDefault();
	
	                var requestSize = 0;
	                var files = e.dataTransfer.files;
	                for (var i = 0; i < files.length; i++) {
	                    requestSize = requestSize + files[i].size;
	                }
	
	                requestSize = Math.round(requestSize / 1024);
	
	                if (maxUploadSize && requestSize > maxUploadSize) {
	                    alert('The request was rejected because its size (' + requestSize + ') exceeds the configured maximum (' + maxUploadSize + ')');
	                    return;
	                }
	
	                if (isSupported.progress) {
		                progressbar.style = 'display: block';
		                progressbar.parentNode.style = 'display: block';
		                progressBarUploadStatus(progBarID, progLabelID, 0, 'Starting Upload...');
	                }
	                
	                layout.className = findAndReplace(layout.className, clsName, '');
	
	                uploadFiles(files, seqID++);
	                return false;
	            };
            }
        } else {
            clsName = "";
            alert("Click to Upload Files");
        } // drop listener

        function uploadFiles(files, sid) {
            var formData = isSupported.formdata ? new FormData() : null;
            var uploadMSG = "#" + files.length + ", ";
            if (isSupported.formdata) {
                for (var i = 0; i < files.length; i++) {
                    formData.append('file', files[i], files[i].name);
                    uploadMSG += files[i].name + "; ";
                }
                formData.append('native', true);
            }

            // Request for Upload files
            /*******************************************************************
			 * org.zkoss.zk.au.http.AuUploader - This utility used to process
			 * file upload.
			 */
            var url = "/webui/zkau/upload?uuid=" + dropAreaID + "&dtid=" + desktopID + "&sid=" + sid + "&native=true";
            if (maxUploadSize)
                url = url + "&maxsize=" + maxUploadSize;

            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);

            /*******************************************************************
			 * Content-Type is automatically determined by the browser. If set
			 * manually then gives error related boundary of each fields. e.g.
			 * "Content-Type: multipart/form-data; boundary=---90519140415446"
			 * 
			 * @code xhr.setRequestHeader("Content-type", "multipart/form-data
			 *       or application/x-www-form-urlencoded");
			 */
            xhr.onload = function() {
            	if (isSupported.progress) {
	                progressBarUploadStatus(progBarID, progLabelID, 100, '');
	                progressbar.style = 'display: none';
            	}
            	layout = document.getElementById(layoutID);
            	layout.className = findAndReplace(layout.className, clsName, '');
            }; // onload

            xhr.upload.onprogress =
                function(event) {
	                if (isSupported.progress) {
	                    progressbar.style = 'display: block';
	                    progressbar.parentNode.style = 'display: block';
	                    if (event.lengthComputable) {
	                        var complete = (event.loaded / event.total * 100 | 0);
	                        var status = 'Uploading... ' + complete + '% [ ' + Math.round(event.loaded / 1024) + ' / ' + Math.round(event.total / 1024) + ' KB ]';
	
	                        progressBarUploadStatus(progBarID, progLabelID, complete, status);
	                    }
	                }
            	}; // upload.onprogress

            xhr.onreadystatechange =
                function() {
                    // 4: request finished and response is ready
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            var startIndex	= xhr.responseText.indexOf("zul.Upload.sendResult(");
                            var endIndex	= xhr.responseText.indexOf("zul.Upload.close(");
                            var arr			= xhr.responseText.substring(startIndex, endIndex).split("'");

                            if (arr.length > 4) {
                                var contID = findAndReplace(arr[3].trim(), "'", "");

                                /***********************************************
								 * updateResult event fires on
								 * 
								 * @code org.zkoss.zk.au.http.UploadInfoService.service(AuRequest, boolean) --> WAttachment.onEvent()
								 */
                        		var widget = zk.Widget.$(fileUploadDialogID);
                        		var event = new zk.Event(widget, 'updateResult', {wid: dropAreaID, sid: '' + sid, contentId: contID}, {toServer: true});
                        		zAu.send(event)

                                /***********************************************
								 * onDropUploadEvent event fires on
								 * 
								 * @code org.adempiere.webui.component.DropUploadCommand.service(AuRequest, boolean) --> WAttachment.onEvent()
								 */
                        		widget = zk.Widget.$(dropAreaID);
                        		event = new zk.Event(widget, 'onDropUploadEvent', {data: uploadMSG}, {toServer: true});
                        		zAu.send(event)

                            } else {
                                uploadMSG = 'Ooops! Something went wrong...!!!';
                                alert(uploadMSG);
                            }
                        } else {
                            uploadMSG = 'Something went wrong...!!! \nPlease you can try with clicking to upload button.';
                            alert(uploadMSG);
                        }
                    }
                }; // onreadystatechange

            xhr.onerror = function(errorType, exception) {
                if (xhr.status === 0) {
                    uploadMSG = 'Connection Lost. Please Verify Network.';
                } else if (xhr.status == 404) {
                    uploadMSG = 'Requested page not found. [404]';
                } else if (xhr.status == 500) {
                    uploadMSG = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    uploadMSG = 'Requested parse failed.';
                } else if (exception === 'timeout') {
                    uploadMSG = 'Time out error.';
                } else if (exception === 'abort') {
                    uploadMSG = 'Request aborted.';
                } else {
                    uploadMSG = 'Uncaught Error.\n' + xhr.responseText;
                }

                console.log(errorType + " - " + exception + " - " + uploadMSG);
                alert(uploadMSG);
            }; // onerror

            xhr.send(formData);
        } // uploadFiles
    } // init

    /***************************************************************************
     * String operation: Find and Replace
     */
    function findAndReplace(str, target, replacement) {
        return str.replace(new RegExp(target, 'g'), replacement);
    } // findAndReplace

    /***************************************************************************
     * Update progress bar with uploading data status
     */
    function progressBarUploadStatus(pbID, plID, val, fileStatus) {
        var pbar = document.getElementById(pbID);
        pbar.setAttribute('z.value', val);
        pbar.firstElementChild.style = 'width:' + val + '%';

        var pLabel = document.getElementById(plID);
        pLabel.innerText = fileStatus;
    } // progressBarUploadStatus
}

var dropToAttachFiles = new DropToAttachFiles();

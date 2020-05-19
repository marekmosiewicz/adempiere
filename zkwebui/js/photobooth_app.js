var myPhotobooth;
var Width;
var Height;

// create new image in given DIVID.
function showCamera(imageDivID, btnCancelID) {
	var imageDiv = document.getElementById(imageDivID);
	var cancelButton = document.getElementById(btnCancelID);
	cancelButton.disabled = true;
	
	myPhotobooth = new Photobooth(imageDiv);
	myPhotobooth.onImage = function(dataUrl) {
		cancelButton.disabled = false;
		myPhotobooth.destroy();
	
		zkau.send({uuid: imageDivID, cmd: 'onCaptureImage', data: [dataUrl], ctl: true});
	};
}

// destroy camera is present
function destroyCamera()
{
	if (myPhotobooth) {
		myPhotobooth.destroy();
	}
}

// resize camera
function resizeCamera(captureDivID)
{
	var captureDiv = document.getElementById(captureDivID);
	
	if (myPhotobooth){
		
		if(captureDiv.clientHeight > 200)
			Height = captureDiv.clientHeight;
		
		if(captureDiv.clientWidth > 200)
			Width = captureDiv.clientWidth;
		
		myPhotobooth.resize(Width,Height);
	}
}

// hide Camera panel behind Signature pad
function hideCamera(cameraID, isAutoCapture)
{
	var camera = document.getElementById(cameraID);
	if (isAutoCapture)
	{
		camera.style.overflow = "auto";
		camera.style.position = "absolute";
		camera.style.top = "40px";
		camera.style.display = "block";
		camera.style.height = "300px";
		camera.style.width = "300px";
		camera.style.margin = "10%";
		camera.style.zIndex = "-1";
	}
	else
	{
		camera.style.overflow = "auto";
		camera.style.position = "inherit";
		camera.style.top = "0px";
		camera.style.margin = "0px";
		camera.style.zIndex = "1";
	}
	resizeCamera(cameraID);
}
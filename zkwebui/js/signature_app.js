/*
 * Design signature board for work with ZK
 *  
 * @author: Sachin Bhimani  (sachin.bhimani89@gmail.com)
 * 
 * @reference: https://github.com/szimek/signature_pad
 */
function SignatureApp() {

	this.initSignaturePad = initSignaturePad;
	this.trimCanvas = trimCanvas;

	// create a Signature Pad
	function initSignaturePad(imgID, parentID, currFormID, resetBtnID,
			saveBtnID, cancelBtnID) {

		var currForm = document.getElementById(currFormID);
		var saveBtn = document.getElementById(saveBtnID);
		var resetBtn = document.getElementById(resetBtnID);
		var cancelBtn = document.getElementById(cancelBtnID);

		var centerPanel = document.getElementById(parentID);
		var imagePanel = document.getElementById(imgID);
		imagePanel.style.display = "none";
		imagePanel.src = "";

		var canvas = document.createElement('canvas');
		canvas.id = 'signature-pad';
		canvas.style = 'margin: 8px; padding: 1px; background: #f1f1f1; border: 1px solid #000; border-radius: 5px;';
		imagePanel.parentNode.insertBefore(canvas, imagePanel);

		// Adjust canvas coordinate space taking into account pixel ratio,
		// to make it look crisp on mobile devices. This also causes canvas
		// to be cleared.
		function resizeCanvas() {
			// When zoomed out to less than 100%, for some very strange reason,
			// some browsers report devicePixelRatio as less than 1 and only
			// part of the canvas is cleared then.

			// var ratio = Math.max(window.devicePixelRatio || 1, 1);
			canvas.width = (currForm.offsetWidth - 25);
			canvas.height = (currForm.offsetHeight - 80);
			canvas.getContext("2d").scale(1, 1);
		}

		resizeCanvas();

		signaturePad = new SignaturePad(canvas, {
			backgroundColor : 'rgba(255, 255, 255, 0)',
			penColor : 'rgb(0, 0, 0)'
		});

		// Save Signature as PNG image
		saveBtn.addEventListener('click', function(event) {
			var cnvs = trimCanvas(signaturePad._canvas);
			var imgData = cnvs.toDataURL('image/png');
			if (cnvs.width == 1 && cnvs.height == 1)
				imgData = null;
			var btnPhotobootCapture = $('.photobooth ul li.trigger');
			if (btnPhotobootCapture)
				btnPhotobootCapture.click(); 

			zkau.send({
				uuid : currFormID,
				cmd : 'onSignatureEvent',
				data : [ imgData ],
				ctl : true
			});
			canvas.remove()
			imagePanel.style.display = "block";
		});

		// Clear signature data
		resetBtn.addEventListener('click', function(event) {
			signaturePad.clear();
		});

		// Remove registered event on signature pad
		cancelBtn.addEventListener('click', function(event) {
			if (signaturePad != undefined)
				signaturePad.off();
			signaturePad = undefined;
		});
	}

	// trim the canvas before the save sign image
	function trimCanvas(canvas) {
		var context = canvas.getContext('2d')
		var imgWidth = canvas.width
		var imgHeight = canvas.height
		var imgData = context.getImageData(0, 0, imgWidth, imgHeight).data

		// get the corners of the relevant content (everything that's not white)
		var cropTop = scanY(true, imgWidth, imgHeight, imgData)
		var cropBottom = scanY(false, imgWidth, imgHeight, imgData)
		var cropLeft = scanX(true, imgWidth, imgHeight, imgData)
		var cropRight = scanX(false, imgWidth, imgHeight, imgData)

		// + 1 is needed because this is a difference, there are n + 1 pixels in
		// between the two numbers inclusive
		var cropXDiff = (cropRight - cropLeft) + 1
		var cropYDiff = (cropBottom - cropTop) + 1

		// get the relevant data from the calculated coordinates
		var trimmedData = context.getImageData(cropLeft, cropTop, cropXDiff,
				cropYDiff)

		// set the trimmed width and height
		canvas.width = cropXDiff
		canvas.height = cropYDiff
		// clear the canvas
		context.clearRect(0, 0, cropXDiff, cropYDiff)
		// place the trimmed data into the cleared canvas to create a new,
		// trimmed canvas
		context.putImageData(trimmedData, 0, 0)
		return canvas // for chaining
	}

	// returns the RGBA values of an x, y coord of imgData
	function getRGBA(x, y, imgWidth, imgData) {
		return {
			red : imgData[(imgWidth * y + x) * 4],
			green : imgData[(imgWidth * y + x) * 4 + 1],
			blue : imgData[(imgWidth * y + x) * 4 + 2],
			alpha : imgData[(imgWidth * y + x) * 4 + 3]
		}
	}

	function getAlpha(x, y, imgWidth, imgData) {
		return getRGBA(x, y, imgWidth, imgData).alpha
	}

	// finds the first y coord in imgData that is not white
	function scanY(fromTop, imgWidth, imgHeight, imgData) {
		var offset = fromTop ? 1 : -1
		var firstCol = fromTop ? 0 : imgHeight - 1

		// loop through each row
		for (var y = firstCol; fromTop ? (y < imgHeight) : (y > -1); y += offset) {
			// loop through each column
			for (var x = 0; x < imgWidth; x++) {
				// if not white, return column
				if (getAlpha(x, y, imgWidth, imgData)) {
					return y
				}
			}
		}
		// the whole image is white already
		return null
	}

	// finds the first x coord in imgData that is not white
	function scanX(fromLeft, imgWidth, imgHeight, imgData) {
		var offset = fromLeft ? 1 : -1
		var firstRow = fromLeft ? 0 : imgWidth - 1

		// loop through each column
		for (var x = firstRow; fromLeft ? (x < imgWidth) : (x > -1); x += offset) {
			// loop through each row
			for (var y = 0; y < imgHeight; y++) {
				// if not white, return row
				if (getAlpha(x, y, imgWidth, imgData)) {
					return x
				}
			}
		}
		// the whole image is white already
		return null
	}
}

var signatureApp = new SignatureApp();

function galleryAndSignatureResize(panelID, centerID, mainLayoutID, mainBboxID, containerBoxID, galleryBboxID, galleryPanelID, galleryButtonboxID, displaypanelID, captureDivID, viewBboxID, singPanelButtonsID, signImageViewID, imageID, rowID, galleryGridID)
{
	var panel = document.getElementById(panelID);
	var center = document.getElementById(centerID);
	var mainLayout = document.getElementById(mainLayoutID);
	var mainBox = document.getElementById(mainBboxID);
	var containerBox = document.getElementById(containerBoxID);
	var galleryBox = document.getElementById(galleryBboxID);
	var galleryPanel = document.getElementById(galleryPanelID);
	var galleryButtonbox = document.getElementById(galleryButtonboxID);
	var displaypanel = document.getElementById(displaypanelID);
	var captureDiv = document.getElementById(captureDivID);
	var viewBox = document.getElementById(viewBboxID);
	var singPanelButton = document.getElementById(singPanelButtonsID);
	var signImageView = document.getElementById(signImageViewID);
	var image = document.getElementById(imageID);
	var row = document.getElementById(rowID);
	var galleryGrid = document.getElementById(galleryGridID);
	if (panel)
	{
		var height = panel.style.height;
		var width = panel.style.width;

		height = height.replace("px", "");
		width = width.replace("px", "");

		if (mainLayout)
		{
			mainLayout.style.height = height + "px";
			mainLayout.style.width = width + "px";
		}
		if (center && center.firstElementChild)
		{
			center.firstElementChild.style.height = height + "px";
			center.firstElementChild.style.width = width + "px";
		}
		if (mainBox)
		{
			mainBox.style.height = (height - 20) + "px";
			mainBox.style.width = width + "px";
		}
		if (containerBox)
		{
			containerBox.style.height = (height - 80) + "px";
			containerBox.style.width = width + "px";
		}
		if (galleryBox)
		{
			galleryBox.style.height = (height - 80) + "px";
			galleryBox.style.width = ((width / 2) - 30) + "px";
		}
		if (galleryGrid)
		{
			galleryGrid.style.height = (height - 80) + "px";
			galleryGrid.style.width = ((width / 2) - 30) + "px";

			if (galleryGrid.firstElementChild)
			{
				galleryGrid.firstElementChild.style.height = "100%";
				galleryGrid.firstElementChild.style.width = "100%";
			}
		}
		if (galleryPanel)
		{
			galleryPanel.style.height = (height - 80) + "px";
			galleryPanel.style.width = ((width / 2) - 30) + "px";
		}
		if (galleryButtonbox)
		{
			galleryButtonbox.style.height = "40" + "px";
		}
		if (displaypanel)
		{
			displaypanel.style.height = (height - 80) + "px";
			displaypanel.style.width = (width / 2) + "px";
		}
		if (captureDiv)
		{
			captureDiv.style.height = (height - 40) + "px";
			captureDiv.style.width = ((width / 2) - 10) + "px";
		}
		if (viewBox)
		{
			viewBox.style.height = (height - 80) + "px";
			viewBox.style.width = ((width / 2) - 10) + "px";
		}
		if (singPanelButton && signImageView && image)
		{
			singPanelButton.style.height = "40" + "px";

			if (singPanelButton.style.display == "none")
			{
				signImageView.style.height = (height - 40) + "px";
				image.style.height = (height - 40) + "px";
			}
			else
			{
				signImageView.style.height = (height - 80) + "px";
				image.style.height = (height - 80) + "px";
			}
		}
		if (signImageView)
		{
			signImageView.style.width = (width / 2) + "px";
		}
		if (image)
		{
			image.style.width = ((width / 2) - 10) + "px";
		}
		if (row)
		{
			row.style.height = (height - 80) + "px";
			row.style.overflow = "auto";
		}
	}
}

function resizeSignature(currFormID)
{
	var currForm = document.getElementById(currFormID);
	var canvas = document.getElementById('signature-pad');
	if (canvas)
	{
		canvas.width = (currForm.offsetWidth);
		canvas.height = (currForm.offsetHeight - 50);
		canvas.getContext("2d").scale(1, 1);
		canvas.style.margin = "0px";
	}
}

function removeSignature(imageID)
{
	var canvas = document.getElementById('signature-pad');
	var image = document.getElementById(imageID);
	if (canvas)
	{
		canvas.remove()
		image.style.display = "block";
	}
}

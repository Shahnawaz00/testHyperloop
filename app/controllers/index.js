var QRCodeReader = require('com.google.zxing.qrcode.QRCodeReader');
var BinaryBitmap = require('com.google.zxing.BinaryBitmap');
var LuminanceSource = require('com.google.zxing.LuminanceSource');
var HybridBinarizer = require('com.google.zxing.common.HybridBinarizer');


function decodeQRCode(imageBitmap) {
    try {
		
		if (imageBitmap) {
			 var luminanceSource = new LuminanceSource(imageBitmap);
			 var binarizer = new HybridBinarizer(luminanceSource);
			 var binaryBitmap = new BinaryBitmap(binarizer);
	 
			 var reader = new QRCodeReader();
	 
			 var result = reader.decode(binaryBitmap);
	 
			 if (result) {
				 Ti.API.info('Decoded QR Code: ' + result.getText());
			 } else {
				 Ti.API.info('No QR code found in the image.');
			 }
		} else {
			Ti.API.error('Image bitmap is null.' + imageBitmap);
		}
       
    } catch (e) {
		Ti.API.error('Error decoding QR code: ' + e.message);

    }
}

function triggerDecode() {
    decodeQRCode('./assets/android/default.png');
}

$.index.open();

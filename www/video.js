var exec = require('cordova/exec');
var videoZ = {
	showSmallVideo: function (info, success, error) {
		exec(success, error, "VideoZPlugin", "showSmallVideo", [info]);
	}
}
module.exports = videoZ;  
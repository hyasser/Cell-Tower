var exec = require("cordova/exec");

var LocationInfo = function() {
	alert("location info");
};
//
LocationInfo.prototype.getCID = function(successCallback, errorCallback) {
	cordova.exec(successCallback,
	// success callback function
	errorCallback,
	// error callback function
	'LocationInfo',
	// name of the native java class
	'locationAction',
	// name of the action to performed
	[]
	// and this array of custom arguments to create our entry
	);
}

var locationInfo = new LocationInfo();
module.exports = locationInfo;

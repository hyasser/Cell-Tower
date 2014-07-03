var exec = require("cordova/exec"), channel = require('cordova/channel'), argscheck = require('cordova/argscheck'), utils = require('cordova/utils');

channel.createSticky('OnCordovaConnectionReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('OnCordovaConnectionReady');

// var LocationInfo = function() {
function LocationInfo() {
	this.cid = null;
	alert("inside location info");
}

var me = new LocationInfo();

channel.onCordovaReady.subscribe(function() {
	alert("READY!!");
	me.getCID(function(info) {
		alert("getInfo");
		me.cid = info.cid;
		alert(me.cid);
		alert(info.cid);
		channel.OnCordovaConnectionReady.fire();
	}, function(e) {
		utils.alert("[ERROR] Error initializing Cordova: " + e);
	});
});

// };
//
LocationInfo.prototype.getCID = function(successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'LocationInfo.getCID', arguments);
	cordova.exec(successCallback, errorCallback, 'LocationInfo', 'sendCID', []);
}

module.exports = me;
// var locationInfo = new LocationInfo();
// module.exports = locationInfo;

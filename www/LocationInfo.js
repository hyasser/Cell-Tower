var exec = require("cordova/exec"), channel = require('cordova/channel'), argscheck = require('cordova/argscheck'), utils = require('cordova/utils'), cordova = require('cordova');

//channel.createSticky('OnCordovaConnectionReady');
//// Tell cordova channel to wait on the CordovaInfoReady event
//channel.waitForInitialization('OnCordovaConnectionReady');

channel.createSticky('onCordovaInfoReady');
//Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');


// function locationInfo() {
// this.cid = null;
// alert("inside location info");
// }
// var me = new locationInfo();

//var locationInfo = function() {
function locationInfo() {
	this.cid = null;

	channel.onCordovaReady.subscribe(function() {
		alert("READY!!");
		this.getInfo(function(info) {
			alert("getInfo");
//			this.cid = info.cid;
//			alert(this.cid);
//			alert(info.cid);
			//channel.OnCordovaConnectionReady.fire();
			 channel.onCordovaInfoReady.fire();
		}, function(e) {
			utils.alert("[ERROR] Error initializing Cordova: " + e);
		});
	});
}
//};
//


locationInfo.prototype.getInfo = function(successCallback, errorCallback) {
	alert("prototype");
	argscheck.checkArgs('fF', 'locationInfo.getInfo', arguments);
	exec(successCallback, errorCallback, 'LocationInfo', 'getCID', []);
}

//module.exports = me;
// var locationInfo = new locationInfo();
 module.exports = new locationInfo();

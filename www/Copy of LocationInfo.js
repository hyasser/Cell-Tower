var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

//channel.createSticky('onCordovaInfoReady');
//// Tell cordova channel to wait on the CordovaInfoReady event
//channel.waitForInitialization('onCordovaInfoReady');

channel.createSticky('OnCordovaConnectionReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('OnCordovaConnectionReady');
/**
 * @constructor
 */
function LocationInfo() {
    this.cid = null;

    var me = this;

    channel.onCordovaReady.subscribe(function() {
        me.getInfo(function(info) {
        	utils.alert("getInfo");
            me.cid = info.cid;
            channel.OnCordovaConnectionReady.fire();
          //  channel.onCordovaInfoReady.fire();
        },function(e) {
            utils.alert("[ERROR] Error initializing Cordova: " + e);
        });
    });
}

/**
 * Get device info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
LocationInfo.prototype.getInfo = function(successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'LocationInfo.getInfo', arguments);
    cordova.exec(successCallback, errorCallback, "LocationInfo", "getCID", []);
};

module.exports = new LocationInfo();

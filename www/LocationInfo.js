
var LocationInfo = function(){}; 
/**
 * Get device info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
LocationInfo.prototype.getCID = function(callback) {
    cordova.exec(callback, function(err) {
        callback('Error in getting CID');
    }, "LocationInfo", "getCID", []);
};


//Plug in to Cordova
cordova.addConstructor(function() {

    if (!window.Cordova) {
        window.Cordova = cordova;
    };


    if(!window.plugins) window.plugins = {};
    window.plugins.LocationInfo = new LocationInfo();
});


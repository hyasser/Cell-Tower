package com.plugin.CellLocation;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.telephony.TelephonyManager;
import android.telephony.gsm.GsmCellLocation;
import android.util.Log;

import org.apache.cordova.api;

public class LocationInfo extends CordovaPlugin {

	public static final String ACTION = "locationAction";

	@Override
	public boolean execute(String action, JSONArray data,
			CallbackContext callbackContext) throws JSONException {

		try {
			if (action.equals(ACTION)) {
				int CID = this.getCID();
//				Toast.makeText(cordova.getActivity(), "Your CID is "+
//						CID, Toast.LENGTH_LONG).show();
				// callbackContext.success(CID);
				callbackContext.success();
				return true;
			}
			callbackContext.error("Invalid action");
			return false;
		} catch (Exception e) {
			System.err.println("Exception: " + e.getMessage());
			callbackContext.error(e.getMessage());
			return false;
		}
	}

	private int getCID() throws IOException {
		TelephonyManager tm = (TelephonyManager) getSystemService(Context.TELEPHONY_SERVICE);
		GsmCellLocation location = (GsmCellLocation) tm.getCellLocation();
		int cellID = location.getCid();
		Log.i("Cell ID", cellID+"");
		return cellID;
	}

}

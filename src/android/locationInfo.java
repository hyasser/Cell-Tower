package com.plugin.CellLocation;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import java.io.IOException;

import android.content.Context;
import android.telephony.TelephonyManager;
import android.telephony.gsm.GsmCellLocation;
import android.util.Log;

public class locationInfo extends CordovaPlugin {

	public static final String ACTION = "sendCID";

	@Override
	public boolean execute(String action, JSONArray data,
			CallbackContext callbackContext) throws JSONException {

		try {
			if (action.equals(ACTION)) {
				
				JSONObject r = new JSONObject();
				r.put("cid", this.getCID());
				callbackContext.success(r);
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
		TelephonyManager tm = (TelephonyManager) this.cordova.getActivity().getApplicationContext().getSystemService(Context.TELEPHONY_SERVICE);
		GsmCellLocation location = (GsmCellLocation) tm.getCellLocation();
		int cellID = location.getCid();
		Log.i("Cell ID", cellID+"");
		return cellID;
	}

}

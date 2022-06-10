package com.photobook; // replace com.your-app-name with your app’s name

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


import java.util.Map;
import java.util.HashMap;

import android.util.Log;

public class DeviceInfoModule extends ReactContextBaseJavaModule {
    DeviceInfoModule(ReactApplicationContext context) {
        super(context);
    }

    // add to DeviceModule.java
    @Override
    public String getName() {
        return "DeviceInfoModule";
    }


    @ReactMethod
    public void getUniqueId(String name, Callback callBack) {
        Log.d("DeviceInfoModule", "name: " + name);
        if (name.equals("zut")) {
            callBack.invoke("et paf!");
            return;
        }
        callBack.invoke(null, "titi");
    }
}
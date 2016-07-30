package com.liangxunwang.unimanager.baiduyun.demo;


import com.liangxunwang.unimanager.baiduyun.annotation.JSonPath;

import java.util.LinkedList;
import java.util.List;

public class AddDevicesToTagResponse extends PushResponse {

	@JSonPath(path="response_params\\result")
	private List<DeviceInfo> devicesInfoAfterAdded = new LinkedList<DeviceInfo> ();
	
	// get
	public List<DeviceInfo> getDevicesInfoAfterAdded () {
		return devicesInfoAfterAdded;
	}
}

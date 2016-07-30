package com.liangxunwang.unimanager.baiduyun.filter;

import com.liangxunwang.unimanager.baiduyun.annotation.HttpParamKeyName;
import com.liangxunwang.unimanager.baiduyun.annotation.R;
import com.liangxunwang.unimanager.baiduyun.utility.StringUtility;
import com.liangxunwang.unimanager.baiduyun.utility.YunCommonUtility;

import java.lang.reflect.Field;
import java.util.Map;

public class HttpParamKeyNameFilter implements IFieldFilter {

	@Override
	public void validate(Field field, Object req) throws Exception {

		if ( field.isAnnotationPresent(HttpParamKeyName.class) ) {
			Object obj = field.get(req);
			if ( obj == null ) {
				HttpParamKeyName annotation = field.getAnnotation(HttpParamKeyName.class);
				if ( annotation.param() == R.REQUIRE ) {
					throw new Exception(field.getName() + " is null, default require");
				}
			}
		}

	}

	@Override
	public void mapping(Field field, Object req, Map<String, String> params)
			throws Exception {

		if (field.isAnnotationPresent(HttpParamKeyName.class)) {

			Object obj = field.get(req);
			if (obj == null) {
				return;
			}
				
			HttpParamKeyName annotation = field.getAnnotation(HttpParamKeyName.class);
			Class zlass = field.getType();
			if (zlass.equals(Long.class)
					|| "long".equalsIgnoreCase(zlass.getName())) {
				params.put(annotation.name(), obj.toString());
			} else if (zlass.equals(Integer.class)
					|| "int".equalsIgnoreCase(zlass.getName())) {
				params.put(annotation.name(), obj.toString());
			} else if (zlass.equals(String.class)) {
				params.put(annotation.name(), (String) obj);
			} else if (zlass.equals(java.util.Date.class)) {
				params.put(annotation.name(),
						YunCommonUtility.formatFromDate((java.util.Date) obj));
			} else if (zlass.isEnum()) {
				params.put(annotation.name(), obj.toString());
			} else if (zlass.equals(java.util.List.class)) {
				params.put(annotation.name(),
						StringUtility.toJson((java.util.List) obj));
			} else if (zlass.equals(java.util.Set.class)) {
				params.put(annotation.name(),
						StringUtility.toJson((java.util.Set) obj));
			}
		}
		
	}
}
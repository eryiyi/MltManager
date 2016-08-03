package com.liangxunwang.unimanager.mvc.app;

import com.liangxunwang.unimanager.model.AdObj;
import com.liangxunwang.unimanager.model.HotWordObj;
import com.liangxunwang.unimanager.model.tip.DataTip;
import com.liangxunwang.unimanager.query.AdQuery;
import com.liangxunwang.unimanager.service.ListService;
import com.liangxunwang.unimanager.service.ServiceException;
import com.liangxunwang.unimanager.util.ControllerConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by zhl on 2015/2/2.
 */
@Controller
public class AppHotWordController extends ControllerConstants {
    @Autowired
    @Qualifier("hotWordService")
    private ListService hotWordServiceLst;


    //列表
    @RequestMapping(value = "/getHotWord", produces = "text/plain;charset=UTF-8")
    @ResponseBody
    public String getHotWord(AdQuery query){
        try {
            List<HotWordObj> list = (List<HotWordObj>) hotWordServiceLst.list(query);
            DataTip tip = new DataTip();
            tip.setData(list);
            return toJSONString(tip);
        }catch (ServiceException e){
            return toJSONString(ERROR_1);
        }
    }

}

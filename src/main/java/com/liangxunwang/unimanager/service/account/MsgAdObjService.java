package com.liangxunwang.unimanager.service.account;

import com.liangxunwang.unimanager.dao.MsgAdDao;
import com.liangxunwang.unimanager.model.MsgAd;
import com.liangxunwang.unimanager.service.*;
import com.liangxunwang.unimanager.util.StringUtil;
import com.liangxunwang.unimanager.util.UUIDFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zhl on 2015/3/3.
 */
@Service("msgAdObjService")
public class MsgAdObjService implements ListService,SaveService,DeleteService,ExecuteService, UpdateService {
    @Autowired
    @Qualifier("msgAdDao")
    private MsgAdDao msgAdDao;

    @Override
    public Object list(Object object) throws ServiceException {
        Map<String, Object> map = new HashMap<String, Object>();
        List<MsgAd> lists = msgAdDao.lists(map);
        return lists;
    }

    @Override
    public Object save(Object object) throws ServiceException {
        MsgAd adObj = (MsgAd) object;
        adObj.setMsg_ad_no(UUIDFactory.random());
        msgAdDao.save(adObj);
        return null;
    }

    @Override
    public Object delete(Object object) throws ServiceException {
        String msg_ad_no = (String) object;
        msgAdDao.delete(msg_ad_no);
        return null;
    }

    @Override
    public Object execute(Object object) throws ServiceException {
        return msgAdDao.findById((String) object);
    }

    @Override
    public Object update(Object object) {
        MsgAd msgAd = (MsgAd) object;
        msgAdDao.update(msgAd);
        return null;
    }
}

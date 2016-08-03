package com.liangxunwang.unimanager.service.account;

import com.liangxunwang.unimanager.dao.AdDao;
import com.liangxunwang.unimanager.dao.HotWordObjDao;
import com.liangxunwang.unimanager.model.AdObj;
import com.liangxunwang.unimanager.model.HotWordObj;
import com.liangxunwang.unimanager.query.AdQuery;
import com.liangxunwang.unimanager.service.*;
import com.liangxunwang.unimanager.util.Constants;
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
@Service("hotWordService")
public class HotWordService implements ListService,SaveService ,DeleteService{
    @Autowired
    @Qualifier("hotWordObjDao")
    private HotWordObjDao hotWordObjDao;

    @Override
    public Object list(Object object) throws ServiceException {
//        AdQuery query = (AdQuery) object;
        Map<String, Object> map = new HashMap<String, Object>();
//        if(!StringUtil.isNullOrEmpty(query.getMm_ad_type())){
//            map.put("mm_ad_type", query.getMm_ad_type());
//        }
        List<HotWordObj> lists = hotWordObjDao.lists(map);
//        if(lists != null){
//            for(HotWordObj adObj:lists){
//                if(!StringUtil.isNullOrEmpty(adObj.getMm_ad_pic())){
//                    if(adObj.getMm_ad_pic().startsWith("upload")){
//                        adObj.setMm_ad_pic(Constants.URL + adObj.getMm_ad_pic());
//                    }else {
//                        adObj.setMm_ad_pic(Constants.QINIU_URL + adObj.getMm_ad_pic());
//                    }
//                }
//            }
//        }
        return lists;
    }

    @Override
    public Object save(Object object) throws ServiceException {
        HotWordObj adObj = (HotWordObj) object;
        adObj.setMm_hot_word_id(UUIDFactory.random());
        hotWordObjDao.save(adObj);
        return null;
    }

    @Override
    public Object delete(Object object) throws ServiceException {
        String mm_hot_word_id = (String) object;
        hotWordObjDao.delete(mm_hot_word_id);
        return null;
    }

}

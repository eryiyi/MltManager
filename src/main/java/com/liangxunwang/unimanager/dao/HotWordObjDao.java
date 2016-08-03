package com.liangxunwang.unimanager.dao;

import com.liangxunwang.unimanager.model.AdObj;
import com.liangxunwang.unimanager.model.HotWordObj;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by zhl on 2015/1/29.
 */
@Repository("hotWordObjDao")
public interface HotWordObjDao {

    /**
     * 查询ad
     */
    List<HotWordObj> lists(Map<String, Object> map);

    //保存
    void save(HotWordObj hotWordObj);

    //删除
    void delete(String mm_hot_word_id);

}

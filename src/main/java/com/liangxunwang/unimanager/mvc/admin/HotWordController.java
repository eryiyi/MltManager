package com.liangxunwang.unimanager.mvc.admin;

import com.liangxunwang.unimanager.model.*;
import com.liangxunwang.unimanager.query.AdQuery;
import com.liangxunwang.unimanager.query.LevelQuery;
import com.liangxunwang.unimanager.query.ProvinceQuery;
import com.liangxunwang.unimanager.service.*;
import com.liangxunwang.unimanager.util.ControllerConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 */
@Controller
@RequestMapping("/hotWordController")
public class HotWordController extends ControllerConstants {

    @Autowired
    @Qualifier("hotWordService")
    private ListService levelService;

    @Autowired
    @Qualifier("hotWordService")
    private SaveService levelServiceSave;

    @Autowired
    @Qualifier("hotWordService")
    private DeleteService levelServiceSaveDel;

    @Autowired
    @Qualifier("logoService")
    private SaveService logoService;


    @RequestMapping("list")
    public String list(HttpSession session,ModelMap map, AdQuery query){
        Admin manager = (Admin) session.getAttribute(ACCOUNT_KEY);
        List<HotWordObj> list = (List<HotWordObj>) levelService.list(query);
        map.put("list", list);
        return "/hotword/list";
    }

    @RequestMapping("toAdd")
    public String toAdd(ModelMap map){
        return "/hotword/add";
    }

    @RequestMapping("add")
    @ResponseBody
    public String add(HttpSession session,HotWordObj hotWordObj){
        Admin manager = (Admin) session.getAttribute(ACCOUNT_KEY);
        levelServiceSave.save(hotWordObj);
        //日志记录
        logoService.save(new LogoObj("添加热门搜索词汇："+hotWordObj.getMm_hot_word_title(), manager.getMm_manager_id()));
        return toJSONString(SUCCESS);
    }

    @RequestMapping("delete")
    @ResponseBody
    public String delete(HttpSession session,String mm_hot_word_id){
        Admin manager = (Admin) session.getAttribute(ACCOUNT_KEY);
        levelServiceSaveDel.delete(mm_hot_word_id);
        //日志记录
        logoService.save(new LogoObj("删除热门词汇："+mm_hot_word_id, manager.getMm_manager_id()));
        return toJSONString(SUCCESS);
    }


}

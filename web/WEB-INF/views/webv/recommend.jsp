<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="um" uri="/unimanager-tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" trimDirectiveWhitespaces="true" %>
<!DOCTYPE html>
<html lang="zh_CH">
<head>
    <meta charset="utf-8">
    <title>花木苗木求购信息、供应信息、金牌榜和服务中心，具备一键拨号、一键导航、一键分享功能。整合全国苗木行业资源，服务于全国苗木行业发展，受到全国苗木行业人士好评.以苗木行业供求信息为基础，搭建起农村信息及电商为一体的网络平台</title>
    <meta name="Keywords" content="苗连通,花木,花草,苗连通,白蜡,园林,绿化,苗木,花草,草坪"/>
    <meta name="Description" content="花木苗木求购信息、供应信息、金牌榜和服务中心，具备一键拨号、一键导航、一键分享功能。整合全国苗木行业资源，服务于全国苗木行业发展，受到全国苗木行业人士好评.以苗木行业供求信息为基础，搭建起农村信息及电商为一体的网络平台"/>
    <meta name="author" content="苗连通"/>
    <meta name="Copyright" content="苗连通版权所有"/>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="/img/icon.png">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/common.css">
    <link rel="stylesheet" href="/css/index.css">

    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/md5.js"></script>
    <script type="text/javascript" src="/js/cookie.js"></script>
    <script type="text/javascript" src="/js/ajaxfileupload.js"></script>
    <script type="text/javascript" src="/js/Util.js"></script>
    <script type="text/javascript" src="/js/validation.js"></script>

</head>
<body>
<div class="container">
    <!-- HEADING -->
    <div class="heading clearfix">
        <div class="icon-group">
            <i class="icon"></i>
            <c:if test="${is_login=='1'}"><span class="location" onclick="selectPro()">${emp.areaName}</span></c:if>
            <c:if test="${is_login=='0'}"><a href="javaScript:void(0)"><span class="location"
                                                                             onclick="login()">登录</span></a></c:if>
        </div>
        <form action="" class="search-bar clearfix">
            <input type="text" id="keyword" name="keyword" placeholder="关键词:信息标题/手机号/公司名称/联系人">
            <button onclick="searchIndex(event)">搜索</button>
        </form>
        <button class="new"></button>
    </div>
    <!-- CONTENT -->
    <div class="content">
        <input type="hidden" id="is_login" name="is_login" value="${is_login}">
        <input type="hidden" id="accessToken" name="accessToken" value="${emp.access_token}">
        <input type="hidden" id="mm_emp_id" name="mm_emp_id" value="${emp.mm_emp_id}">
        <c:forEach items="${list}" var="e" varStatus="st">
            <div href="javaScript:void(0)" class="item">
                <div class="item-heading clearfix">
                    <a href="javaScript:void(0)" onclick="showDetail('${e.mm_msg_id}')" class="left clearfix">
                        <img src="${e.mm_emp_cover}" alt="" class="head-pic">

                        <div class="detail">
                            <h1 class="company">${e.mm_emp_company}&nbsp;${e.mm_emp_nickname}</h1>

                            <h3 class="time">${e.dateline} &nbsp;&nbsp; ${e.area}</h3>
                        </div>
                    </a>

                    <div class="right">
                        <div class="top clearfix">
                            <c:if test="${e.is_miaomu=='1'}"><img src="/img/tree_icons_trust.png" alt=""></c:if>
                            <c:if test="${e.is_chengxin=='1'}"><img src="/img/tree_icons_group.png" alt=""></c:if>
                        </div>
                        <div class="botton clearfix">
                            <c:if test="${e.mm_level_num=='0'}"><img src="/img/tree_icons_star_1.png" alt=""></c:if>
                            <c:if test="${e.mm_level_num=='1'}"><img src="/img/tree_icons_star_2.png" alt=""></c:if>
                            <c:if test="${e.mm_level_num=='2'}"><img src="/img/tree_icons_star_3.png" alt=""></c:if>
                            <c:if test="${e.mm_level_num=='3'}"><img src="/img/tree_icons_star_4.png" alt=""></c:if>
                            <c:if test="${e.mm_level_num=='4'}"><img src="/img/tree_icons_star_5.png" alt=""></c:if>
                        </div>
                    </div>
                </div>
                <a class="item-content" href="javaScript:void(0)" onclick="showDetail('${e.mm_msg_id}')">
                        ${e.mm_msg_title}
                        ${e.mm_msg_content}
                </a>

                <div class="item-footer clearfix">
                        <%--<button class="read-status-unread"></button>--%>
                        <%--<div  class="share-left">--%>
                        <%--<div class="bdsharebuttonbox" >--%>
                        <%--<a class="bds_mshare" data-cmd="mshare"></a>--%>
                        <%--<a class="bds_qzone" data-cmd="qzone" href="javaScript:void(0)"></a>--%>
                        <%--<a class="bds_tsina" data-cmd="tsina"></a>--%>
                        <%--<a class="bds_tqq" data-cmd="tqq"></a>--%>
                        <%--<a class="bds_more" data-cmd="more">更多</a>--%>
                        <%--<a class="bds_count" data-cmd="count"></a>--%>
                        <%--</div>--%>
                        <%--</div>--%>
                    <a type="button" href="tel:${e.mm_emp_mobile}" class="button-phone"></a>
                    <a type="button" href="javaScript:void(0)" onclick="favourClick('${e.mm_msg_id}')"
                       class="button-fav"></a>
                    <c:if test="${e.mm_msg_picurl !='' && e.mm_msg_picurl != null}"><a type="button"
                                                                                       onclick="showDetail('${e.mm_msg_id}')"
                                                                                       class="button-pic"></a></c:if>

                </div>
            </div>
        </c:forEach>

        <c:if test="${is_login=='1'}"><a href="/html/download.html" class="warning"
                                         target="_blank">下载安卓APP可以查看更多内容...</a></c:if>
        <c:if test="${is_login=='0'}"><a href="/webvLoginController/toLogin.do" class="warning">请先登录...</a></c:if>

        <c:if test="${is_login=='1'}">
            <!--分页信息，页面跳转-->
            <div class="page clearfix">
                <div class="left hide-phone">
                    <a><span>共${page.count}条/${page.pageCount}页</span></a>
                    <a>每页显示
                        <select name="size" id="size" onchange="nextPage('1')">
                            <option value="10" ${query.size==10?'selected':''}>10</option>
                            <option value="20" ${query.size==20?'selected':''}>20</option>
                            <option value="30" ${query.size==30?'selected':''}>30</option>
                            <option value="100" ${query.size==100?'selected':''}>100</option>
                        </select>条
                    </a>
                </div>
                <div class="right">
                    <c:choose>
                        <c:when test="${page.page == 1}">
                            <a class="hide-phone" href="javascript:void(0)">首页</a>
                            <a href="javascript:void(0)">上一页</a>
                        </c:when>
                        <c:otherwise>
                            <a class="hide-phone" href="javascript:void(0);" onclick="nextPage('1')">首页</a>
                            <a href="javascript:void(0);" onclick="nextPage('${page.page-1}')">上一页</a>
                        </c:otherwise>
                    </c:choose>
                    <a class="hide-phone">第<input type="text" id="index" name="index" onkeyup="searchIndex(event)"
                                                  value="${page.page}">页</a>
                    <c:choose>
                        <c:when test="${page.page == page.pageCount}">
                            <a href="javascript:void(0)">下一页</a>
                            <a class="hide-phone" href="javascript:void(0)">末页</a>
                        </c:when>
                        <c:otherwise>
                            <a href="javascript:void(0);" onclick="nextPage('${page.page+1}')">下一页</a>
                            <a class="hide-phone" href="javascript:void(0);"
                               onclick="nextPage('${page.pageCount}')">末页</a>
                        </c:otherwise>
                    </c:choose>
                </div>
            </div>
        </c:if>

    </div>
    <!-- TOOLBAR -->
    <div class="toolbar">
        <a href="javaScript:void(0)" onclick="toPage('/webv/toIndex.do','1')" class="buy"></a>
        <a href="javaScript:void(0)" onclick="toPage('/webvSell/toSell.do','1')" class="sell"></a>
        <a href="javaScript:void(0)" onclick="toPage('/webvShangquanController/toShangquan.do','1')" class="recommend-active"></a>
        <a href="javaScript:void(0)" onclick="toPage('/webvServiceController/toService.do','1')" class="mine"></a>
    </div>
    <!-- TOOLBAR -->
</div>

</body>

<script>
    function toPage(_url, _page) {
        if (_page != '') {
            window.location.href = _url + "?page=" + _page;
        } else {
            window.location.href = _url;
        }
    }
    function favourClick(_mm_msg_id) {
        //先判断是否登录
        var is_login = $("#is_login").val();
        if (is_login == 1) {
            //登陆了
            var mm_emp_id = $("#mm_emp_id").val();
            var accessToken = $("#accessToken").val();
            $.ajax({
                cache: true,
                type: "POST",
                url: "/saveFavour.do",
                data: {"mm_msg_id": _mm_msg_id, "accessToken": accessToken, "mm_emp_id": mm_emp_id},
                async: false,
                success: function (_data) {
                    var data = $.parseJSON(_data);
                    if (data.success) {
                        alert("收藏成功");
                    } else {
                        var _case = {1: "收藏失败", 2: "已经收藏，不能重复收藏！", 9: "账号过期，请重新登录！"};
                        alert(_case[data.code])
                    }
                }
            });
        } else {
            //没登陆
            window.location.href = "/webvLoginController/toLogin.do";
        }
    }

    function showDetail(_mm_msg_id) {
        window.location.href = "/webvRecordController/toDetail.do?mm_msg_id=" + _mm_msg_id;
    }

    function login() {
        //登录页面跳转
        window.location.href = "/webvLoginController/toLogin.do";
    }

    function selectPro() {
        //页面跳转
        window.location.href = "/webvSelectProvinceController/toSelectProvince.do";
    }
</script>

<script type="text/javascript" charset="UTF-8">

    function searchIndex(e) {
        if (e.keyCode != 13) return;
        var _index = $("#index").val();
        var page = parseInt(_page);
        var size = $("#size").val();
        var keyword = $("#keyword").val();
        if (_index <= ${page.pageCount} && _index >= 1) {
            window.location.href = "/webvRecommend/toRecommend.do?page=" + page + "&size=" + size + "&keyword=" + keyword+ "&_t=" + new Date().getTime();
        } else {
            alert("请输入1-${page.pageCount}的页码数");
        }
    }

    function nextPage(_page) {
        var page = parseInt(_page);
        var size = $("#size").val();
        var keyword = $("#keyword").val();
        addCookie("contract_size", size, 36);
        if ((page <= ${page.pageCount} && page >= 1)) {
            window.location.href = "/webvRecommend/toRecommend.do?page=" + page + "&size=" + size + "&keyword=" + keyword+ "&_t=" + new Date().getTime();
        } else {
            alert("请输入1-${page.pageCount}的页码数");
        }
    }

</script>
<script type="text/javascript">
    (function (window, undefined) {
        var currentHash;

        function decodeChineseWords(params) {
            if (params["cn"] == undefined || params["cn"] == "") {
                return;
            }
            var cns = params["cn"].split(","), i;
            for (i = 0; i < cns.length; i++) {
                params[cns[i]] = decodeURIComponent(params[cns[i]]);
            }
        }

        function checkHash() {
            var newHash = window.location.hash;
            if (newHash == "") {
//                window.location.hash = "#module=main";
                return;
            }
            if (newHash == currentHash) return;
            currentHash = newHash;
            var paramsString = currentHash.substring(1);
            var paramsArray = paramsString.split("&");
            var params = {};
            for (var i = 0; i < paramsArray.length; i++) {
                var tempArray = paramsArray[i].split("=");
                params[tempArray[0]] = tempArray[1];
            }
            var _url = params["module"].replace(/\./g, "/") + ".do?_t=" + new Date().getTime();
            delete params["module"];
            decodeChineseWords(params);
            $.ajax({
                url: _url, type: "post", data: params, success: function (data) {
                    var editor;
                    while ((editor = Util.editors.shift()) != undefined) {
                        editor.destroy();
                    }
                    $("#content").html(data);
                }
            });
        }

        window.setInterval(checkHash, 100);
    })(window);


</script>

</html>
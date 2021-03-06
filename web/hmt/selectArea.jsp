<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="um" uri="/unimanager-tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" trimDirectiveWhitespaces="true" %>
<!DOCTYPE html>
<html lang="zh_CH">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" href="../img/icon.png" type="image/png"/>
    <meta name="renderer" content="webkit">
    <title>苗连通|地区选择</title>
    <meta name="keywords" content="苗连通,惠民,苗木,花木,苗木交易,花木求购,苗木求购,花木资讯,花木论坛,花木销售,苗木销售,苗木资讯,绿化苗木,花草,苗连通,白蜡,园林,惠民皂户李镇,苗木协会">
    <meta name="Description"
          content=" 苗连通是惠民县本地第一苗木供求信息平台、信息通讯平台，突破了苗木大市场、绿化工程公司、经纪人、苗农之间的信息壁垒，让市场订单苗木不愁买，苗农种植苗木不愁卖！为本地苗木行业发展助力，让经纪人足不出户，随时随地做生意！让苗农及时了解市场行情，苗木卖价更高更容易！">
    <link href="../hmt/css/common/index-type.css" rel="stylesheet" type="text/css"/>
    <link href="../hmt/css/common/common.css" rel="stylesheet" type="text/css"/>
    <link href="../hmt/css/common/base.css" rel="stylesheet" type="text/css"/>
    <link href="../hmt/css/frame.css" rel="stylesheet" type="text/css"/>
    <link href="../hmt/css/category-vegetable/common.css" rel="stylesheet" type="text/css"/>
    <link href="../hmt/css/search/style.css" rel="stylesheet" type="text/css"/>
    <link href="../hmt/css/search/base.css" rel="stylesheet" type="text/css"/>
    <link href="../hmt/css/supply/index.css" rel="stylesheet" type="text/css"/>
    <link href="../hmt/css/location_select.css" rel="stylesheet" type="text/css"/>


    <script type="text/javascript" src="../js/jquery.min.js"></script>
    <script type="text/javascript" src="../js/md5.js"></script>
    <script type="text/javascript" src="../js/cookie.js"></script>
    <script type="text/javascript" src="../js/ajaxfileupload.js"></script>
    <script type="text/javascript" src="../js/Util.js"></script>
    <script type="text/javascript" src="../js/validation.js"></script>
    <script language="javascript" src="../js/jquery.js"></script>
    <script type="text/javascript" src="../js/jquery_latest.js"></script>
    <style>
        .index-button {
            display: block;
            width: 300px;
            line-height: 150%;
            -webkit-border-radius: 4rem;
            -moz-border-radius: 4rem;
            border-radius: 4rem;
            text-align: center;
            margin: 0 auto;
            font-size: 1.5rem;
            color: #fff !important;
            background-color: #009237;
        }
    </style>


</head>
<body>
<!-- 顶部 -->
<div class="topbar">
    <div class="container clearfix">
        <ul class="top-login fl">
            <li class="dropdown">
                <div class="dropdown-label dl-city">
                    <i>&nbsp;</i><span class="tit">点击选择区域</span></div>
            </li>

            <c:if test="${is_login=='1'}">
                <ul class="fl">
                    <li>
                        <div class="label" id="userName">
                            <a href="javascript:void(0)">${emp.mm_emp_nickname}</a>
                        </div>
                    </li>
                    <li>
                        <div class="label o-login">
                            <a href="javascript:void(0)" onclick="quiteClick()">退出</a></div>
                    </li>
                    <li>
                        <div class="label pr">
                            <a href="/netNoticeController/list.do?page=1" class="msg">消息<span
                                    class="msg-mark"></span></a></div>
                    </li>
                </ul>
            </c:if>

            <ul class="fl">
                <li class="label orange">您好，欢迎来到苗连通信息平台</li>
                <c:if test="${is_login=='0'}">
                    <li class="label p-login">
                        <a title="马上登录，享受更多会员专享服务" href="javascript:void(0)" onclick="login()"
                           rel="nofollow">请登录</a>
                    </li>
                    <li class="label">
                        <a title="马上注册，共享无限农业商机" href="javascript:void(0)" onclick="reg()"
                           rel="nofollow">免费注册 </a>
                    </li>
                </c:if>
            </ul>

        </ul>
        <ul class="top-nav fr">
            <li id="hn_home_id">
                <div class="label">
                    <a href="/hmtIndex/toIndex.do?page=1">苗连通求购信息</a></div>
            </li>

            <c:if test="${is_login=='1'}">
                <li>
                    <div class="label">
                        <a href="/netCenterController/toCenter.do" rel="nofollow">我的中心</a>
                    </div>
                </li>
            </c:if>

            <li class="dropdown">
                <div class="dropdown-label">
                    <i>&nbsp;</i><span><a href="javaScript:void(0)" target="_blank"
                                          rel="nofollow">手机苗连通</a></span></div>
                <div class="dropdown-layer dd-hn-qrcode">
                    <div class="qrcode">
                        <img src="../hmt/images/category-vegetable/topbar-hn-app.png" alt="手机苗连通">

                        <p>
                            <span>扫一扫下载</span><span>手机苗连通App</span></p>
                    </div>
                </div>
            </li>
            <li class="dropdown">
                <div class="dropdown-label">
                    <i>&nbsp;</i><span>关注苗连通</span></div>
                <div class="dropdown-layer dd-hn-qrcode">
                    <div class="qrcode">
                        <img src="../hmt/images/category-vegetable/topbar-hn-weixin.png" alt="苗连通官方微信">

                        <p>
                            <span>扫码关注</span><span>苗连通官方微信</span></p>
                    </div>
                </div>
            </li>
            <li class="dropdown">
                <div class="dropdown-label">
                    <i>&nbsp;</i><span><a href="javascript:void(0)" target="_blank" rel="nofollow">帮助中心</a></span></div>
                <div class="dropdown-layer dd-help-center">
                    <p>
                        <a href="/netWeixinController/toKefu.do" target="_blank" rel="nofollow">微信客服</a>
                        <a href="/netKefuController/toKefu.do" target="_blank" rel="nofollow">电话客服</a></p>
                </div>
            </li>
        </ul>
    </div>
</div>
<!--头部 导航-->
<div class="type-head">
    <h1 class="logo">
        <a href="javascript:void(0)" title="苗连通信息平台"></a>
    </h1>

</div>
<div class="type-nav">
    <div class="nav-con">
        <!-- 顶部栏目-->
        <ul class="nav-con-tit">
            <li><a href="/hmtIndex/toIndex.do?page=1&mm_msg_type=0" class="nav-tstj">求购大厅</a></li>
            <li><a href="/hmtIndex/toIndex.do?page=1&mm_msg_type=1" class="nav-dptj">供应大厅</a></li>
            <li><a href="/netTopController/toTop.do?page=1" class="nav-tstj nav-active">金牌榜</a></li>
            <li><a href="/netServiceController/toService.do" class="nav-zxhq">服务中心</a></li>
            <li><a href="../html/download.html" target="_blank" class="nav-zxhq">手机版</a></li>
        </ul>
    </div>
</div>
<!--头部 导航 end-->

<input type="hidden" id="is_login" name="is_login" value="${is_login}">
<input type="hidden" id="accessToken" name="accessToken" value="${emp.access_token}">
<input type="hidden" id="mm_emp_id" name="mm_emp_id" value="${emp.mm_emp_id}">

<div class="container wrap-1190">

    <form action="supply.htm" id="filterForm" class="fl" style="width: 956px;">
        <div class="noticebar mt_15">
            <input type="text" id="keyword" name="keyword" autocomplete="off" class="notice-input" value=""
                   placeholder="标题|手机号|公司名称|联系人">
            <a href="javaScript:void(0)" onclick="searchIndex(event)" class="notice-submit"> <i
                    class="lee-ico lee-cx"></i>搜索</a>
            <span class="notice-msg"><a href="#" target="_blank" rel="nofollow">欢迎使用苗连通信息平台，请谨慎核实信息内容!</a></span>
        </div>
        <%--<div class="tabs mt_15">--%>
        <%--<ul class="tabs-list">--%>
        <%--&lt;%&ndash;<c:if test="${query.mm_msg_type=='0'}"><li class="cur" onclick="javascript:changeShowType('0');"><a>最新求购</a></li></c:if>&ndash;%&gt;--%>
        <%--&lt;%&ndash;<c:if test="${query.mm_msg_type=='1'}"><li class="cur" onclick="javascript:changeShowType('0');"><a>最新供应</a></li></c:if>&ndash;%&gt;--%>
        <%--</ul>--%>
        <%--<div class="tabs-msg"><a></a></div>--%>
        <%--<div class="list-pages">--%>
        <%--<a href="javascript:void(0);">&lt;</a>--%>
        <%--&lt;%&ndash;<span>${page.page}/${page.pageCount}</span>&ndash;%&gt;--%>
        <%--<a href="http://www.cnhnb.com/supply/p/0-0-2">&gt;</a>--%>

        <%--</div>--%>
        <%--</div>--%>
        <div class="pro-list mb_10">
            <%--<c:if test="${is_guanzhu=='0'}"><span>您已经申请了关注区域！请等待管理员审核</span></c:if>--%>
            <%--<c:if test="${is_guanzhu=='1'}">--%>
            <%--<h2 class="label-title">我关注的区域</h2>--%>
            <%--<ul class="location-list location-list-green clearfix">--%>
            <%--<c:forEach items="${areaNames}" var="e" varStatus="st">--%>
            <%--<li>--%>
            <%--<a href="/webvGuanzhuController/guanzhuArea.do?page=1">--%>
            <%--<span class="list-name">${e}</span>--%>
            <%--</a>--%>
            <%--</li>--%>
            <%--</c:forEach>--%>
            <%--</ul>--%>

            <c:if test="${is_guanzhu=='0'}"><h2 class="label-title">您已经申请了关注区域！请等待管理员审核</h2></c:if>
            <c:if test="${is_guanzhu=='1'}"><h2 class="label-title">我关注的区域</h2></c:if>

            <ul class="location-list location-list-green clearfix">
                <c:forEach items="${areaNames}" var="e" varStatus="st">
                    <li>
                        <a href="/NetGuanzhuController/guanzhuArea.do?page=1">
                            <span class="list-name">${e}</span>
                        </a>
                    </li>
                </c:forEach>
            </ul>

            <%--</c:if>--%>
            <c:if test="${is_guanzhu=='2'}"><span>您申请的关注区域未通过审核，请联系客服！</span></c:if>
            <c:if test="${is_guanzhu=='3'}"><span>您尚未申请关注区域，请设置关注区域！</span></c:if>

            <%--<ul class="location-list clearfix">--%>
            <%--<h2 class="label-title">*热门区域</h2>--%>
            <%--<c:forEach items="${listhot}" var="e" varStatus="st">--%>
            <%--<li>--%>
            <%--<a href="/webvHotController/toIndex.do?page=1&countryid=${e.areaID}&is_guanzhu='1'">--%>
            <%--<span class="list-name">${e.cityName}${e.area}</span>--%>
            <%--</a>--%>
            <%--</li>--%>
            <%--</c:forEach>--%>
            <%--</ul>--%>

            <ul class="location-list clearfix">
                <h2 class="label-title">*热门区域</h2>
                <c:forEach items="${listhot}" var="e" varStatus="st">
                    <li>
                        <a href="/netHotController/toIndex.do?page=1&countryid=${e.areaID}&is_guanzhu='1'">
                            <span class="list-name">${e.cityName}${e.area}</span>
                        </a>
                    </li>
                </c:forEach>

            </ul>
            <div class="clear"></div>

            <script>
                function toPage(_url, _page) {
                    if (_page != '') {
                        window.location.href = _url + "?page=" + _page;
                    } else {
                        window.location.href = _url;
                    }
                }
            </script>

        </div>
    </form>
    <div class="sides mt_15">
        <div class="release-but mb_15"><a href="javascript:void(0)" target="_blank" onclick="addMsg()"><i
                class="lee-ico lee-fb"></i> &nbsp; 发布供应</a></div>
        <div class="release-but mb_15"><a href="/netKefuController/toKefu.do" target="_blank"><i
                class="lee-ico lee-fb"></i> &nbsp; 客服中心</a></div>
        <div class="ad2">


            <a href="../html/download.html" target="_blank" title="苗连通app" rel="nofollow">
                <img src="../hmt/images/2C604DU858ChRkRlcHTCeAU9-hAAHy19HEc7E108.jpg" alt="苗连通app" width="216"
                     height="353">
            </a>

        </div>
        <div class="sides-hot mtb_15">
            <h2>热门信息</h2>
            <ul>
                <c:forEach items="${listsHot}" var="e" varStatus="st">
                    <li>
                        <c:if test="${e.mm_msg_type=='0'}"><em class="hot">[求购]</em></c:if>
                        <c:if test="${e.mm_msg_type=='1'}"><em>[供应]</em></c:if>
                        <h3><a target="_blank" href="javascript:void(0)"
                               onclick="showDetail('${e.mm_msg_id}')">${e.mm_msg_title}</a></h3>

                        <p></p>
                    </li>
                </c:forEach>
            </ul>
        </div>
    </div>

</div>
<!--内容 end-->

<jsp:include page="footer.jsp" flush="true"/>

<script src="../hmt/js/home.js" type="text/javascript"></script>
<script src="../hmt/js/jquery.SuperSlide.2.1.1.js" type="text/javascript"></script>
<!--首页右侧焦点图调用js-->
<!--搜索调用js 会将logo链接至生产-->
<script src="../hmt/js/top_foot.js" type="text/javascript"></script>
<script src="../hmt/js/vegetable.js" type="text/javascript"></script>
<!--蔬菜二级类目调用js--
</html>-->
</body>

<script>
    function toPage(_url, _page) {
        if (_page != '') {
            window.location.href = _url + "?page=" + _page;
        } else {
            window.location.href = _url;
        }
    }

    function addMsg() {
        var is_login = $("#is_login").val();
        if (is_login == 1) {
            //登陆了
            if (${emp.is_upate_profile == '1'}) {
                window.location.href = "/netAddRecordController/toAddRecord.do";
            } else {
                alert("请先完善您的个人资料");
                window.location.href = "/netProfileController/toUpdateProfile.do";
            }
        } else {
            //登录页面跳转
            window.location.href = "/netLoginController/toLogin.do";
        }
    }

    function login() {
        //登录页面跳转
        window.location.href = "/netLoginController/toLogin.do";
    }
    function reg() {
        //注册页面跳转
        window.location.href = "/netRegController/toReg.do";
    }

    function quiteClick() {
        //退出
        $.ajax({
            cache: true,
            type: "POST",
            url: "/netLoginController/toQuite.do",
            data: {},
            async: false,
            success: function (_data) {
                var data = $.parseJSON(_data);
                if (data.success) {
                    alert("您已退出账号，请重新登录！");
                    window.location.href = "/netLoginController/toLogin.do";
                } else {
                    var _case = {1: "退出账号失败！", 9: "账号过期，请重新登录！"};
                    alert(_case[data.code])
                }
            }
        });
    }
</script>

</html>


<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="um" uri="/unimanager-tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" trimDirectiveWhitespaces="true" %>
<!DOCTYPE html>
<html lang="zh_CH">
<head>
    <meta charset="utf-8">
    <title>花木苗木求购信息、供应信息、金牌榜和服务中心，具备一键拨号、一键导航、一键分享功能。整合全国苗木行业资源，服务于全国苗木行业发展，受到全国苗木行业人士好评.以苗木行业供求信息为基础，搭建起农村信息及电商为一体的网络平台</title>
    <meta name="Keywords" content="苗联通,花木,花草,苗联通,白蜡,园林,绿化,苗木,花草,草坪"/>
    <meta name="Description" content="花木苗木求购信息、供应信息、金牌榜和服务中心，具备一键拨号、一键导航、一键分享功能。整合全国苗木行业资源，服务于全国苗木行业发展，受到全国苗木行业人士好评.以苗木行业供求信息为基础，搭建起农村信息及电商为一体的网络平台"/>
    <meta name="author" content="苗联通"/>
    <meta name="Copyright" content="苗联通版权所有"/>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="/img/icon.png">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/common.css">
    <link rel="stylesheet" href="/css/common_2.css">
    <link rel="stylesheet" href="/css/location_select.css">

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
    <%--<div class="heading clearfix">--%>
        <%--<!-- HEADING -->--%>
        <%--<div class="heading clearfix">--%>
            <%--<a href="javascript:history.back()" class="back"><img src="/img/tree_icons_back.png" alt=""></a>--%>

            <%--<h1 class="head-title">地区选择</h1>--%>
        <%--</div>--%>
    <%--</div>--%>
    <!-- CONTENT -->
    <div class="content w95">
        <ul class="location-list clearfix">
            <c:forEach items="${list}" var="e" varStatus="st">
                <li>
                    <a href="/webvSelectProvinceController/toSelectArea.do?father=${e.cityID}">
                        <span class="list-name">${e.city}</span>
                        <span class="list-num"></span>
                    </a>
                </li>
            </c:forEach>
        </ul>
    </div>
</div>
</body>
</html>
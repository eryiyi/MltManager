<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="um" uri="/unimanager-tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" trimDirectiveWhitespaces="true" %>
<div class="row">
    <div id="breadcrumb" class="col-xs-12">
        <a href="#" class="show-sidebar">
            <i class="fa fa-bars"></i>
        </a>
        <ol class="breadcrumb pull-left">
            <li><a href="javascript:void(0)" onclick="toPage('mainPage','')">主页</a></li>
            <li><a href="javascript:void(0)">热门搜索词管理</a></li>
            <li><a href="javascript:void(0)">添加热门搜索词</a></li>
        </ol>

    </div>
</div>

<div class="row">
    <div class="col-xs-12 col-sm-12">
        <div class="box">
            <div class="box-header">
                <div class="box-name">
                    <i class="fa fa-search"></i>
                    <span>添加热门搜索词</span>
                </div>
                <div class="box-icons">
                    <a class="collapse-link">
                        <i class="fa fa-chevron-up"></i>
                    </a>
                    <a class="expand-link">
                        <i class="fa fa-expand"></i>
                    </a>
                    <a class="close-link">
                        <i class="fa fa-times"></i>
                    </a>
                </div>
                <div class="no-move"></div>
            </div>
            <div class="box-content">
                <h4 class="page-header">添加热门搜索词</h4>

                <form class="form-horizontal" role="form">

                    <div class="form-group">
                        <label class="col-sm-2 control-label">词汇</label>

                        <div class="col-sm-4">
                            <input type="text" id="mm_hot_word_title" class="form-control" placeholder="词汇"
                                   data-toggle="tooltip" data-placement="bottom" title="Tooltip for name">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">排序</label>
                        <div class="col-sm-4">
                            <input type="text" id="mm_hot_num" value="0" class="form-control" placeholder="排序 数字"
                                   data-toggle="tooltip" data-placement="bottom" title="Tooltip for name">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-9 col-sm-offset-3">
                            <button type="button" class="btn btn-primary" onclick="saveP()">添加</button>
                            <button type="button" class="btn btn-primary" onclick="javascript :history.back(-1)">返回
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    function saveP() {
        var mm_hot_word_title = $("#mm_hot_word_title").val();
        var mm_hot_num = $("#mm_hot_num").val();

        if (mm_hot_word_title.replace(/\s/g, '') == '') {
            alert("请输入词汇");
            return;
        }
        $.ajax({
            cache: true,
            type: "POST",
            url: "/hotWordController/add.do",
            data: {
                "mm_hot_num": mm_hot_num,
                "mm_hot_word_title": mm_hot_word_title
            },
            async: false,
            success: function (_data) {
                var data = $.parseJSON(_data);
                if (data.success) {
                    alert("执行成功");
                    window.location.href = "#module=hotWordController/list"+ "&_t=" + new Date().getTime();
                } else {
                    alert("执行失败，请检查")
                }
            }
        });
    }
</script>


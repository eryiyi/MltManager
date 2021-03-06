﻿(function ($, window, document) {
    // 页面视图基类 - 公用类组件处理
    $.BaseView = function () {
        this.$dorpdown = $('.topbar .dropdown');
        this.$banner = $('.topbanner');
        this.$category = $('.category');
        this.$toolbar = $('#J-global-toolbar');
        this.init();
    };
    $.BaseView.prototype = {
        // 初始化基类
        init: function () {
            if (this.$dorpdown.length > 0) this.dropdown();  // 顶部下拉
            if (this.$banner.length > 0) this.banner();      // 顶部广告栏
            if (this.$category.length > 0) this.category();  // 类目弹出式菜单
            if (this.$toolbar.length > 0) this.toolbar();    // 侧边工具栏
        },
        // 下拉菜单交互&显示
        dropdown: function () {
            this.$dorpdown.hover(function () {
                $(this).addClass('hover');
            }, function () {
                $(this).removeClass('hover');
                if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0") {
                    var $el = $(this).find('.dropdown-label i');
                    $el.addClass('content-empty');
                    setTimeout(function () {
                        $el.removeClass('content-empty');
                    }, 0);
                }
            });
        },
        // 通栏广告交互&显示
        banner: function () {
            var $banner = this.$banner;
            var $close = $('.close', $banner);
            var $pack = $('.pack', $banner);
            var $big = $('.big', $banner);
            var $small = $('.small', $banner);
            // 配置默认显示时间
            var $topAdv = $('#topAdvDuration');
            var duration = parseInt($topAdv.val()) || 5000;

            var smallShow = function () {
                $small.animate({opacity: 1}, 200);
            };
            var bigHide = function () {
                $big.animate({
                    height: $small.height()
                }, 600, 'easeOutCirc', function () {
                    $(this).hide();
                    smallShow();
                    $('html, body').scroll();
                });
            };
            $small.css({opacity: 0});
            $close.click(function () {
                $banner.slideUp('fast');
                return false;
            });
            $pack.click(function () {
                bigHide();
                return false;
            });
            setTimeout(function () {
                bigHide();
            }, duration);
        },
        // 类目菜单交互
        category: function () {
            var $category = this.$category;
            var $cateItem = $category.find('.label>dl');
            var $cateList = $category.find('.panel>div');
            $cateItem.on('mouseenter', function () {
                var target = $(this).attr('data-target');
                $(this).addClass('hover').siblings().removeClass('hover');
                $cateList.eq(target).show().siblings().hide();
            });
            $('.category').on('mouseleave', function () {
                $(this).find('.panel').hide();
                $(this).find('.label>dl').removeClass('hover');
            }).on('mouseover', function () {
                $(this).find('.panel:hidden').show();
            });
        },
        // 侧边工具栏
        toolbar: function () {
            var $wrap = this.$toolbar.find('.hn-toolbar-wrap');
            var $tabs = this.$toolbar.find('.hn-toolbar-tab');
            var setWrapH = function () {
                $wrap.height($(window).height());
            };
            $tabs.hover(function () {
                $(this).addClass('hn-tbar-tab-hover');
            }, function () {
                $(this).removeClass('hn-tbar-tab-hover');
            });
            var $tab2top = this.$toolbar.find('.hn-tbar-tab-top a');
            $tab2top.click(function () {
                $('html, body').stop(true).animate({scrollTop: 0}, 300);
                return false;
            });
            setWrapH();
            $(window).resize(setWrapH);
        }
    };
}(jQuery, window, document));

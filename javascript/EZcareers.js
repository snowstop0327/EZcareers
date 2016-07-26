/*
 * 展開選單
 */

$(document).ready(function() {
    $('.jobs-list > li').click(function(event) {
        // event.preventDefault();
        // $(this).siblings().find('p').slideUp();
        $(this).find('p').slideToggle('fast');
        $(this).toggleClass('gray-bg');
        var $currIcon = $(this).find("i.the-btn");
        $currIcon.toggleClass('icon-android-remove icon-android-add');
        
    });
});

// SLiding codes
        // $(".jobs-list > li").click(function() {
        //     if (false == $(this).next().is(':visible')) {
        //         $(this).find('p').slideUp();
        //     }

        //     var $currIcon = $(this).find("i.the-btn");

        //     $("i.the-btn").not($currIcon).addClass('icon-android-remove').removeClass('icon-android-add');

        //     $currIcon.toggleClass('icon-android-add icon-android-remove');

        //     $(this).next().slideToggle();

        //     $(this).toggleClass('gray-bg');

        // });
        /*
         * Sticky header
         */

        $(function() {

            $('.EZcareers-header').each(function() {

                var $window = $(window), // 將window轉為jQuery物件
                    $header = $(this), // 將header轉為jQuery物件
                    // 取得header的預設位置
                    headerOffsetTop = $header.offset().top;

                // 監控視窗捲動事件
                // (每次視窗觸發捲動事件時執行處理)
                $window.on('scroll', function() {
                    // 檢查視窗捲動程度、
                    // 若超過header的預設位置則附加類別、
                    // 反之則刪除
                    if ($window.scrollTop() > headerOffsetTop) {
                        $header.addClass('sticky');
                    } else {
                        $header.removeClass('sticky');
                    }
                });
                // debugger;
                // 觸發window的捲動事件
                // (用以調整header的初始位置)
                //$window.trigger('scroll');

            });
        });

/*
 * Sticky fire
 */

$(function() {

    $('#nn-title > h2').each(function() {

        var $window = $(window), // 將window轉為jQuery物件
            $fire = $(this), // 將header轉為jQuery物件
            // 取得header的預設位置
            headerOffsetTop = $fire.offset().top;

        // 監控視窗捲動事件
        // (每次視窗觸發捲動事件時執行處理)
        $window.on('scroll', function() {
            // 檢查視窗捲動程度、
            // 若超過header的預設位置則附加類別、
            // 反之則刪除
            if ($window.scrollTop() > 1) {
                $fire.hide();
                $('#nn-title').addClass('down');
                $('.top-title > svg').show();
            } else {
                $fire.show();
                $('.top-title > svg').hide();
                $('#nn-title').removeClass('down');
            }
        });
        // debugger;
        // 觸發window的捲動事件
        // (用以調整header的初始位置)
        //$window.trigger('scroll');

    });
});

/*
 * menu-bar
 */

$(function() {
    $('.mobile-nav-btn').click(function(event) {
        event.preventDefault();
        /* Act on the event */
        $('.nav-bar').slideToggle('easy-in-out');
    });
});

/*
 * go-top
 */

$(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1) {
            $('#goTop').fadeIn('fast');
        } else {
            $('#goTop').fadeOut('fast');
        }
    });
    $("#goTop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 800);
        //$("html,body").animate({scrollTop:0},900,"easeOutBounce");
        return false;
    });
});






/*
 * 展開選單
 */

$(document).ready(function() {
  $('.jobs-list > li').click(function(event) {
    // event.preventDefault();
    // $(this).siblings().find('p').slideUp();
    $(this).find('p').slideToggle('fast');
    $(this).toggleClass('gray-bg');
    	toggleNavigation();
  });
});
function toggleNavigation() {
    if ($('.jobs-list > li').hasClass('icon-android-add')) {
        // Close Nav
        $(this).removeClass('icon-android-add');
    } else {
        // Open Nav
        $(this).addClass('icon-android-remove');
    }
}    

/*
 * Sticky header
 */

$(function () {

    $('.EZcareers-header').each(function () {

        var $window = $(window), // 將window轉為jQuery物件
            $header = $(this),   // 將header轉為jQuery物件
        // 取得header的預設位置
            headerOffsetTop = $header.offset().top;

        // 監控視窗捲動事件
        // (每次視窗觸發捲動事件時執行處理)
        $window.on('scroll', function () {
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

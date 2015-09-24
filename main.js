$(function(){
 var shrinkHeader = 300;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.main-banner').addClass('smaller');
        }
        else {
            $('.main-banner').removeClass('smaller');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});
$(function() {
  var fix    = $("#header");
  var fixTop = fix.offset().top;
  $(window).scroll(function () {
    if($(window).scrollTop() > fixTop) {
      fix.css("position","fixed");
      fix.css("top","0");
      $(fix).addClass("fixed");
    } else {
      fix.css("position","");
      fix.css("top","");
      $(fix).removeClass("fixed");
    }
  });
});

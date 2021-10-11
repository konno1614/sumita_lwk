import Fix_Nav from './lib/Fix-Nav'
import Nav from './lib/Sp-Nav'
import PageTop from './lib/Page-Top'
import Swiper from './lib/Swiper'
import Wave from './lib/Wave'
import Fadein from './lib/Fadein'

$(function() {
    /**
     * ページ内リンクスクロール
     */
    $('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var header = $("#header");
      var headerHeight = header.outerHeight();
      var position = target.offset().top - headerHeight;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });

});

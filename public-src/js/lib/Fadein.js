$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $('.js-fadein').each(function () {
          const targetPosition = $(this).offset().top;
          if(scrollAmount > targetPosition - wHeight + 60) {
              $(this).addClass("fadeInDown");
          }
      });
  });
});

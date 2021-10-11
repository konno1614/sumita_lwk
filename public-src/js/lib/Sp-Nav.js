$(function(){
  $('.js-toggle-nav').on('click', function () {
    $('.js-toggle-nav').toggleClass('is_active');
    $('.o-nav-sp').toggleClass('is_active');
    $('.o-header').toggleClass('is_active');
  })
  $('.o-nav-sp__item a').on('click', function () {
    $('.js-toggle-nav').removeClass('is_active');
    $('.o-nav-sp').removeClass('is_active');
    $('.o-header').removeClass('is_active');
  })
});

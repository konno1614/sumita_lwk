//ローディング画面の表示
$(window).on('load',function(){
  $("#loading").delay(500).fadeOut('slow');
  $("#loading_box").delay(800).fadeOut('slow');
});

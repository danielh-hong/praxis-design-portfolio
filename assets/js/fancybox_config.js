/* Given up*/

$('[data-fancybox="images"]').fancybox({
  idleTime: false,
  infobar: false,
  beforeShow: function() {
      $(".fancybox-caption").addClass('none');
  },
  afterShow: function() {
      $(".fancybox-caption").wrapInner("<span/>");
      var imageWidth = $(".fancybox-slide--current .fancybox-content").width();
      $(".fancybox-caption").css("width", imageWidth);
      setTimeout($(".fancybox-caption").removeClass('none'), 200);
  }
});
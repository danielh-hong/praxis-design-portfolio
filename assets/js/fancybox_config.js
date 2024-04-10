

// fancybox shit:
$('[data-fancybox="images"]').fancybox({
    idleTime  : false,
    baseClass : 'fancybox-custom-layout',
    margin    : 0,
    gutter    : 0,
    infobar   : false,
    thumbs    : {
      hideOnClose : false,
      parentEl    : '.fancybox-outer'
    },
    touch : {
      vertical : false
    },
    buttons : [
      'close',
      'thumbs',
      'share'
    ],
    animationEffect   : "fade",
    animationDuration : 300,
    onInit : function( instance ) {
      // Create new wrapping element, it is useful for styling
      // and makes easier to position thumbnails
      instance.$refs.inner.wrap( '<div class="fancybox-outer"></div>' );
    },
    caption : function(instance, item) {
      return '<h3>Collection #162 – <br /> The Histographer</h3><p>This collection of photos, curated by The Histographer, is a collection around the concept of \'Autumn is here\'.</p><p><a href="https://unsplash.com/collections/curated/162" target="_blank">unsplash.com</a></p>';
    }
  });
/* Given up*/

$('.fancybox-button').on('click', function() {
  $(this).prop('disabled', true);
  setTimeout(() => $(this).prop('disabled', false), 500); // Re-enable after 500ms
});
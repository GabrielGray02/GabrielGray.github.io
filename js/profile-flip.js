$(function() {
  var $pic = $('#profile-pic');
  $pic.on('click', function() {
    var $this = $(this);
    $this.addClass('flip');
    setTimeout(function() {
      $this.removeClass('flip');
    }, 800);
  });
});

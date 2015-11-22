$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var scroll = $(window).scrollTop();
        var targetScroll = target.offset().top;
        var time = Math.abs(targetScroll-scroll);
        $('html,body').animate({
          scrollTop: targetScroll
        }, Math.min(time * 1.5, 1500));
        return false;
      }
    }
  });
});
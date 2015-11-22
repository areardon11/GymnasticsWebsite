function centerVideo() {
  var $container = $('.video-container');
  var $video = $container.find('video');
  $video.css('top', ($container.height()-$video.height())*0.5);
  $video.css('left', ($container.width()-$video.width())*0.5);
}

$(window).resize(centerVideo);

function onScroll(){
  var $window = $(window);
  var scroll = $window.scrollTop();
  var windowHeight = $window.height();

  var $navigation = $('.navigation');
  var $title = $('.title');

  if (scroll > 0) {
    $navigation.addClass('opaque');
  } else {
    $navigation.removeClass('opaque');
  }

  var titleToHeader = windowHeight * 0.5 + 40;

  if (scroll > titleToHeader) {
    if (!$title.hasClass('in-header')) {
      $title.addClass('in-header');
      setTimeout(function(){
        $title.css('transition', 'all 0.2s');
      }, 1);
    }
  } else {
    if ($title.hasClass('in-header')) {
      $title.css('transition', 'none');
      $title.removeClass('in-header');
    }
  }

  var titleSlideOut = windowHeight * 0.5 + 60;

  if (scroll < titleSlideOut) {
    $title.addClass('slide-out');
  } else {
    $title.removeClass('slide-out');
  }
}

$(window).scroll(onScroll);
$(window).resize(onScroll);

$(function(){
  $('.cover video').on('loadeddata', function() {
    centerVideo();
  });

  onScroll();

  $('.practice-link').click(function(){
    $subMenu = $('.home-link .sub-pages');
    $subMenu.css('display', 'none');
    setTimeout(function(){
      $subMenu.css('display', 'inherit');
    }, 300);
  });
});
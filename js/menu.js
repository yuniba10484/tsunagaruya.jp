(function ($) {
  var $nav = $('.navArea');
  var $btn = $('.toggle_btn');
  var $mask = $('.mask');
  var open = 'open'; // class
  // menu open close
  $btn.on('click', function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on('click', function () {
    $nav.removeClass(open);
  });
})(jQuery);

const fadeElements = document.querySelectorAll('.fadein');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

fadeElements.forEach(el => observer.observe(el));
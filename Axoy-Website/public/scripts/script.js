function scrollFunction1() {
  let e = document.getElementById("el1");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}

function scrollFunction2() {
  let e = document.getElementById("el2");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
    inline: 'center'
  });
}

//  For image fade-in when scrolled (in view) 

function showImages(el) {
  var windowHeight = jQuery(window).height();
  $(el).each(function () {
    var thisPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 200 > thisPos) {
      $(this).addClass("fadeIn");
    }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function () {
  showImages('.star');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function () {
  showImages('.star');
});

/* ---------------------------------------- */

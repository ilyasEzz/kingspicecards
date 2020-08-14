function changeImg(img) {
  const card = img.parentElement.parentElement.parentElement;
  const mainImg = card.querySelector('.card-main-img');

  mainImg.src = img.src;
}

// Owl Carousel
$(document).ready(function () {
  const popularCarousel = $('#popular-items');
  const newCarousel = $('#new-items');
  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    margin: 15,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $('.customNextBtn').click(function () {
    popularCarousel.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.customPrevBtn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    popularCarousel.trigger('prev.owl.carousel', [300]);
  });

  $('.newNextBtn').click(function () {
    newCarousel.trigger('next.owl.carousel');
  });
  // Go to the previous item
  $('.newPrevBtn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    newCarousel.trigger('prev.owl.carousel', [300]);
  });
});

// Popular Items

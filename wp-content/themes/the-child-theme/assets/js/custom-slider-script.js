$(document).ready(function(){

  var sliderGallery = $('.custom-slider.gallery-slider');

  if (sliderGallery.length) {

    var show = sliderGallery.data('show');

    if ($.isNumeric(show) && show > 0) {

      $('.custom-slider.gallery-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: show,
        slidesToControl: show,
        infinite: true,
        arrows: true,
        dots: false,
        focusOnChange: false,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 650,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 300,
          settings: "unslick" // destroys slick
        }]
      });
    }
  }

  var sliderPost = $('.custom-slider.post-slider');

  if (sliderPost.length) {

    var show = sliderPost.data('show');

    if ($.isNumeric(show) && show > 0) {

    $('.custom-slider.post-slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: show,
      slidesToControl: show,
      infinite: true,
      arrows: true,
      dots: false,
      focusOnChange: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      }, {
        breakpoint: 300,
        settings: "unslick" // destroys slick
      }]
    });
  }
}
  });
$(function () {
  $('.select-style').styler();



 

let $slider = $('.intro__list');

if ($slider.length) {
  var currentSlide;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    $(sliderCounter).text( '0' + currentSlide)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

}
$('.intro__list').slick({
  dots: true,
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  verticalSwiping: true,
  arrows: false,
});
  



  $('.new__slider').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  });


$('.js_drop').on('click', function() {
  $(this).toggleClass('active');
  $(this).children().toggleClass('active');
});

$(document).on("click", function(event) {
  if (!$(event.target).closest(".js_drop").length) {
    $(event.target).find('.dropdown').removeClass('active');
    $(event.target).find('.js_drop').removeClass('active');// for animating X

  }
});


  $('.shop-content__btn').on('click', function () {
    $('.shop-content__btn').removeClass('shop-content__btn--active');
    $(this).addClass('shop-content__btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product').addClass('product--list');
  });
  $('.button-grid').on('click', function () {
    $('.product').removeClass('product--list');
  });

});


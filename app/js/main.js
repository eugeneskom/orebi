$(function () {
  $('.select-style, .select, .number').styler();

  let $slider = $('.intro__list');

  if ($slider.length) {
    var currentSlide;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');

    var updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      $(sliderCounter).text('0' + currentSlide)
    };

    $slider.on('init', function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
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
    autoplay: true,
    autoplaySpeed: 1500,

  });
  $('.new__slider').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  });


  $('.js_drop').on('click', function () {
    $(this).toggleClass('active');
    $(this).children().toggleClass('active');
  });

  $(document).on("click", function (event) {
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


  $('.filters__top').on('click', function () {
    $(this).next('.filters__form--dropdown').toggleClass('filters-color__form--collapsed');
    $(this).find('.filters__toggle').toggleClass('filters__toggle--collapsed');
  });


  $(".rate, .comments__rate").rateYo({
    starWidth: "12px",
    rating: 4,
    halfStar: true,
    ratedFill: '#FFD881',
    normalFill: 'rgba(255, 216, 129, 0.2)',
  });





  let tab = function () {
    let tabNav = document.querySelectorAll('.tabs__link'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

    tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
      tabNav.forEach(item => {
        item.classList.remove('is-active')
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
      tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
    }
  };

  tab();


  //accordion opening single panel at a time

  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.accordion__btn');
      // Evento
      links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      $this = $(this),
        $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.accordion__panel').not($next).slideUp().parent().removeClass('open');
      };
    }

    var accordion = new Accordion($('.accordion'), false);
  });


$('.form__radio').click(function(){
  let radioValue = $('.form__radio:checked').val();
  if(radioValue){
    $('.form__checkbox-desc').removeClass('form__checkbox-desc--active')
    $(this).parent().next('.form__checkbox-desc').addClass('form__checkbox-desc--active');
  }
});




















});

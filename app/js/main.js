$(function () {
  $('.select-style').styler();

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
  $('.user').on('click', function () {
    $('.user__list').toggleClass('show')
  });
  $('.cart').on("click", function () {
    $('.cart__inner').toggleClass('show');
  });

  $('.filter').on("click", function () {
    $('.filter__list').toggleClass('show');
  });

  $(document).on("click", function (event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".filter").length) {
      $("body").find(".filter__list").removeClass("filter__list--active");
    }
  });

});
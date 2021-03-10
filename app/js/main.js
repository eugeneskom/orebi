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
  $('.user').on('click', function(){
    $('.user__list').toggleClass('user__list--active')
  });
  $('.cart').on("click", function(){
    $('.cart__inner').toggleClass('cart__inner--active');
  });

  $('.filter').on("click", function(){
    $('.filter__list').toggleClass('filter__list--active');
  });

  $(document).on( "click", function(event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".filter").length) {
      $("body").find(".filter__list").removeClass("filter__list--active");
    }
  });

});
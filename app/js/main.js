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
    $('.user__list').toggleClass('active')
  });
  $('.cart').on("click", function () {
    $('.cart__inner').toggleClass('active');
  });

  $('.dropdown-menu').on("click", function () {
    $('.dropdown-menu').toggleClass('dropdown-menu--active');
    $('.dropdown-menu__list').toggleClass('active');

  });

  $(document).on("click", function (event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if (!$(event.target).closest(".dropdown-menu").length) {
      $("body").find(".dropdown-menu").removeClass("dropdown-menu--active");
      $("body").find(".dropdown-menu__list").removeClass("active");
    }
  });
 


  $('.shop-content__btn').on('click', function(){
    $('.shop-content__btn').removeClass('shop-content__btn--active');
    $(this).addClass('shop-content__btn--active');
  });

  $('.button-list').on('click', function(){
    $('.product').addClass('product--list');
  });
  $('.button-grid').on('click', function(){
    $('.product').removeClass('product--list');
  });

  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    if(!menuOpen){
      menuBtn.classList.add('open');
      menuOpen = true;
    } else{
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });
});
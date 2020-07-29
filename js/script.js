$(".navbar__menu-btn").click(function (e) {
  e.preventDefault();
  $(".menu").toggleClass("menu--active");
});
$(".navbar-menu_close").click(function (e) {
  e.preventDefault();
  $(".menu").removeClass("menu--active");
});

const menuBtn = $('.navbar__menu-btn');

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
		menuBtn.addClass("navbar__menu-btn--pinned");
  } else {
		menuBtn.removeClass("navbar__menu-btn--pinned");
  }
});

$(".navbar-language").click(function (e) {
  e.preventDefault();
  $(".navbar-language_menu").slideToggle();
  let slideArrow = $(".navbar-language");
  slideArrow.toggleClass("navbar-language_active");
});

$(".slider-menu").slick({
  infinite: true,
  slidesToShow: 4,
  variableWidth: true,
  slidesToScroll: 2,
  dots: true,
  arrows: true,
});

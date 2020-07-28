$(".navbar__menu-btn").click(function (e) {
  e.preventDefault();
  $(".navbar-menu").toggleClass("menu_active");
});
$(".navbar-menu_close").click(function (e) {
  e.preventDefault();
  $(".navbar-menu").removeClass("menu_active");
});

const navbar = $(".navbar");
const header = $(".header")

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
		header.addClass("header--pinned");
    navbar.addClass("navbar--pinned");
  } else {
		header.removeClass("header--pinned");
    navbar.removeClass("navbar--pinned");
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

$('.navbar-burger').click(function(e){
    e.preventDefault();
    $('.navbar-menu').toggleClass('menu_active');
});
$('.navbar-menu_close').click(function(e){
    e.preventDefault();
    $('.navbar-menu').removeClass('menu_active');
});
const nav = $('.navbar-wrap');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
            $('.navbar-logo').remove('img');
			nav.addClass("navbar-wrap_active");
		} else {
			nav.removeClass("navbar-wrap_active");
		}
	});
$('.navbar-language').click(function(e){
	e.preventDefault();
	$('.navbar-language_menu').slideToggle();
	let slideArrow = $('.navbar-language');
	slideArrow.toggleClass('navbar-language_active');
});
$('.slider-menu').slick({
	infinite: true,
	slidesToShow: 4,
	variableWidth: true,
	slidesToScroll: 2,
	dots: true,
	arrows: true
  });

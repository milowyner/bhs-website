// Nav.js
// Shows nested navs smoothly when main nav links are clicked

// Disable show on hover from css
$('body').removeClass('no-javascript');

// Show nested nav on hover
$('.nav-link').hover(function() {
	$(this).children('ul').slideDown(300);
	$(this).children('a').css('color', '#f60');
}, function() {
	$(this).children('ul').slideUp(300);
	$(this).children('a').css('color', '#fff');
});

// Hide nested nav on click
$('.nav-link').click(function() {
	$(this).children('ul').slideUp(300);
	$(this).children('a').css('color', '#fff');
});
// Nav.js
// Shows nested navs smoothly when main nav links are clicked

// Disable show on hover
$('.nav-link').hover(function() {
	$(this).children('ul').slideDown(300);
}, function() {
	$(this).children('ul').slideUp(300);
});
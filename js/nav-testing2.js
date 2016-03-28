// Nav.js
// Shows nested navs smoothly when main nav links are clicked

// Disable show on hover from css
$('body').removeClass('no-javascript');

var openNav;

$('.nav-link').on({
	mouseenter: showNav, 
	mouseleave: hideNav
});

$('.nav-link > a').on('click', clickToggle);

function showNav() {
	$(this).children('ul').slideDown(300);
	$(this).children('a').css('color', '#f60');
	console.log('Show nav');
}

function hideNav() {
	$(this).children('ul').slideUp(300);
	$(this).children('a').css('color', '#fff');
	console.log('Hide nav');
}

function clickToggle() {
	$(this).next().slideToggle(300);
	console.log('Click toggle');
	return false;
}

// $('.nav-link').click(function() {
// 	$(this).children('ul').slideToggle(300);
// })
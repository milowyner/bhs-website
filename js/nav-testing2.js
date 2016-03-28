// Nav.js
// Shows nested navs smoothly when main nav links are clicked or hovered over

function showNav() {
	$(this).children('ul').slideDown(300);
	$(this).children('a').css('color', '#f60');
	console.log('Show nav');
}

function hideNav() {
	$(this).children('ul').slideUp(300);
	$(this).children('a').css('color', '#fff');
}

function clickToggle() {
	$(this).next().slideToggle(300);
	return false;
}

// Disable default show on hover from css
$('body').removeClass('no-javascript');

// Show nested nav on hover, hide nested nav on mouse leave
$('.nav-link').on({mouseenter: showNav, mouseleave: hideNav});

// Alternatively toggles nested nav on click (this is for mobile)
$('.nav-link > a').on('click', clickToggle);
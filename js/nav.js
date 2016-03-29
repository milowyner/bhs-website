// Nav.js
// Shows nested navs smoothly when main nav links are clicked or hovered over

var timeoutId = 0;
var thisNav;

function showNav() {
	thisNav.css('z-index', 100).slideDown(300);
}

function hideNav() {
	thisNav.css('z-index', 50).slideUp(200);
}

function clickToggle() {
	console.log('click');
	$(this).next().slideToggle(400);
	return false;
}

// Disable default show on hover from css
$('body').removeClass('no-javascript');

// Show nested nav on hover, and hide nested nav on mouse leave
$('.nav-link').on({
	mouseenter: function() {
		console.log('mouseenter');
		thisNav = $(this).children('ul');
	    timeoutId = setTimeout(showNav, 200);
	}, 
	mouseleave: function() {
		console.log('mouseleave');
		clearTimeout(timeoutId);
		hideNav();
	}
});

// Alternatively toggles nested nav on click (this is for mobile)
$('.nav-link > a').on('click', clickToggle);


// $('#myElement').mousedown(function() {
//     timeoutId = setTimeout(myFunction, 1000);
// }).bind('mouseup mouseleave', function() {
//     clearTimeout(timeoutId);
// });
// Nav.js
// Shows nested navs smoothly when main nav links are clicked or hovered over

var activeColor;
var inactiveColor = $('.nav-link a').css('color'); //Assigns inactive color to nav a color

function showNav() {
	$(this).children('ul').slideDown(300);
	//Assign active color to the nav a hover color
	if( !activeColor ) {
        activeColor = $(this).children('a').css('color');
    }
    $(this).children('a').css('color', activeColor); //Set color to active color
}

function hideNav() {
	$(this).children('ul').slideUp(300);
	$(this).children('a').css('color', inactiveColor); //Set color to inactive color
}

function clickToggle() {
	$(this).next().slideToggle(300);
	//Toggle color between the active and inactive colors
	if ($(this).css('color') == activeColor) {
		$(this).css('color', inactiveColor);
	} else {
		$(this).css('color', activeColor);
	}
	return false;
}

// Disable default show on hover from css
$('body').removeClass('no-javascript');

// Show nested nav on hover, and hide nested nav on mouse leave
$('.nav-link').on({
	mouseenter: showNav, 
	mouseleave: hideNav
});

// Alternatively toggles nested nav on click (this is for mobile)
$('.nav-link > a').on('click', clickToggle);
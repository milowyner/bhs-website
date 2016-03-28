// Nav.js
// Shows nested navs smoothly when main nav links are clicked or hovered over

var activeColor;
var inactiveColor = $('.nav-link a').css('color'); //Assigns inactive color to nav a color
var timeoutId = 0;
var thisElement;

function showNav() {
	thisElement.children('ul').css('z-index', 100).slideDown(300);
}

function changeColor() {
	//Assign active color to the nav a hover color
	if( !activeColor ) {
        activeColor = thisElement.children('a').css('color');
    }
    thisElement.children('a').css('color', activeColor); //Set color to active color
}

function hideNav() {
	thisElement.children('ul').slideUp(200).css('z-index', 50);
	thisElement.children('a').css('color', inactiveColor); //Set color to inactive color
}

function clickToggle() {
	$(this).next().slideToggle(400);
	//Toggle color between the active and inactive colors
	if ($(this).css('color') == activeColor) {
		$(this).css('color', inactiveColor);
	} else {
		$(this).css('color', activeColor);
	}
	console.log('click');
	return false;
}

// Disable default show on hover from css
$('body').removeClass('no-javascript');

// Show nested nav on hover, and hide nested nav on mouse leave
$('.nav-link').on({
	mouseenter: function() {
		thisElement = $(this);
		changeColor();
	    timeoutId = setTimeout(showNav, 200);
	    console.log('mouseenter');
	}, 
	mouseleave: function() {
		clearTimeout(timeoutId);
		hideNav();
		console.log('mouseleave');
	}
});

// Alternatively toggles nested nav on click (this is for mobile)
$('.nav-link > a').on('click', clickToggle);


// $('#myElement').mousedown(function() {
//     timeoutId = setTimeout(myFunction, 1000);
// }).bind('mouseup mouseleave', function() {
//     clearTimeout(timeoutId);
// });
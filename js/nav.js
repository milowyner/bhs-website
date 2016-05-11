// Nav.js
// Shows nested navs smoothly when main nav links are clicked or hovered over

var timeoutId = 0;
var thisNav;
var isDone;
var isTabOpen = false;

function showNav() {
	isDone = false;
	thisNav.css('z-index', 100).slideDown(300, function() {isDone = true;});
	isTabOpen = true;
}

function hideNav() {
	isDone = false;
	thisNav.css('z-index', 50).slideUp(200, function() {isDone = true;});
}

function clickToggle() {
	if(isDone == true) {
		$(this).next().slideToggle(300);
		return false;
	}
}

// Disable default show on hover from css
$('body').removeClass('no-javascript');

// Show nested nav on hover, and hide nested nav on mouse leave
$('.nav-link').on({
	mouseenter: function() {
		thisNav = $(this).children('ul');
		if (isTabOpen == true) {
			timeoutId = setTimeout(showNav, 200);
		} else {
			timeoutId = setTimeout(showNav, 0);
		}
	}, 
	mouseleave: function() {
		clearTimeout(timeoutId);
		hideNav();
	}
});

// Alternatively toggles nested nav on click (this is for mobile)
$('.nav-link > a').on('click', clickToggle);

//Prevent nav link from opening
$('.nav-link > a').click (function (e) {
        e.preventDefault(); 
        return false;  
    } 
);

// $('#myElement').mousedown(function() {
//     timeoutId = setTimeout(myFunction, 1000);
// }).bind('mouseup mouseleave', function() {
//     clearTimeout(timeoutId);
// });
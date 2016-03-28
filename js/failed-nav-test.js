// Nav.js
// Shows nested navs smoothly when main nav links are clicked

// Disable show on hover from css
$('body').removeClass('no-javascript');

var openNav;

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize() {
    if ($(".main-nav > ul").css("display") == "flex") {
        // Show nested nav on hover
		$('.nav-link').on({
			mouseenter: showNav, 
			mouseleave: hideNav
		});
		console.log('Show/hide on');
		// Click function
		$('.nav-link > a').off({click: clickToggle});
		console.log('Click toggle off');
    } else if ($(".main-nav > ul").css("display") == "block") {
    	$('.nav-link').off({
			mouseenter: showNav, 
			mouseleave: hideNav
		});
		console.log('Show/hide off');
		$('.nav-link > a').on({click: clickToggle});
		$('.nav-link').on({mouseleave: hideNav});
		console.log('Click toggle on')
    }
}

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
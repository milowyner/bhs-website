// Nav.js
// Shows nested navs smoothly when main nav links are clicked

// Disable show on hover from css
$('body').removeClass('no-javascript');

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".main-nav > ul").css("display") == "block" ){
        $('.nav-link').click(function() {
        	$(this).children('ul').slideToggle(300);
        })
    }
}

// Show nested nav on hover
$('.nav-link').hover(function() {
	$(this).children('ul').slideDown(300);
	$(this).children('a').css('color', '#f60');
}, function() {
	$(this).children('ul').slideUp(300);
	$(this).children('a').css('color', '#fff');
});
// ALTERNATE Nav.js
// Shows nested navs smoothly when main nav links are clicked
// ALSO: Allows user to click once on a nav link to open nested nav, then click again on the same 
// 		 nav link to open external link

function preventLink (e) {
	e.preventDefault();
}

// Prevent nav link from going to linked page
$('.nav-link > a').bind('click', preventLink);

// When user clicks nav link
$('.nav-link > a').click(function () {
	// Reset other nav links and nested navs
	$('.nav-link > ul').slideUp(300); // Hide open nested navs, with animation
	$('.nav-link > a').removeClass("arrow-after"); // Remove arrows
	$('.nav-link > a').bind('click', preventLink); // Prevent links from activating
	// Open/animate clicked nav link
	$(this).next().slideDown(300); // Show nested nav, with animation
	$(this).addClass("arrow-after"); // Add arrow to side of nav link
	$(this).unbind('click', preventLink); // Make nav link clickable
});
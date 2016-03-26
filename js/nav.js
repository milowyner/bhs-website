// Nav.js
// Shows nested navs smoothly when main nav links are clicked

var openNav;
// When user clicks nav link
$('.nav-link > a').click(function () {
	// Hide all open nested navs (which should just be the last opened nav)
	$('.nav-link > ul').slideUp(300);
	// Change all nav link colors to white (should also just be last)
	$('.nav-link > a').css('color', '#fff');
	// If nested nav is open when clicked
	if (openNav == this.innerText) {
		$(this).next().slideUp(300); // Hide nested nav
		$(this).css('color', '#fff'); // Change nav link color to white
		openNav = null;
	// If the nested nav is closed when clicked
	} else {
		$(this).next().slideDown(300); // Show nested nav
		$(this).css('color', '#f60'); // Change nav link color to orange
		openNav = this.innerText;
	}
	return false;
});
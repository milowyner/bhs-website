// Nav.js
// Shows nested navs smoothly when main nav links are clicked

var openNav;
// When user clicks nav link
$('.nav-link > a').click(function () {
	// Hide all open nested navs (which should just be the last opened nav)
	$('.nav-link > ul').slideUp(300);
	// If nested nav is open when clicked
	if (openNav == this.innerText) {
		$(this).next().slideUp(300); // Hide nested nav
		openNav = null;
	// If the nested nav is closed when clicked
	} else {
		$(this).next().slideDown(300); // Show nested nav
		openNav = this.innerText;
	}
	return false;
});
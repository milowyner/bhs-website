//Promlem: Nav links don't have animation when clicked
//Solution: Show nested nav smoothly when clicked

var preventLink = function (e) {
	e.preventDefault();
};

// Prevent nav link from going to linked page
$('.nav-link > a').bind('click', preventLink);

// When user clicks nav link
$('.nav-link > a').click(function () {

	// Hide any open nested navs, with animation
	$('.nav-link > a').next().slideUp(200);

	// Prevent any links from activating
	$('.nav-link > a').bind('click', preventLink);

	// Show nested nav, with animation
	$(this).next().slideDown(200);

	// Make link clickable again
	$(this).unbind('click', preventLink);
});
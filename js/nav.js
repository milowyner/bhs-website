//Promlem: Nav links don't have animation when clicked
//Solution: Show nested nav smoothly when clicked

// Prevent nav link from going to linked page
$('.nav-link > a').bind('click', function(e){
        e.preventDefault();
});
// When user clicks nav link
$('.nav-link > a').click(function () {
	// Show nested nav, with animation
	$(this).next().slideDown(200);
	// Make link clickable again
	$(this).unbind('click');
});

// When user clicks on another nav link
	// Hide other nested navs
	// Show nested nav of nav link clicked
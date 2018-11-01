$(document).ready(function(){

	var slickIsActive = false;

	checkSlider();

	$(window).on('resize', function(){
		checkSlider();
	});

	function checkSlider(){
		
	if( $(window).width() < 1200 ) {
		if( slickIsActive === false ) {
			$('#slider').slick({
				autoplay: true,
			});
			slickIsActive = true;
		}
	}
	else {
		if( slickIsActive === true ) {
			$('#slider').slick('unslick');
			slickIsActive = false;
		}
		
	}

	}
});
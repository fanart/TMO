/*****************************************
  Why T-Mobile Carousel
 *****************************************/

$(document).ready(function() {
	var mousePos;
	
	if ($('.whytmo').length) {
		
		//mouse click on control button
		$('.carousel-control').click(function(){
			if ($(this).hasClass('left')) {
				$('.item:not(.active) .animated').removeClass('slideInLeft slideInRight').addClass('slideInLeft');
			} else {
				$('.item:not(.active) .animated').removeClass('slideInLeft slideInRight').addClass('slideInRight');
			}
		});
		
		//swipe event on mobile
		$('.whytmo').on('swipeleft', function(){
			$('.item:not(.active) .animated').removeClass('slideInLeft slideInRight').addClass('slideInRight');
		});
		$('.whytmo').on('swiperight', function(){
			$('.item:not(.active) .animated').removeClass('slideInLeft slideInRight').addClass('slideInLeft');
		});	
	}	
});

$(document).ready(function() {
	
	
	
	/******************************************************
	 global header navigation
	******************************************************/

	//check if the header is basic instead of advanced
	if ($('header:not(".header")').length) {
		
		$('.nav-humb').click(function(){
			headerNavigation();
		});
	}
	function headerNavigation(){

		//tablet version
		if ($(window).width() >= 600 && $(window).width() < 930) {
			//when menu is open
			if ($('.nav-humb').hasClass('active')) {
				$('.nav-left').slideUp(function(){
					$('.nav-humb').removeClass('active');
				});
			} else {
				//when menu is closed
				$('.nav-left').slideDown(function(){
					$('.nav-humb').addClass('active');
				});
			}
		}
		//phone version
		if ($(window).width() < 600) {
			//when menu is open
			if ($('.nav-humb').hasClass('active')) {
				$('.nav-left, .right-group').slideUp(function(){
					$('.nav-humb').removeClass('active');
				});
			} else {
				$('.nav-left, .right-group').slideDown(function(){
					$('.nav-humb').addClass('active');
				});
			}
		}
	}

	
	/******************************************************
	 global advanced header navigation
	******************************************************/
	var activeNav;
	 
	//hover on nav function
	function hoverOnNav() {
		
		if ($(window).width() >= 600 && cssua.ua.desktop && !cssua.ua.trident) {
			//hover nav event
			$('.nav-icon, .left-menu').hover(function(){
				activeNav = $(this);
				openSubNav($(this));
			}, function(){
				closeSubNav();
			});
			
			//hover on sub nav
			$('.sub-nav-list').hover(function(){
				activeNav.addClass('active');
				$(this).stop().show();
			}, function(){
				closeSubNav();
			});
		} else {
			//small window size
			$('.nav-icon, .left-menu, .sub-nav-list').unbind('mouseenter mouseleave');
		}
	}
	
	//click on nav function
	function clickOnNav() {
		//click nav event
		$('.nav-icon, .left-menu').click(function(){
			//when menu is open
			if ($(this).hasClass('active')) {
				closeSubNav();
			} else {
			//when menu is closed
				openSubNav($(this));
			}
		});
	}
	
	//open sub nav
	function openSubNav(targetedEle) {
		var subNav = targetedEle.data('sub-target');
		if ($(window).width() < 600 && subNav === ".mytmob-list") {
			subNav = ".mytmob-list, .shop-list, .plans-list";
		}
		
		$('.nav-icon, .left-menu').removeClass('active');
		targetedEle.addClass('active');
		$('.sub-nav-list').hide();
		$(subNav).stop().css('height', 'auto').slideDown();
	}
	
	//close sub nav
	function closeSubNav() {
		$('.nav-icon, .left-menu').removeClass('active');
		$('.sub-nav-list').css('height', 'auto').stop().slideUp();
	}
	
	if ($('header.header').length) {
	//this is an advanced header 
		clickOnNav();
		hoverOnNav();
		$(window).resize(function(){
			closeSubNav();
			hoverOnNav();
		});
	}
	
	//close nav on mobile
	$('main, div, footer, p, section, span, a, ul, ol, li').not(".sub-nav-list").on('mousedown touchstart', function(){
		closeSubNav();
	});
			
	
	/*******************************************************
	 loading header to each page
	 *******************************************************/
	$('header:not("#template")').empty().load("../header-footer/header.html #header", function(){
		$('.nav-humb').click(function(){
			headerNavigation();
		});
	});
	$('#header_body').empty().load("../header-footer/header-adv.html #header-adv", function(){
		clickOnNav();
		hoverOnNav();
	});
	
});
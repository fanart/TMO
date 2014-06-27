// B2B JavaScript Libraries


//@codekit-prepend "../../../../../tmus/thirdpartylibs/js/cssua.js";
//@codekit-prepend "../../../../../tmus/bower_components/bootstrap/dist/js/bootstrap.js";
//@codekit-prepend "../../../../../tmus/bower_components/bootstrap-select/bootstrap-select.js";
//@codekit-prepend "../../../../../tmus/bower_components/html5-forms/shared/js/html5Forms.js";
//@codekit-prepend "../../../../../tmus/thirdpartylibs/js/jquery.mobile.custom.js";
//@codekit-append "navigation.js";


$(document).ready(function(){
	
	/*****************************************
	 add "js" class to html
	 *****************************************/
	$('html').removeClass('no-js').addClass('js');
	
	
	
	/*****************************************
	 fallback ie8 for selectpicker
	 *****************************************/
	if ($('.ua-ie-8').length) {
		$('.selectpicker').removeClass('selectpicker');
		$('link[rel=stylesheet][href~="bootstrap-select"]').remove();
	}
	
	
	
	/*****************************************
	 fallback support for ie8 striped table	
	 *****************************************/
	$('.ua-ie-8 .table-striped').find('tr:odd td, tr:odd th').css('background-color','#f2f2f2');
	
	
	
	/*****************************************
	 fix viewport issues on MSIE
	******************************************/
	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style");
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
			)
		);
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	}
	



	/********************************************
	 vertical positioning
	 ********************************************/
	function verticalAlignMiddle() {
		if ($('.v-align-middle').length) {
			
			$('.v-align-middle').each(function() {
				var parentEle = $(this).parent();
				if (parentEle.is('a')) {
					parentEle = $(this).parent().parent();
				}
				var middleHeight = parentEle.outerHeight()/2;
				var middleThis = $(this).outerHeight()/2;
								
				//set this element in the middle of its parent/container vertically
				parentEle.css('position','relative');
				$(this).css({'position':'absolute', 'top':middleHeight-middleThis, 'margin-top':0, 'padding-top':0});
			});
		}
	}
	verticalAlignMiddle();
	$(window).resize(function(){
		verticalAlignMiddle();
	});
	
	
	
	/*********************************************
	 swaping images src
	 *********************************************/
	function searchImg() {
		if ($('img[class*="img-"]').length) {
			$('img[class*="img-"]').each(function(){
	
				//320
				if ($(this).attr('class').indexOf('-320') !== -1) {
					swapImg($(this), 320, 600);
				}
	
				//480
				if ($(this).attr('class').indexOf('-480') !== -1) {
					swapImg($(this), 480, 600);
				}
				
				//600
				if ($(this).attr('class').indexOf('-600') !== -1) {
					swapImg($(this), 600, 768);
				}
	
				//768
				if ($(this).attr('class').indexOf('-768') !== -1) {
					swapImg($(this), 768, 930);
				}
	
				//930
				if ($(this).attr('class').indexOf('-930') !== -1) {
					swapImg($(this), 930, 1200);
				}
	
				//1200
				if ($(this).attr('class').indexOf('-1200') !== -1) {
					swapImg($(this), 1200, 3000);
				}
	
			});
		}
	}
	function swapImg(thisImg, bp, _bp) {
		if (($(window).width() >= bp) && $(window).width() < _bp) {
			var newPath = thisImg.attr('src').replace(/(\.320|\.480|\.600|\.768|\.930|\.1200)?\.(png|jpg|gif)/, '.'+bp+'.$2');		
			thisImg.attr('src', newPath);
		} else {
			var re = new RegExp('.'+bp);
			var path = thisImg.attr('src').replace(re, '');
			thisImg.attr('src', path);
		}
	}
	searchImg();
	$(window).resize(function(){
		searchImg();
	});
	
	
	
	/***************************************************
	 swaping background image
	 ***************************************************/
	function searchBackgroundImage() {
		if ($('[class*="bg-"]').length) {
			$('[class*="bg-"]').each(function(){
	
				//320
				if ($(this).attr('class').indexOf('-320') !== -1) {
					swapBackground($(this), 320, 600);
				}
	
				//480
				if ($(this).attr('class').indexOf('-480') !== -1) {
					swapBackground($(this), 480, 600);
				}
				
				//600
				if ($(this).attr('class').indexOf('-600') !== -1) {
					swapBackground($(this), 600, 768);
					//console.log($(this).data('background-src'));
				}
	
				//768
				if ($(this).attr('class').indexOf('-768') !== -1) {
					swapBackground($(this), 768, 930);
				}
	
				//930
				if ($(this).attr('class').indexOf('-930') !== -1) {
					swapBackground($(this), 930, 1200);
				}
	
				//1200
				if ($(this).attr('class').indexOf('-1200') !== -1) {
					swapBackground($(this), 1200, 3000);
				}
	
			});
		}
	}
	function swapBackground(thisElement, bp, _bp) {
		var originalPath = thisElement.data('background-src');
		var newPath;
		if (($(window).width() >= bp) && $(window).width() < _bp) {
			newPath = originalPath.replace(/(\.320|\.480|\.600|\.768|\.930|\.1200|\.dsk|\.mob)?\.(png|jpg|gif)/, '.'+bp+'.$2');		
			thisElement.css({'background-image':'url('+newPath+')', 'background-repeat':'no-repeat'});
		} else {
			
			//var re = new RegExp('.'+bp);
			//var path = thisElement.css('background-image');
			if ($(window).width() >= 600) {
				//desktop version
				
				//data-background-target="desktop"
				if (thisElement.data('background-target') === 'desktop') {
					thisElement.css({'background-image':'url('+originalPath+')', 'background-repeat':'no-repeat'});				
				}
				//data-background-target="mobile"
				if (thisElement.data('background-target') === 'mobile') {
					thisElement.css({'background-image':'url('+originalPath+')', 'background-repeat':'no-repeat'});				
				}
			} else {
				//mobile version: screen size is less than 600px
				
				thisElement.css({'background-image':'url("")'});				
			}
		}
	}
	searchBackgroundImage();	
	$(window).resize(function(){
		searchBackgroundImage();
	});
	
	
	
	/***************************************************
	 accordion component
	 ***************************************************/
	//var listing;
	
	function accordionClickEvent(listing) {
		
		listing.click(function(){
			if ($(this).parents('li').hasClass('active')) {
				//if the listing is active
				$(this).siblings('.detail').slideUp(function(){
					$(this).parents('li').removeClass('active');
				});
			} else {
				//if the listing is not active
				
				//close all listing
				listing.each(function(){
					$(this).siblings('.detail').slideUp(function(){
						$(this).parents('li').removeClass('active');
					});
				});
				
				//open this listing
				$(this).siblings('.detail').slideDown(function(){
					$(this).parents('li').addClass('active');
				});
			}
		});
	}
	accordionClickEvent($('.accordion > li > a'));
	
	
	
	/***************************************************
	 footer accordion
	 ***************************************************/
	function footerAccordion(listing) {
		//listing = $('footer .accordion > .title > .container > a');
		listing.unbind('click');
		accordionClickEvent(listing);
		
		//disable click event on desktop version
		if ($(window).width() >= 930) {
			listing.unbind('click');
		}
	}
	footerAccordion($('footer .accordion > .title > .container > a'));
	$(window).resize(function(){
		footerAccordion($('footer .accordion > .title > .container > a'));
	});	




	/*******************************************************
	 loading footer to each page
	 *******************************************************/
	$('footer:not("#template")').empty().load("../header-footer/footer.html #footer", function(){
		footerAccordion($('footer .accordion > .title > .container > a'));
	});


	
	/*******************************************************
	 enable Bootstrap-select
	 *******************************************************/
	$('.selectpicker').selectpicker();
	 
	 
	 

	/********************************************************
	 whytmo Bootstrap carousel with animation
	 *******************************************************/
	 
	//loading html page into template via ajax
	if ($('.whytmo').length) {

		$('.slide-holder').each(function() {
			$(this).empty().load($(this).data('html-target') + ' #html-slide', function(){
				searchBackgroundImage();
			});
		});
	}



	/*******************************************************
	 swap event on mobile device for Bootstrap carousel
	 *******************************************************/
	if ($('.carousel').length) {
		$('.carousel').on('swipeleft', function(){
			//alert('moving left');
			$(this).carousel('next');
		});
		$('.carousel').on('swiperight', function(){
			$(this).carousel('prev');
		});
	}
});



/********************************************************
 Avoid `console` errors in browsers that lack a console.
 ********************************************************/
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


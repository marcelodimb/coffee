/*! Main Script */

$(document).ready(function() {

	// Coloca o sombreado no header apos a utilizacao do scroll
	$(window).on("scroll", function() {
		$(".header").toggleClass("header-is-scrolled", $(this).scrollTop() > 0);
	});

	// Menu lateral
	var $lateral_menu_trigger = $('.menu-trigger'),
		$content_wrapper = $('.section'),
		$navigation = $('.header');

	// Evento de abrir-fechar o menu lateral ao clicar no icone do header
	$lateral_menu_trigger.on('click', function(event){
		event.preventDefault();
		
		$lateral_menu_trigger.toggleClass('is-clicked');
		$navigation.toggleClass('lateral-menu-is-open');
		$content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// Firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
			// $('body').toggleClass('overflow-hidden');
		});
		$('.lateral-nav').toggleClass('lateral-menu-is-open');
		
		//check if transitions are not supported - i.e. in IE9
		if($('html').hasClass('no-csstransitions')) {
			// $('body').toggleClass('overflow-hidden');
		}
	});

	// Fecha o menu lateral clicando fora dele
	$content_wrapper.on('click', function(event){
		if( !$(event.target).is('.menu-trigger, .menu-trigger span') ) {
			$lateral_menu_trigger.removeClass('is-clicked');
			$navigation.removeClass('lateral-menu-is-open');
			$content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				// $('body').removeClass('overflow-hidden');
			});
			$('.lateral-nav').removeClass('lateral-menu-is-open');
			
			// check if transitions are not supported
			if($('html').hasClass('no-csstransitions')) {
				// $('body').removeClass('overflow-hidden');
			}
		}
	});
});
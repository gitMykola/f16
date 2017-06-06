$(function(){
	var winh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var winw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenProp = winw/winh;
	
	var deltaStartText = 0;
	
	response();
	$(window).on('resize',function(){
		response();
		deltaStartText = 0;
	});
	$(window).on('orientationchange',function(){
		response();
		deltaStartText = 0;
	});
	
	//$(document.body).prepend('<span class="test" style="position:fixed;color:#fff;background:#000;z-index:10;font-size:30px;">111</span>');
	
	$(window).on('scroll',function(){
		var bodyScroll = $('body').scrollTop();
		if (deltaStartText == 0) deltaStartText = $('#startSlide .nameText').position().top - $('#startSlide .startText').position().top - $('#startSlide .startText').outerHeight();
		//$('.test').text(deltaStartText);
		//Hide start text
		if (bodyScroll > ((deltaStartText < 0)?0:deltaStartText)){
			$('#startSlide .startText').fadeOut();
			$('#startSlide > H1').fadeOut();
		}else{
			if($('#startSlide .startText').css('display') == 'none')$('#startSlide .startText').fadeIn();
			if($('#startSlide > H1').css('display') == 'none')$('#startSlide > H1').fadeIn();
		};
		//Animate short nav-menu
		if(winw > 124 && (($('#infoSlide').position().top - bodyScroll) < 100)){
			$('#myNavbar .navbar-right .nav-menu').removeClass('animation-navbarToBottom').addClass('animation-navbarToTop');
		}else{
			$('#myNavbar .navbar-right .nav-menu').removeClass('animation-navbarToTop').addClass('animation-navbarToBottom');
      }
      //Animate background infoSlide
      //$('.test').text($('#infoSlide').position().top - bodyScroll);
    if((($('#infoSlide').position().top - bodyScroll) > (1 - $('#infoSlide').outerHeight())) && (($('#infoSlide').position().top - bodyScroll) < $('#startSlide').outerHeight())){  
     $('#infoSlide').addClass('background-move'); 
    }else{
      $('#infoSlide').removeClass('background-move');
    }
	});
	
	smartScroll();
	
})
function response(){
	var winh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var winw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenProp = winw/winh;
	$('#startSlide,#infoSlide,#infoSlide > .back-dark').css('min-height',winh);
}
function smartScroll(){
		// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 300, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	  });
}	
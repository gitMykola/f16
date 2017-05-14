$(function(){
	var winh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var winw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenProp = winw/winh;
	$('#startSlide').css('min-height',winh);
	$(window).on('resize',function(){
		response();
	});
	$(window).on('orientationchange',function(){
		response();
	});
	
})
function response(){
	var winh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var winw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenProp = winw/winh;
	$('#startSlide').css('min-height',winh);
}	
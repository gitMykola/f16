$(function(){
    var winh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var winw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenProp = winw/winh;
    var anim = '';
    if (winw <= 1480) anim = '1';
    if (winw <= 980) anim = '2';
    cubeInit();
	$('.cube').css('left',document.getElementsByClassName('cube-top')[0].offsetWidth/2 - 150);
    $('.cube-container .cube-top').append('<div class="cube-switch"><span class="glyphicon glyphicon-th"></span></div>');
    document.getElementsByClassName('cube-container')[0].getElementsByClassName('cube-top')[0].getElementsByClassName('cube-switch')[0].onclick = function(){
        var cubeTop = document.getElementsByClassName('cube-container')[0].getElementsByClassName('cube-top')[0];
        if(cubeTop.children[0].className.search('animC') > 0) {
            cubeTop.children[0].children[1].className += ' anim5' + anim;
            cubeTop.children[0].children[0].className += ' anim6' + anim;
            cubeTop.children[0].children[3].className += ' anim3' + anim;
            cubeTop.children[0].children[2].className += ' anim4' + anim;
            cubeTop.children[0].children[5].className += ' anim1' + anim;
            cubeTop.children[0].children[4].className += ' anim2' + anim;
            cubeTop.children[0].className = cubeTop.children[0].className.replace('animC', 'anim');
            switch (anim) {
                case '1':
                    $(cubeTop).css('height', '1020');
                    break;
                case '2':
                    $(cubeTop).css('height', '1940');
                    break;
                default:
                    $(cubeTop).css('height', '680');
            }
        this.children[0].className = 'glyphicon glyphicon-off';
        }else{
            cubeTop.children[0].className = cubeTop.children[0].className.replace('anim','animC');
            for (i = 0;i < 6; i++)cubeTop.children[0].children[i].className = '';
            $(cubeTop).css('height', '680');
            this.children[0].className = 'glyphicon glyphicon-th';
        }
        //  alert($(document.getElementsByClassName('cube-container')[0]).position().top);
        $('html, body').animate({
            scrollTop: $(document.getElementsByClassName('cube-container')[0]).position().top
        }, 1500);
	}
	document.getElementsByClassName('cube-container')[0].getElementsByClassName('cube-more')[0].onclick = function(){
        $(this.parentNode.getElementsByClassName('bottom-cube')).slideToggle();
        this.parentNode.children[1].style.display = 'flex';
        if(this.className.search('slide-down') > 0){
            this.className = this.className.replace('slide-down','slide-up');
            this.firstChild.innerHTML = 'hide';
        }else{
            this.className = this.className.replace('slide-up','slide-down');
            this.firstChild.innerHTML = 'more';
            $('html, body').animate({
                scrollTop: $(document.getElementsByClassName('cube-container')[0]).position().top + $(document.getElementsByClassName('cube-top')[0]).outerHeight() - winh
            }, 1500);
        }
	}
	$(window).on('resize orientationchange', function(){
        $('.cube').css('left',document.getElementsByClassName('cube-top')[0].offsetWidth/2 - 150);
        var winh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var winw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var screenProp = winw/winh;
        var anim = '';
        if (winw <= 1480) anim = '1';
        if (winw <= 990) anim = '2';
        var elem = document.getElementsByClassName('cube-container')[0].getElementsByClassName('cube-top')[0];//[0];
        //var rclassName = elem.className;
        var ri = 0;
        if(elem.children[0].children[0].className.search('anim') >= 0) {
            switch (anim) {
                case '1':
                    for (ri; ri < 6; ri++)elem.children[0].children[ri].className = 'anim' + [6 - ri] + anim;
                    $(elem).css('height', '1020');
                    break;
                case '2':
                    for (ri; ri < 6; ri++)elem.children[0].children[ri].className = 'anim' + [6 - ri] + anim;
                    $(elem).css('height', '1940');
                    break;
                default:
                    for (ri; ri < 6; ri++)elem.children[0].children[ri].className = 'anim' + [6 - ri] + anim;
                    $(elem).css('height', '680');
            }
            elem.className = elem.className.replace('animC', 'anim');
        }
	});
})
function cubeInit(){
    var cube = document.getElementsByClassName('cube-container')[0];
    var cubeElems = cube.children;//getElementsByTagName('A');
    var elem = document.createElement('DIV');
    elem.className = 'cube-top';
    cube.appendChild(elem);
    elem = document.createElement('DIV');
    elem.className = 'cube animC';
    cube.getElementsByClassName('cube-top')[0].appendChild(elem);
    //for(var i = 0;i < 6; i++){
    cube.getElementsByClassName('cube')[0].appendChild(cubeElems[0]);
    cube.getElementsByClassName('cube')[0].appendChild(cubeElems[0]);
    cube.getElementsByClassName('cube')[0].appendChild(cubeElems[0]);
    cube.getElementsByClassName('cube')[0].appendChild(cubeElems[0]);
    cube.getElementsByClassName('cube')[0].appendChild(cubeElems[0]);
    cube.getElementsByClassName('cube')[0].appendChild(cubeElems[0]);
    //}
    //alert(cubeElems.length);
    //if(cubeElems.length > 6) {
        elem = document.createElement('DIV');
        elem.className = 'bottom-cube';
        cube.appendChild(elem);
        for(i = 0;i <= cubeElems.length;i++) {
            cube.getElementsByClassName('bottom-cube')[0].appendChild(cubeElems[0]);
        }
    $('.cube-container').append('<div class="cube-more slide-down"><p>more</p></div>');
    $(cube.getElementsByClassName('cube')[0].children).css('opacity','1');
    //}

}
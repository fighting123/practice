/*配置文件名，将长串的文件名用简单字母代替*/
requirejs.config({
	paths:{
		jquery:'jquery-1.11.3.min'
	}
});
/*引入文件,$表示jquery模块，要对应起来*/
requirejs(['jquery','validate'],function($,validate){
	$("#backTop").on('click',go);
	$(window).on('scroll',function(){
		checkPos($(window).height());
	});
	checkPos($(window).height());/*滚动超过一个可视区域的高度*/

	function move(){        /*缓慢滚动*/
		$('html,body').animate({
			scrollTop:0,
		},800);
	}

	function go(){          /*直接滚动*/
		$('html,body').scrollTop(0);
	}

	function checkPos(pos){
        if($(window).scrollTop() > pos){
        	$("#backTop").fadeIn();
        }else{
        	$("#backTop").fadeOut();
        }
	}
});
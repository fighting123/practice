window.onload = function(){
	waterFall('main','pin');
//模拟后台json数据
	var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpg'},
	{'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'},{'src':'11.jpg'},{'src':'12.jpg'}]};
	window.onscroll = function(){
		if(checkscrollside()){
			var oMain = document.getElementById('main');
			for(var i=0,l=dataInt.data.length;i<l;i++){
				oMain.innerHTML += '<div class="pin"><div class="box"><img src=./images/'+dataInt.data[i].src+'></div></div>';
		    }//比一步步创建元素的效率高，但是直接等于会清空之前的内容
		waterFall('main','pin');
		}
	}
}

function checkscrollside(){
	var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
	var clientH = document.documentElement.clientHeight;
	var objs = getByClass('main','pin');
	var objH = Math.floor(objs[objs.length-1].offsetHeight/2)+objs[objs.length-1].offsetTop;
	return objH<scrollH+clientH;
}


function waterFall(parent,objs){
	var objs = getByClass(parent,objs);
	var oParent = document.getElementById(parent);
	var iW =objs[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/iW);
	var objArr = [];//用于存储 每列中的所有块框相加的高度。
	oParent.style.cssText = 'width:'+cols*iW+'px;margin:0px auto;';//设置mian的宽好让其动态的水平居中
	for(var i=0,l=objs.length;i<l;i++){
		var iH = objs[i].offsetHeight;
		if(i<cols){
			objArr.push(iH);
		}else{
			var objMin = Math.min.apply(null,objArr);//数组pinHArr中的最小值minH,不能用call
			var _Index = getIndex(objArr,objMin);//var _Index = objArr.indexOf(objMin),但是IE9以下不支持
			objs[i].style.position = 'absolute';
			objs[i].style.top = objMin + 'px';
			objs[i].style.left = _Index*iW + 'px';
			objArr[_Index] += objs[i].offsetHeight;//数组 最小高元素的高 + 添加上的aPin[i]块框高,更新添加了块框后的列高
		}
	}

}


function getIndex(arr,minH){
    for(var i in arr){
        if(arr[i]==minH){
            return i;
        }
    }
}


function getByClass(parent,className){
	var oParent = parent?document.getElementById(parent):document;
	var elements = oParent.getElementsByTagName('*');
	var objs = [];

	for(var i=0,len=elements.length;i<len;i++){
		if(elements[i].className == className){
			objs.push(elements[i]);
		}
	};
	return objs;
}
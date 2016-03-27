$(window).on('load',function(){
    //模拟后台json数据
    var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpg'},
    {'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'},{'src':'11.jpg'},{'src':'12.jpg'}]};
    waterFall();
    window.onscroll = function(){
        if(checkscrollside()){
            $.each(dataInt.data,function(index,value){
                $('#main').html($('#main').html()+'<div class="pin"><div class="box"><img src=./images/'+$(value).attr('src')+'></div></div>');
            })
        }
        waterFall();
    }
})

function checkscrollside(){
    var $aPin = $('#main>div').last();
    var objH = Math.floor($aPin.height()/2) + $aPin.offset().top;
    var documentH = $(window).scrollTop() + $(window).outerHeight();
    return objH<documentH;
}

function waterFall(){
    var $pins = $('#main>div');
    var pinW = $pins.eq(0).outerWidth();//outerWidth是包括padding的高度
    var windowW = $(window).width();
    var cols = Math.floor(windowW/pinW);
    var pinArr = [];
    $('#main').css({
        'width':cols*pinW,
        'margin':'0px auto'
    });
    $pins.each(function(index,val){   //val取出的是Dom元素，要用jquery的方法时需要$(val)转换
        //console.log(val);
        var pinH = $pins.eq(index).outerHeight();
        if(index<cols){
            pinArr.push(pinH);
        }else{
            var minPin = Math.min.apply(null,pinArr);
            var minIndex = $.inArray(minPin,pinArr);
            //console.log(cols);
            $(val).css({
                'position':'absolute',
                'left':minIndex*pinW,
                'top':minPin
            })
            pinArr[minIndex]+=$pins.eq(index).height()+15;
        }
    })
}
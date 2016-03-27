/*将一个功能定义为模块化，然后return回去，让外面可以访问到，比如定义验证表单里的一些验证输入一致，输入长度等的函数*/
/*define(['jquery'],function($){})代表定义jquery模块*/
define(['jquery'],function($){
    return{
    	isEmpty:function(){},
    	checkLength:function(){},
    	isEqual:function(str1,str2){
            return  str1===str2;
    	}
    }
})
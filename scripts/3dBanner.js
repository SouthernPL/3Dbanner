/*
* @Author: bibo
* @Date:   2017-10-24 20:24:26
* @Last Modified by:   bibo
* @Last Modified time: 2017-10-25 13:03:25
 */		
//         该插件依赖于jquery
//         使用者需要在页面中书写这样的标签
//         	<div class="">
// 			<div class=""></div>
// 			</div>
//         引入该插件后会得到一个3dBanner方法，可以全局调用
//         方法的参数data 是一个对象
//         下面是参数的说明
// 			{
//          container:  容器盒子的类名       字符串
//          banner：    展示banner盒子的类名 字符串
// 			initDeg:    最大旋转角度         数值
// 			url:        banner背景图路径     字符串
// 			con_height: 容器盒子的高度       数值 
 
// 		    }
		
		
		(function(win){

			function fnBanner(data){
                var con_height=data.con_height || 400;
                var ban_height=con_height*0.7;
                var con_padding=con_height*0.15;

                $(data.banner).css({
                height:ban_height+"px",
                width:"80%",
                margin:"0 auto",              
                transition:"transform 0.1s"
                
                  }).css("background","url("+data.url+") no-repeat center").css(
                  "background-size","contain").css("box-shadow","0 0 15px rgba(0,0,0,0.3)")

                $(data.container).css({height:con_height+"px",
                    padding:con_padding+"px 0",
                    width:"100%",
                    background:"white",
                    border:"1px solid gray",
                    perspective:"1000px"
                }).css("box-sizing","border-box")

			$(data.container).on("mousemove",function(e){
        		var offset=$(data.container).offset(); 
        		var x=e.pageX-offset.left;  
        		var y=e.pageY-offset.top;  

        		var centerX=$(data.container).outerWidth()/2;   
        		var centerY=$(data.container).outerHeight()/2;

        		var distanceX=x-centerX;
        		var distanceY=y-centerY;

        		var perX=distanceX/centerX;
        		var perY=distanceY/centerY;

        		var initDeg=data.initDeg || 10;


        		$(data.banner).css({
        			transform:'rotateX('+initDeg*-perY+'deg) rotateY('+initDeg*perX+'deg)'
        		})

    		})

    		$(data.container).on("mouseleave",function(){
    			$(data.banner).css({
    				transform:''
    			})
    		})

    		console.log("ok");
		    }

			win.B=fnBanner;
		})(window);
		
    	

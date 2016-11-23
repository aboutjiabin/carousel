			$(function(){
				//代码初始化
				var size=$('.img li').size();
				//console.log(size)
				for(var i=1; i<=size; i++){
					var li='<li>'+i+'</li>';//定义一个变量 ，变量名 为li
					$('.menu').append(li);//向class名为menu添加内容
				}
				
				//手动控制轮播图
				$('.img li').eq(0).show();//获取img 下面的 第一个 li让其显示
				//console.log($.show);
				$('.menu li').eq(0).addClass('active')//给 li添加一个类
				$('.menu li').mouseover(function(){//添加鼠标经过事件
					$(this).addClass('active').siblings().removeClass('active');
					//当前鼠标移入的下标添加active 的class属性.并且其它的li去掉active 的class属性
					var index=$(this).index();//获取当前对象（也就是第几个Li）并保存在index变量中
					i=index;//给i赋值等于index
					$('.img li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
				//找到图片对应的第i个添加jquery动画 （淡入） 动画时间为300毫秒，同时找到当前对象（对应的图片）的所有的兄弟节点添加jq动画（淡出）
				})
				//自动轮播
				var i=0;//当前播放的图片的序号（0-5）
				var t=setInterval(move,1500);//开始计时器并赋值
				
				//向左
				function moveL(){
					i--;//序号减一
					if(i==-1){//如果当前序号等于-1（没有图片与之对应）
						i=size-1;//序号变为长度-1（最后一张图
					}
					$('.menu li').eq(i).addClass('active').siblings().removeClass('active');
					//当前鼠标移入的下标添加active 的class属性.并且他的所有兄弟都去掉active 的class属性
					$('.img li').eq(i).fadeIn(300).siblings().fadeOut(300);
		//找到图片中的对应的第i个添加jq动画（淡入），总时间为300毫秒，同时找到当前对象（对应的图片）的所有的兄弟节点添加jq动画（淡出）
				}
				//向右
				function move(){
					i++;//序号+1
					if(i==size){//当i=于size 的长度也就是等于6
						i=0;//i等于0；
					}
					$('.menu li').eq(i).addClass('active').siblings().removeClass('active');	
					$('.img li').eq(i).fadeIn(300).siblings().fadeOut(300);
				}
				//左边点击
				$('.wrap .left').click(function(){
					moveL();//触发函数
				})
				
				//右边点击
				$('.wrap .rigth').click(function(){
					move();//触发函数
				})
				
				$('.wrap').hover(function(){//鼠标移入wrap
					clearInterval(t)//停止定时器
				},function(){
					t=setInterval(move,1500);//离开继续
				})
				
			})
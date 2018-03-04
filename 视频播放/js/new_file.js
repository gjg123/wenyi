var video_list =[
		{
			"id":"1",
			"name":"QQ国际板",
			"singer":"薛之谦",
			"duration":"01:03",
			"src":"others/QQ国际板.webm",
			"images":"img/huihuxidetong.jpg"
			
		},
		{
			"id":"2",
			"name":"瑞士宣传片视频",
			"singer":"梁静茹",
			"duration":"02:45",
			"src":"others/瑞士宣传片视频.ogg",
			"images":"img/sundasheng.jpg"
			
		}
		];
		//获取播放进度条
		var process_slide=document.getElementsByClassName("process_slide")[0]
		var process=document.getElementsByClassName("process")[0]
		var box1=document.getElementsByClassName("box")[0];
		var shipin=document.getElementsByClassName("shipin")[0];
		var player=document.getElementById("player");
		var shipin_list=document.getElementsByClassName("shipin_list")[0];
		var bofang_list=document.getElementsByClassName("bofang_list")[0];
		var ul=document.getElementsByClassName("ul")[0];
		var imgs=document.getElementById("back");
		//关灯
		var deng=document.getElementById("guan");
		//全屏
		var man=document.getElementById("man");
		function loadVideoList(){
			for (var i=0;i<video_list.length;i++){
				var video=video_list[i];
				var li=document.createElement("li");
				var span1=document.createElement("span");
				var span2=document.createElement("span");
				li.setAttribute("data-index",i)
				span1.innerHTML=video_list[i].name;
				imgs.src=video_list[i].images;
				span2.innerHTML=video_list[i].duration;
				span1.classList.add("lt");
				span2.classList.add("rt");
				li.appendChild(span1);
				li.appendChild(span2);
				
				
		
				ul.appendChild(li)
				shipin_list.appendChild(ul);
			
				li.addEventListener("click",function(){
						
						var index=this.getAttribute("data-index");
						play_index=index;
						reloadVideo();
						playVideo();
				})
				
			}
		}
		//设置加载
		
		function reloadVideo(){
			var imgs=document.getElementById("back");
			var video=video_list[play_index];
			imgs.src=video.images;
			
	/*		span1.innerHTML=video_list[i].name
			span2.innerHTML=video_list[i].duration*/
			player.src=video.src;
		}
		var btnplay=document.getElementById("btnPlayward");
		function playVideo(){
			player.play();
			clearInterval(timer);
			timer=setInterval(fn1,10);
			btnplay.setAttribute("class","btn_play fa fa-play");
		}
		//设置播放   暂停   按钮
		btnplay.addEventListener("click",function(){
			if (player.paused){
			
				playVideo();
			}else{
				clearInterval(timer);
				player.pause();
				btnplay.setAttribute("class","btn_play fa fa-pause");
			}
		})
		var timer;
		var y=0;
		
		function fn1(){
			y++;
			imgs.style.transform="rotateZ("+y+"deg)";
		}
		//下一个视频
		function forward(){
			if (play_index==video_list.length-1){
				play_index=0;
			}else {
				play_index++;
			}
				reloadVideo();
				playVideo();
		}
		//上一个视频
		function backward(){
			if (play_index==0){
				play_index=video_list.length-1
			}else {
				play_index--;
			}
				reloadVideo();
				playVideo();
		}
		deng.onclick=function(){
	//		player.style.opacity="0.6";
			box1.style.backgroundColor="black";
			shipin.style.backgroundColor="black";
			document.body.style.backgroundColor="black";
		}
		//全屏
		man.onclick=function(){
		/*	player.style.width=1500+"px";
			player.style.height=1500+"px";
			bofang_list.style.display="none";
			shipin_list.style.display="none";*/
			if (player.webkitRequestFullScreen){
				player.webkitRequestFullScreen();
			}
			else if (player.mozRequestFullScreen){
				player.mozRequestFullScreen();
			}
			
			
			
		}
/*		//转换  当前播放时间的函数
		function timeFormate(time){
			if (time>=3600){
				var hour=parseInt(time/3600);
				var minute=parseInt(time%3600/60)
				var second=parseInt(time%3600)
				minute=minute>=10?minute:"0"+minute;
				second=second>=10?second:"0"+second;
				hour=hour>=10?hour:"0"+hour;
				return hour+":"+minute+":"+second;
				
			}else {
				var minute=parseInt(time/60)
				var second=parseInt(time%60)
				minute=minute>=10?minute:"0"+minute;
				second=second>=10?second:"0"+second;
				return minute+":"+second;
			}
		}
		timeFormate();
		
		*/
		
		
		
		
		
		
		
		
		
		
		
		//播放进度控制    进度条
		//当播放进度条的盒子被点击的时候      进度条的宽度   随着播放的进度变化       
			process.onclick=function(){
			
				//鼠标点击的地方的宽度     除以       点击的进度条的播放总宽度    等于播放进度的比例
				var percent=event.offsetX/this.offsetWidth;
				process_slide.style.width=percent*100+"%";
				//播放的当前时间   等于     播放的总时常   乘以 百分比   （播放进度的百分比）
				player.currentTime=player.duration*percent;
		
			}
			//获取canvas元素
			
			//获取上下文   把canvas变成一块画布
		
	//	window.onscroll=function(){
	//		var box = document.querySelector('.box');
		//	if (document.body.scrollTop<box.offsetHeight){
	/*			var myCanvas=document.querySelector("#canvas");
					var ctx=myCanvas.getContext("2d");
				var player=document.getElementById("player");
				player.src="others/QQ国际板.webm";
				player.onload=function(){
						 playVideo()
						ctx.drawImage(player,0,0,300,300);
						
				}
			*/
		//	}
			
	//	}
		
		

//添加小窗口，页面滚动播放小窗口
//	var player=document.getElementById("player");
var myCanvas = document.querySelector("#canvas");
var box = document.querySelector('.box');
var ctx = myCanvas.getContext('2d');
	
	var player=document.getElementById("player");
	var timer = setInterval(function(){
		if (document.body.scrollTop<box.offsetHeight){
			myCanvas.style.display='none';
		}else{
			myCanvas.style.display='block';
			
		}
		
				
		ctx.drawImage(player,0,0,320,260);
			
		
				
		 
	},100) ; 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		var play_index=0;
		loadVideoList()
		
		
		
		
/*		

//添加小窗口，页面滚动播放小窗口
var myCanvas = document.querySelector("#canvas");
var box = document.querySelector('.box');
var ctx = myCanvas.getContext('2d');
	
	
	var timer = setInterval(function(){
		if (document.body.scrollTop<box.offsetHeight){
			myCanvas.style.display='none';
		}else{
			myCanvas.style.display='block';
		}
	
		ctx.drawImage(videos,0,0,320,260);
	},100) ; */
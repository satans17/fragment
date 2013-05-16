KISSY.add("gallery/funmenu", function(S){
	var $=S.all;
	
	function Funmenu(config){
        var self = this;
        Funmenu.superclass.constructor.call(self, config);
        self._init();
	}

    //属性
    Funmenu.ATTRS = {
		//第一个菜单的度数
		startDeg:{
			value:30
		},
		//间隔的度数
		intervalDeg:{
			value:50
		},
		//菜单展示的方向
		direction:{
			value:-1,
			validator :function(value){
				return value===1||value===-1;
			}
		},
		//菜单离圆心的距离
		distance:{
			value:150
		},
		//圆点
		trigger:{
			value:null
		},
		//菜单项
		items:{
			value:[]
		},
		//为了也能适应pc机
		triggerType:{
			value:"click"
		},
		//是否显示
        visible: {
            value: false
        },
		//显示动画持续时间
		duration: {
			value:0.5
		},
		//动画效果
		easing: {
			value: "backOut"
		},
		//是否动画显示
		anim: {
			value:0
		},
		// 是否绘制路径
		path:{
			value:false
		},
		itemCls:{

		},
		zIndex:{
			value:999
		}
    };
	
	
	S.extend(Funmenu, S.Base, {
		
		_init: function(){
			var self = this,
				trigger = $(self.get("trigger")),
				items = $(self.get("items"));
			
			//重置属性值
			self.set("trigger",trigger);

			self.renderItems();
			
			trigger.on(self.get("triggerType"),function(){
				self.toggle();
			});
			
			
		},
		
		renderItems: function(){
			var self = this,
				items = self.get("items");
			//debugger;
			
			//可以传入一个选择器
			if(S.isString(items)){
				items = $(items);
			}
			
			//自己配置
			if(S.isArray(items)){
				var node,tmpnode=$("<div/>")
				//items.length=0;
				S.each(items,function(item,i){
					node = $("<div/>").html(item.html);
					if(S.isFunction(item.event)){
						node.on("click",function(ev){
							item.event(ev);
						})
					}
					tmpnode.append(node);
				});
				items = $(tmpnode.all(tmpnode[0].childNodes));
			}
			
			items.appendTo(document.body);
			items.hide().css({
				position:"absolute"
			});
			if(self.get("itemCls")){
				items.addClass(self.get("itemCls"));
			}
			self.set("items",$(items));	
		},
		
		//获取圆心的坐标
		_getXY: function(){
			var self = this,
				trigger = self.get("trigger"),
				offset = trigger.offset();
				
			return {
				x: offset.left+trigger.width()/2,
				y: offset.top+trigger.height()/2
			}
		},
		
		//展示菜单
		show: function(){
			var self = this,
				trigger = self.get("trigger"),
				items = self.get("items"),
				center = self._getXY(),
				direction = self.get("direction"),
				distance = self.get("distance"),
				startDeg = self.get("startDeg"),
				intervalDeg = self.get("intervalDeg"),
				duration = self.get("duration"),
				easing = self.get("easing"),
				anim = self.get("anim");
				
			self.set("visible",true);	
			
			items.each(function(item,i){
				//重置items,可能出现item大小不一致的情况
				item.css({
					left:center.x-item.width()/2,
					top:center.y-item.height()/2,
					opacity:0	
				});
				
				S.later((function(item,i){
					return function(){
						//开始动画
						var xy = circle(center.x, center.y, distance, startDeg+intervalDeg*i, direction);
						item.show().animate({
							left:xy.x-item.width()/2,
							top:xy.y-item.height()/2,
							opacity:1
						},duration,easing,function(){});
					};
				})(item,i),anim*i);
				
			});

			var hide=function(){
				self.hide();
				console.log("hide");
			}
			//隐藏啊
			//$(document.body).on("click",hide);

		},
		
		//隐藏菜单
		hide: function(){
			var self = this
				duration = self.get("duration"),
				easing = self.get("easing"),
				items = self.get("items"),
				center = self._getXY(),
				anim = self.get("anim");
				
			self.set("visible",false);
			items.each(function(item,index){
				S.later((function(item){
					return function(){
						item.animate({
							left:center.x-item.width()/2,
							top:center.y-item.height()/2,
							opacity:0
						},duration,easing,function(){
							item.hide();
						});
					};
				})(item),anim*index);
			});
			
			
		},
		
		//显示，隐藏
		toggle: function(){
			this.get("visible")?this.hide():this.show();
		}
		
		
	});
	
	
	return Funmenu;
	
	
	
	//角度to弧度
	function deg2Rad(deg){
		return deg / 180 * Math.PI;
	}

	//计算对应弧度的坐标
	function circle(x,y,r,deg,direction){
		return {
			x: x + Math.sin(deg2Rad(direction*deg)) * r,
			y: y - Math.cos(deg2Rad(direction*deg)) * r
		}
	}
	
	
	
	
	
			
			// //绘制路径
			// if(self.get("path")){
				// for(var i=0;i<60;i++){
					// var xy = circle(center.x,center.y,distance,i*6,1);
					// $("<div/>")
						// .css({
							// position:"absolute",
							// top:xy.x,
							// left:xy.y,
							// background:"red",
							// width:2,
							// height:2,
							// overflow:"hidden"
						// })
						// .appendTo(document.body);
				// }
			// }	
	
	
	
	
	
	
	

});
function color(){
	this.canvas = document.createElement("canvas");
	this.image = document.createElement("img");
	this.ctx = this.canvas.getContext("2d");
	this.init();
}

color.prototype={
	
	init: function(){
		var self=this,
			image=self.image,
			ctx = self.ctx;
			
		//document.body.appendChild(self.image);
		//图片加载完成才执行
		image.addEventListener("load", function(ev){
			var dw = this.width>100?100:this.width,
				dh = this.height>100?100:this.height,
				d = [],
				success = self.success;
            ctx.drawImage(image, 0, 0, dw, dh);
			//console.log(ctx.getImageData(0, 0, dw, dh).data);
			d = self.sort(ctx.getImageData(0, 0, dw, dh).data,dw,dh);
			if(typeof(success)=="function"){
				success.call(this,d);
			}
		})
	},
	
	check: function(img,success){
		var self = this,
			image = self.image,
			ctx = self.ctx;
			
		self.success = success;
		image.src=img;
	},
	
	sort: function(imgData,w,h){
		var self=this;
		var cache = {},arr=[],rgb;
		var r,g,b
		for(var i=0;i<w*h;i++){
			r=imgData[i*4],g=imgData[i*4+1],b=imgData[i*4+2];
			rgb = self.getHex(r,g,b);
			if(cache[rgb]){
				cache[rgb]++
			}else{
				cache[rgb]=1;
			}	
		}
		
		
		for(var k in cache){
			arr.push([k,cache[k]]);
		}
		
		var length = arr.length, temp=[];
		for(i=0; i<=length-2; i++) {
			for(j=length-1; j>=1; j--) {
				if(arr[j][1] > arr[j-1][1]) {
					temp = arr[j];
					arr[j] = arr[j-1];
					arr[j-1] = temp;
				}
			}
		}
		
				
		

		return arr;
		//console.log(arr);
	},
	
	getHex: function(r,g,b){
		return (this.d2Hex(r) + this.d2Hex(g) + this.d2Hex(b));
	},
	
	d2Hex: function(d){
		var hex = Number(d).toString(16);
		while (hex.length < 2) {
			hex = "0" + hex;
		}
		return hex.toUpperCase();	
	}



	
}


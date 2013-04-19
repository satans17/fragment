/**
 * Created by IntelliJ IDEA.
 * User: changyin@taobao.com
 * Date: 2013-4-9
 * describe: html5 file api 读取内存图片并上传
 */
KISSY.add("upload", function(S){
	var $ = S.all;
	
	return function(config){
		var panel = $(config.container);
		var formData = new FormData();
		var upload = function(img){
			//加一个标志
			formData.append("clipboardupload", "true");
			formData.append("upfile", img);
			var xhr = new XMLHttpRequest();
			xhr.open("POST", config.url);
			xhr.onload = function(d) {
				var data = S.JSON.parse(d.target.response);
				if(S.isFunction(config.success)){
					config.success(data.message);
				}
			};
			//S.later(function(){
				xhr.send(formData);
			//},1000);
		}

		if(S.UA.firefox){
			panel.attr("contenteditable",true);
		}
		
		
		document.body.onpaste = function(ev) {
			if(S.UA.firefox){
				//这是一个异步过程,时间随便定的
				setTimeout(function(){
					var bak = panel.html();
					if(/\<img src=\"data:image\//.test(bak)){
						var d = bak.match(/src=\"([^\"]+)/);
						if(S.isArray(d) && d.length==2){
							upload(d[1]);
						}
					}
				},100);
			}
		
			if(S.UA.chrome){
				S.each(ev.clipboardData.items, function(file){
					if(file.kind=='file' && ~file.type.toString().indexOf('image')){
						var fileReader = new FileReader();
						fileReader.onload  = function(e) {
							upload(e.target.result);
						};
						fileReader.readAsDataURL(file.getAsFile())
					}
				});
			}
		};
		
	};



},{
    attach :false
});
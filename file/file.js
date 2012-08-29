/**
 * Created by IntelliJ IDEA.
 * User: changyin@taobao.com
 * Date: 12-8-1
 * describe: html5 file api 读取内存图片并上传
 */
KISSY.add("file", function(S){
	var $ = S.all;

	return function(config){
		var container = $(config.container);
		
		document.body.onpaste = function(ev) {
			var items = ev.clipboardData.items;
			S.each(ev.clipboardData.items, function(file){
				if(file.kind=='file' && ~file.type.toString().indexOf('image')){
					var img = document.createElement("img"),
						p = $('<div class="line"><p>正在上传图片....</p></div>'),
						fileReader = new FileReader();
					
					p.append(img).appendTo(container);
					
					fileReader.onload  = function(e) {
						img.src = e.target.result;
					};
					fileReader.readAsDataURL(file.getAsFile());

					//formData
					var formData = new FormData();
					formData.append("upfile", file.getAsFile());
					formData.append("test", "aaaaaaaaaaaaaaaaaaaaaaaaaaaa");

					//
					var xhr = new XMLHttpRequest();
					xhr.open("POST", config.url);
					xhr.onload = function(d) {
						var data = S.JSON.parse(d.target.response);
						if(data.status){
							p.all("p").html("图片上传成功...图片地址:<a target='_blank' href='"+data.message+"'>"+data.message+"</a>")
						}else{
							p.all("p").html("上传失败..")
						}
					};
					S.later(function(){
						xhr.send(formData);
					},1000);
					
				}
			});
			

		};
	}

},{
    attach :false
});
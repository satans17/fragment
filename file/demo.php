<?php


function getname($exname){
	//目录名
	$dir = "upload/";
	//文件的名称前缀，本例默认从1开始依次加加
	$i=1;
	$showtime=date("YmdHis");
	if(!is_dir($dir)){
		mkdir($dir,0777);
		//如果不存在此目录，则创建，请保证您有相应的权限
	}
	while(true){
		if(!is_file($dir.$showtime.".".$exname)){
			$name=$showtime.".".$exname;
			break;
		} 
	}
	return $dir.$name;
}


function formatBase64($code,$filename){
	$code = preg_replace("/^data:(\S+);base64,/", "", $code);
	$file = base64_decode(str_replace('data:image/png;base64,', '', $code));
	if($file!==false){
		file_put_contents($filename, $file);
	}
	if($file && file_exists($filename)){
		return $filename;
	}else{
		return null;
	}
}


if($_POST){
	$uploadfile = formatBase64($_REQUEST["upfile"],getname("png"));
		
	if($uploadfile){
		echo "{\"status\":\"true\",\"message\":\"".$uploadfile."\"}";
	}else {
		echo "{\"status\":\"false\",\"message\":\"上传失败\"}";
	}
	die();
}


?>



 
<!doctype html>
<html>
<head>
	<title>select</title>
	<meta charset="utf-8"/>
	<style type="text/css">	
		body {margin:2em;font-family:'MicroSoft YaHei'}
		div,p{margin:5px 0; padding:0px;}
		.line{margin-top:10px;padding:10px;background:#eee;}
		.line img{max-height:200px;max-width:200px;border:1px solid #f60;margin:10px 0;}
		#panel{border:1px solid #ccc;padding:10px;}
	</style>
	<script src="http://a.tbcdn.cn/s/kissy/1.3.0pr1/kissy.js"></script>
	<script>
		KISSY.config({
			packages:[
				{
					name:"upload", 
					tag:"0801",
					path:"./"
				}
			]
		});
	</script>

	
</head>
<body>

	<h1>读取内存截图并上传</h1>
	
	<div id="panel">
	<p>1、用旺旺或者QQ截一张图</p>
	<p>2、聚焦到这个框框 ，按 CTRL+V，图片会自动预览并且上传到服务器</p>
	<p>3、仅支持firefox(3.0),chrome</p>
	<p>4、参考资料 <a href="http://dev.w3.org/2006/webapi/clipops/">Clipboard API and events</a>  <a href="http://www.w3.org/TR/FileAPI/">fileapi</a></p>
	</div>



	<div id="container"></div>
	
	
	<script>
		
		KISSY.use("upload",function(S,Upload){
			Upload({
				url: "demo.php",
				container:"#panel",
				success: function(url){
					S.all("#container").append('<div class="line"><img src="'+url+'" /><br><a href="'+url+'">'+url+'</a></div>');
				}
			})
		});
	</script>


</body>
</html>
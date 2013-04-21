function dd(container,load){
	var container = document.getElementById(container),
		isImage = function(type){
			switch (type) {
			case 'image/jpeg':
			case 'image/png':
			case 'image/gif':
			case 'image/bmp':
			case 'image/jpg':
				return true;
			default:
				return false;
			}
		};

	container.addEventListener('dragenter', function(){
		this.style.backgroundColor = "#3297fd"; 
	}, false);
	
	container.addEventListener('dragover', function(ev){
		ev.stopPropagation();
		ev.preventDefault();	
	}, false);
	
	container.addEventListener('drop', function(ev){
		ev.stopPropagation();
		ev.preventDefault();
		var files = ev.dataTransfer.files;
		for (var i = 0, f; f = files[i]; i++) {

			var t = f.type ? f.type : 'n/a',
				reader = new FileReader(),
				isImg = isImage(t),
				img;

			// 处理得到的图片
			if (isImg) {
				reader.onload = (function (theFile) {
					return function (e) {
						if(typeof(load)=="function"){
							container.innerHTML = '<img class="preview" src="' + e.target.result + '" title="' + theFile.name + '"/>';
							load.call(this,e.target.result);
						}
					};
				})(f)
				reader.readAsDataURL(f);
			} else {
				container.innerHTML = "<span>你拖进来的不是一张图片:(</span>";
			}

		}
		this.style.backgroundColor = "transparent"; 
	
	}, false);
	
	container.addEventListener('dragleave', function(){
		this.style.backgroundColor = "transparent"; 
	}, false);
	
}
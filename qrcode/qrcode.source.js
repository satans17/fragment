~function(){
    new function(){
        var TPL="";
        TPL += "		<div id=\"bookmark-qrcode-img\" class=\"img\"><\/div>";
        TPL += "		<div class=\"input\">";
        TPL += "			<textarea id=\"bookmark-qrcode-input\"><\/textarea>";
        TPL += "			<button class=\"create\" type=\"button\" id=\"bookmark-qrcode-create\">\u751F\u6210\u4E8C\u7EF4\u7801<\/button> <button class=\"close\" type=\"button\" id=\"bookmark-qrcode-close\">\u5173\u95ED<\/button>";
        TPL += "			<p><a href=\"http:\/\/ma.taobao.com\/\">http:\/\/ma.taobao.com\/<\/a><\/p>";
        TPL += "		<\/div>",
            URL = "http://ma.taobao.com/api/qrcode.html?sec=qr&activity=encode&text={text}&width=180&height=180&ecLevel=L&characterSet=gbk&t={t}";

        var self = this,
            get = function(id){
                return document.getElementById(id);
            };

        this.render = function(){
            var container = get("bookmark-qrcode");
            if(!container){
                container = self.create();
                //添加样式
                self.addStyleSheet();
                get("bookmark-qrcode-create").onclick = function(){
                    self.createQR(get("bookmark-qrcode-input").value);
                }
                get("bookmark-qrcode-close").onclick = function(){
                    document.body.removeChild(container);
                }
            }else{
                container.style.display="block";
            }
            self.createQR(location.href);
            get("bookmark-qrcode-input").value=location.href;
        }

        this.addStyleSheet = function() {
            var elem, id = "bookmark-qrcode-stylesheet";
            var cssText = ".bookmark-qrcode *{margin:0;padding:0;box-sizing: content-box;}.bookmark-qrcode{position:fixed;z-index:99999;top:10px;left:50%;margin-left:-200px;width:400px;background:#fff;border:10px solid #1570a6;}.bookmark-qrcode .img,.bookmark-qrcode .input{float:left;padding:10px;}.bookmark-qrcode .img{width:180px;height:180px;}.bookmark-qrcode .img img{display:block;width:180px;height:180px;}.bookmark-qrcode .input{width:180px;height:200px;background:#1570a6;padding:0 10px;}.bookmark-qrcode .input textarea{width:175px;height:120px;padding:5px;margin-bottom:10px;}.bookmark-qrcode .input button{padding:5px 10px;}.bookmark-qrcode .input a{display:block;font-size:12px;font-family:Arial,sans-serif;margin-top:10px;color:#fff;}";

            if (id && (id = id.replace('#', ''))) elem = document.getElementById('#' + id);
            if (elem) return; // 仅添加一次，不重复添加

            elem = document.createElement("style");
            elem.id = id;

            // 先添加到 DOM 树中，再给 cssText 赋值，否则 css hack 会失效
            var head = document.getElementsByTagName("head")[0];
            head.appendChild(elem);

            if (elem.styleSheet) { // IE
                elem.styleSheet.cssText = cssText;
            } else { // W3C
                elem.appendChild(document.createTextNode(cssText));
            }
        }

        this.create = function(){
            var dom = document.createElement("div");
            dom.className="bookmark-qrcode";
            dom.id="bookmark-qrcode";
            dom.innerHTML = TPL;
            document.body.appendChild(dom);
            return dom;
        }

        this.createQR = function (text){
            var url = URL.replace("{text}",encodeURIComponent(encodeURIComponent(text))).replace("{t}",Math.random()),
                img = document.createElement("img"),
                imgpanel = get("bookmark-qrcode-img");
            imgpanel.innerHTML="";
            img.onerror=function(){
                imgpanel.innerText="生成失败，请点击右边“生成二维码”按钮重试";
            }
            img.src=url;
            imgpanel.appendChild(img);
        };

        self.render();
    }
}();

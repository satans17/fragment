
(function(win){
    //浏览器不支持就不跟你玩了
    if(!document.readyState || !win.performance || !win.performance.timing) {
        alert("您的浏览器版本过低或者不支持查看performance");
        return;
    }

    //页面必须onload之后才能执行该代码，否则timing.loadEventEnd一直为0
    if(document.readyState==="complete"){
        init();
    }else{
        win.addEventListener("load",function(){
            init();
        },false)
    }

    function init(){
        addStyleSheet();
        setTimeout(drawTiming,1)
    }

    function drawTiming(){
        var performance = win.performance;
        var timing = performance.timing;
        var navigation = performance.navigation;
        var navStart = timing.navigationStart;
        var navDone = timing.loadEventEnd;
        var totalTime = navDone - navStart;

        var Panel = new function(){
            var box = document.createElement("div"),
                bd = document.createElement("div");

            box.className = "Plugin-timeing";
            bd.className = "bd";
            box.appendChild(bd);
            document.body.appendChild(box);
            this.append = function(dom){
                bd.appendChild(dom);
            }
        };

        function addTimeing(start, end, text) {
            var element = document.createElement("div");
            var style = element.style;
            var elapsed = end - start;
            var startTime = start - navStart;
            var endTime = end - navStart;
            var title;

            if (elapsed < 0)
                elapsed = 0;

            if (startTime < 0)
                startTime = 0;

            if (endTime < 0)
                endTime = 0;

            with(element){
                element.title =  text + "\n" + "Start Time:  " + startTime + " ms\n" +  "End Time:  " + endTime + " ms\n" + "Duration:  " + elapsed + " ms";
                element.innerHTML = "<p>"+text+"</p>";
                style.width = (100 * elapsed / totalTime) + "%";
                style.marginLeft = (100 * startTime / totalTime) + "%";
            }

            Panel.append(element);
        }

        addTimeing(navStart, navDone, "Total Load Time");
        //plotArea.appendChild(addTimeing(dateStart.getTime(), dateEnd.getTime(), "JS Date Load Time", "blue");
        addTimeing(timing.unloadEventStart, timing.unloadEventEnd, "Unload Event");
        addTimeing(timing.redirectStart, timing.redirectEnd, "Redirect");
        addTimeing(timing.fetchStart, timing.responseEnd, "Fetch");
        addTimeing(timing.domainLookupStart, timing.domainLookupEnd, "DNS");
        addTimeing(timing.connectStart, timing.connectEnd, "Connect");
        addTimeing(timing.requestStart, timing.responseEnd, "Request");
        addTimeing(timing.domLoading, timing.domComplete, "DOM");
        addTimeing(timing.domContentLoadedEventStart, timing.domContentLoadedEventEnd, "DOMContentLoaded Event");
        addTimeing(timing.loadEventStart, timing.loadEventEnd, "Window Load Event");

    }


    function addStyleSheet() {
        var elem, id = "performance-timing";
        var cssText = ".Plugin-timeing{position:fixed;top:0;left:0;z-index:999999;width:100%;height:350px;background-color:#fff;box-sizing:border-box;border-bottom:1px solid #000;box-shadow:0 6px 10px #aaa;margin:0;padding:10px;}.Plugin-timeing .bd{margin:0 20% 0 0;padding:0;}.Plugin-timeing .bd div{position:relative;min-width:10px;height:20px;background-color:#ae7276;border-radius:5px;margin:10px 0;padding:0;}.Plugin-timeing div p{position:absolute;left:100%;width:200px;line-height:20px;margin:0;padding:0 0 0 10px;}";

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

})(window);


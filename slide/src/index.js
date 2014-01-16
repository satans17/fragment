KISSY.add(function(S, require, exports, module) {
    var Node = require('node');
    var Base = require('base');
    var $ = Node.all;
    var translateTpl = 'translate3d({translateX}px,{translateY}px,0)';

    var Slide = Base.extend({
        initializer: function () {
            var self = this,
                srcNode = self.get("srcNode");

            self.set("contentEl",srcNode.one("."+self.get("contentCls")));
            self.set("items",srcNode.one("."+self.get("itemCls")));


            self.bind();
        },
        bind: function(){
            var self = this,
                gesture = Node.Gesture,
                srcNode = self.get("srcNode"),
                contentEl = self.get("contentEl"),
                items = self.get("items"),
                maxX = contentEl.innerWidth(),
                startX, deltaX;


            function touchMove(ev){
                deltaX = getPage(ev,"pageX") - startX;
                if(deltaX>maxX){
                    deltaX = maxX;
                }
                contentEl.css({
                    transform: "translate3d("+deltaX+"px,0,0)"
                })
            }


            contentEl.on(gesture.start,function(ev){
                startX = getPage(ev,"pageX");
                contentEl.on(gesture.move,touchMove);
            });

            contentEl.on(gesture.end,function(ev){
                contentEl.detach(gesture.move,touchMove);
            });

        },
        destructor: function () {
        }
    }, {
        ATTRS: {
            //容器
            srcNode: {
                setter:function(v){
                    return $(v);
                }
            },
            contentCls:{
                value:"ks-content"
            },
            itemCls:{
                value:"ks-item"
            },
            //弹性效果
            bounce: {
                value: true
            },
            //滚动方向
            direction: {
                value: 'x'
            },
            //缓动效果
            easing: {
                value: 'easeNone'
            },
            //持续时间
            duration: {
                value: 0.5
            }
        }
    });

    return Slide;


    //获取属性
    function getPage(event, page) {
        return event.changedTouches ? event.changedTouches[0][page] : event[page];
    }

	
})


微淘插件通常是交互性比较强的页面，在demo阶段，建议使用前后端分离的开发模式，即前端直接写页面，用假的JSON数据模拟与后端通讯，demo开发完成之后，再放到TAE的环境中调试。
在”微淘插件开发指南-前端篇“教程中，我们假设都是在demo环境中。

下面我将带你进入微淘插件开发之旅...

## hello world

需要强调的是，微淘插件开发，其实与写传统的web页面区别不大，也都是html+css+js，但是由于我们的插件是运行在淘宝的手机客户端中，会有一些需要特别注意的地方，这些特殊的地方后面会一一提到。

下面以hello world为例，看我们如何写一个微淘插件：


```html
<!doctype html>
<html>
<head>
    <meta charset="gbk"/>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="format-detection" content="telephone=no"/>
    <title>helloworld</title>
    <script src="http://g.tbcdn.cn/kissy/k/1.4.0/seed.js" charset="utf-8"></script>
    <style>
        .box {
            width:100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            background-color: #ff0000;
            transition: all 0.5s ease-in;
        }
        .anim{
            width:300px;
            height: 300px;
        }
    </style>
</head>
<body>

<div class="box">touch me</div>

<script>
KISSY.use("node",function(S,Node){
    var $= Node.all;

    $(".box").on(Node.Gesture.start,function(ev){
        $(ev.target).toggleClass("anim");
    })

})
</script>


</body>
</html>
```

[示例链接](http://)

是不是觉得和以前开发web页面没什么区别呢？大部分确实如此，不过最在这个最简单的helloworld示例中，还是有我们需要注意的点。

####  开发规范

```
	<meta charset="gbk"/>
```

比如这个meta的编码设置，在TAE环境中，所有的文件都必须是gbk编码的，更多开发规范，详见[开发规范](http://)

#### 移动端web开发

```html
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="format-detection" content="telephone=no"/>
```

这些meta设置在pc页面的开发中我们都没有使用过，但是在这些设置在手机浏览器中却是很有必要的，他们的含义详见 [移动web开发指南](http://)


#### html5新特性

```html
    <style>
        .box {
            transition: all 0.5s ease-in;
            -webkit-transition: all 0.5s ease-in;
        }
    </style>
```

transition 是css3新增的属性，想了解transition以及更多的css3属性，可以看看  [html5开发指南](http://)


```html
<script>
KISSY.use("node",function(S,Node){
    var $= S.all;

    $(".box").on(Node.Gesture.start,function(ev){
        $(ev.target).toggleClass("anim");
    })

})
</script>
```

在PC上，我们绑定事件通常是click,mousemove等等，但是在移动设备上是没有这些事件的，只有touchstart,touchmove,touchend，不过是实际开发过程过程中，我们用到的手势操作很多，比如tap，doubleTap，swipe，pinch，shake等等，听起来很复杂是不是，不用担心，KISSY已经为我们做好了封装，更多内容，可以看看[KISSY文档](http://)



至此，一个“微淘插件”的demo已经开发完成了。












/**
 * Created with JetBrains WebStorm.
 * User: Changyin
 * Date: 13-11-6
 * Time: 下午2:34
 * To change this template use File | Settings | File Templates.
 */
KISSY.add(function(S,Node,Event,Color,Ajax,GGL){
    var $ = Node.all, Gesture = Event.Gesture;

    return function(config){
        var canvas = $(config.canvas);

        var game = new GGL({
            canvas:canvas
        });
        game.on("quit",function(){
            alert("用户点了退出，可以在这里做点事情")
        })

    }






},{
    requires:[
        'node',
        'event',
        'color',
        'ajax',
        './ggl'
    ]
})
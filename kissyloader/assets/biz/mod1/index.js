/**
 * Created with JetBrains WebStorm.
 * User: Changyin
 * Date: 13-10-19
 * Time: ����12:34
 * To change this template use File | Settings | File Templates.
 */
KISSY.add(function(S){
    var Node = S.require("node");
    var $=Node.all;

    return function(data){
        $(data.id).html("<p>mod1 loaded!</p>")
    }

},{
    requires:["./mod1.css"]
})

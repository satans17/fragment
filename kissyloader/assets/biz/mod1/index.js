/**
 * Created with JetBrains WebStorm.
 * User: Changyin
 * Date: 13-10-19
 * Time: ����12:34
 * To change this template use File | Settings | File Templates.
 */
KISSY.add(function(S,Ajax,Node){
    var $=Node.all;

    console.log(Ajax);

    return function(data){
        $(data.id).html("<p>mod1 loaded!</p>")
    }

},{
    requires:["ajax","node","./mod1.css"]
})

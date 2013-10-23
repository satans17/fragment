/**
 * Created with JetBrains WebStorm.
 * User: Changyin
 * Date: 13-10-19
 * To change this template use File | Settings | File Templates.
 */
KISSY.add(function(S,Node,Render){
    var $=Node.all;

    return function(data){

        data.template = '<p>万万没想到</p> <p>{{txt}}</p>';

        Render(data);
    }

},{
    requires:["node","./render","./v1.css"]
})


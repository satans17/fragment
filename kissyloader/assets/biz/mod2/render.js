/**
 * 公用一个业务逻辑
 */
KISSY.add(function(S,Node,XTemplate){
    var $=Node.all;

    return function(data){
        $(data.id).html(new XTemplate(data.template).render(data));
    }

},{
    requires:["node","xtemplate"]
})

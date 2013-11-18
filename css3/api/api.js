KISSY.add("global/api",function(S,Ajax){
    var storage = {};

    function addAPI(api){

        if(!(api.ModuleName && S.isArray(api.Services) && api.Services.length>0)){
            S.log("api格式错误");
            return;
        }

        S.each(api.Services,function(item){

            S.each(item.apis,function(i){
                storage[item["ServiceName"]] = {
                    name: i.name,
                    url: item.url
                }
            })

        });

    }

    function getAPI(module,name){
        var m =  storage[module];
        if(!m){
            S.log("模块不存在");
            return;
        }
        S.log(m);

        //除了url，好像什么都不用返回了
        return {
            url: m.url
        };
    }

    return {

        addAPI:addAPI,

        getAPI:getAPI,

        exec: function(module,name,param,callback){
            var api = getAPI(module,name);

            if(!api){
                S.log("接口不存在");
                return;
            }

            Ajax({
                url: api.url,
                data: param,
                type:"jsonp",
                complete: function(data , textStatus , io){
                    if(textStatus=="success"){
                        callback(data);
                    }
                }
            })

        }

    };

},{
    requires:["ajax"]
})

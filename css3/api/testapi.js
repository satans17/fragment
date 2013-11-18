//注入api
KISSY.use("global/api",function(S,API){

    API.addAPI({
        "ModuleName":"testapp",
        "Services":[{
            "ServiceName":"com/taobao/jm/malacca/scanner/MalaccaTestDO",
            "url": "http://detail.taobao.com/api/price",
            "apis": [{
                "name": "test",
                "params": ["testD","int1","int2","testDs"]
            }]
        }]
    })


});

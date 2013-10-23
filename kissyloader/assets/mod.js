
KISSY.add("mod",function(S){
    var modules = [];

    return {
        /**
         * 添加要载入的模块
         * @param cfg
         */
        add: function(config){
            var cfg = config ||{};
            modules.push({
                name: cfg.name,
                data: cfg.data
            });
        },

        /**
         * 执行所有模块
         */
        exec: function(){
            var names=[];

            //防止重复调用exec()方法出现异常
            var mods = S.clone(modules);
            modules.length=0;

            S.each(mods,function(i){
                names.push(i.name);
            });

            //执行所有模块
            S.use(names.join(","), function(S,Init){
                var args=S.makeArray(arguments).slice(1);
                S.each(args,function(A,i){
                    S.isFunction(A) && A(mods[i].data);
                });
            });

        }

    }

});


(function(define) {
    define(function() {
        // 模块缓存区。
        var webpackJsonpModule = {};
        // 回调方法缓存区。
        var webpackInstallModule = {};
        // 引入的js所需调用的方法。
        var webpackJsonpCallback = function webpackJsonpCallback_(chunkName, Module) {
            // 判断模块名
            if (webpackJsonpModule[chunkName]) {
                console.warn('模块名: ' + chunkName + '已存在!为其旧模块重命名到:' + chunkName + '_')
                webpackJsonpModule[chunkName + '_'] = webpackJsonpModule[chunkName];
            }
            // 调用模块的方法获得模块并设置到模块缓存区。
            webpackJsonpModule[chunkName] = Module();
            // 取出回调方法
            resolve = webpackInstallModule[chunkName]
            if (resolve) {
                // 调用回调方法
                resolve(webpackJsonpModule[chunkName]);
                // 删除已有回调方法
                webpackInstallModule[chunkName] = undefined;
            }
        };
        // 添加script标签.
        var webpackJsonp = function webpackJsonp_(chunkName, resolve) {
                webpackInstallModule[chunkName] = resolve;
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.charset = 'utf-8';
                script.async = true;
                script.src = chunkName;
                head.appendChild(script);
            }
            // 获取模块方法。
        var webpack_require = function webpack_require_(chunkName, resolve) {
                if (chunkName) {
                    var Module = webpackJsonpModule[chunkName];
                    if (Module) {
                        resolve(Module);
                    } else {
                        webpackJsonp(chunkName, resolve)
                    }
                }
            }
            // 将webpackJsonpCallback设置到全局上。
        window['webpackJsonpCallback'] = webpackJsonpCallback;
        // 返回webpack_require给requirejs调用。
        return webpack_require;
    });
})(define);
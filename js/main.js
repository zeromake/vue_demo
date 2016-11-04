// 习惯写iife了可以不需要
(function(require, define){
	require.config({
        paths: {
			// vue cdn别名
            'vue': 'https://cdn.bootcss.com/vue/2.0.3/vue',
        }
    });
	// 下面的应该放到其他文件中
	define(function (require, exports, module) {
		// 使用别名加载vue
		var Vue = require('vue');
		new Vue({
			el: '#app',
			data: {
				mes: 'hello vue to requirejs'
			},
			template: '<span>{{ mes }}</span>'
		})
	});
	/*另一种requirejs的模块声明
	define(['vue'], function(Vue){
		
	});
	*/
})(require, define);
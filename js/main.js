(function(require, define){
	require.config({
        paths: {
            'vue': 'https://cdn.bootcss.com/vue/2.0.3/vue',
			// 使用cdn无法加载找了一下是因为define("ELEMENT",["vue"],t)多了一个"ELEMENT"参数
			'element': 'element'
        }
    });
	define(function (require, exports, module) {
		var element_ui = require('element');
		var Vue = require('vue');
		element_ui.install(Vue);
		new Vue({
			el: '#app',
			data: {
				mes: 'hello_el-button'
			},
			template: '<el-button>{{ mes }}</el-button>'
		})
	});
})(require, define);
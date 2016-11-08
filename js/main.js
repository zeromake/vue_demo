/**
 * Created by Linjianhui on 2016/11/3.
 * sea设置
 */
(function(require, define) {
    require.config({
        paths: {
            'vue': 'https://cdn.bootcss.com/vue/2.0.5/vue',
            'vue-router': 'https://cdn.bootcss.com/vue-router/2.0.1/vue-router',
            'webpackjsonp': '/js/webpackjsonp'
        }
    });

    define(function(require, exports, module) {
        var Vue = require('vue');
        var VueRouter = require('vue-router');
        Vue.use(VueRouter);
        var router = new VueRouter({
            routes: [{
                    path: '/component1',
                    component: function(resolve) {
                        resolve(require('/js/component1.js'));
                    }
                },
                {
                    path: '/component2',
                    component: function(resolve) {
                        resolve(require('/js/component2.js'));
                    }
                },
            ]
        })
        var app = new Vue({
            el: '#app',
            router: router,
            template: '<div class="content">\
			<h1>Hello Content!</h1>\
			<p>\
			 <router-link to="/component1">Go to Component1</router-link>\
			 <router-link to="/component2">Go to Component2</router-link>\
			</p>\
			<router-view></router-view>\
			</div>'
        });
    });
})(require, define);
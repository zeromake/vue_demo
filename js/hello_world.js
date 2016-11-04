new Vue({
	el:'#app',
	data: {
		mes: 'hello vue'
	},
	template: '<div><input v-model="mes" type="text"><br/><span>{{ mes }}</span></div>'
});
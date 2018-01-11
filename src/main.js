// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuikit from '@vuikit/vuikit'
import router from './router/index'
import App from './App'

import '@/styles/style.scss'
// import 'font-awesome/scss/font-awesome.scss'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)
Vue.use(Vuikit)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}/* ,
	data () {
		return {
			isScrollPage: true
		}
	} */
})

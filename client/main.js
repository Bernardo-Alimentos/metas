import Vue from 'vue'
import '../imports/ui/plugins'
import App from '../imports/ui/App.vue'
import VueMeteorTracker from 'vue-meteor-tracker'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)
Vue.use(VueMeteorTracker)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Meteor.startup(() => {
  new Vue({
    el: '#app',
    router,
    ...App,
  })
})

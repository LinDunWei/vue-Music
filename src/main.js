import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'   //取消移动点击事件300毫秒延迟
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Mint);
Vue.config.productionTip = false
fastclick.attach(document.body)  //用法，将这个fastclick附加到body，这样body下面所有div的点击都没有了300毫秒的延迟
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

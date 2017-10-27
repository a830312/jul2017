import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
  new Vue({ // eslint-disable-line no-new
    el: '#root',
    render: o => o(App),
  })
})

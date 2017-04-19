/* eslint no-console: 0 */
import Vue from 'vue/dist/vue.esm'

// Import the neccessary components required for the view
import Tabs from '../../components/b-tabs.vue'
import Tab from '../../components/b-tab.vue'

// Set up the Vue instance for the page, declare the components used, and which element to bind to
new Vue({
  el: '#welcome-index',
  components: {
  	'b-tabs': Tabs,
  	'b-tab': Tab
  }
})
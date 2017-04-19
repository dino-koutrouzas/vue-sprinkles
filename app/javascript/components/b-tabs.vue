<!-- Use together with <b-tab></b-tab> child elements -->
<template>
	<div class="tabs-with-details">
	  <div class="tabs">
		  <ul>
		    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
		    	<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
		    </li>
		  </ul>
		</div>

		<div class="tabs-details">
		  <slot></slot>
		</div>
	</div>
</template>

<script>
export default {
  name: 'b-tabs',
  data() {
  	return { tabs: [] }
  },

  created() {
  	this.tabs = this.$children
  },

  methods: {
  	selectTab(selectedTab) {
  		this.tabs.forEach(tab => {
  			tab.isActive = (tab.name == selectedTab.name)
  		})
  	}
  }
}
</script>

<style scoped>
	/* Add custom styles specific to this component here */
</style>
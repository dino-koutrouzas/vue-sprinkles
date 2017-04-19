<!-- Use together with <b-tabs></b-tabs> parent element -->
<template>
	<div v-show="isActive">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'b-tab',

  props: {
  	name: { required: true },
  	selected: { default: false }
  },

  data() {
  	return { isActive: false }
  },

  computed: {
  	href() {
  		return '#' + this.name.toLowerCase().replace(/ /g, '-')
  	}
  },

  mounted() {
  	this.isActive = this.selected;
  }
}
</script>

<style scoped>
	/* Add custom styles specific to this component here */
</style>
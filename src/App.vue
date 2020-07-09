<template>
	<div id="app">
		<Navigation v-if="!$route.meta.hideNavbar" />
		<router-view></router-view>
	</div>
</template>

<script>
import Navigation from "@/components/commons/Navigation.vue";

export default {
	name: "App",
	components: {
		Navigation
	}
};
</script>

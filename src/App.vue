<template>
	<div id="app" class="min-vh-100">
		<Navigation v-if="!$route.meta.hideNavbar" />
		<div class="container min-vh-100">
			<router-view></router-view>
		</div>
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

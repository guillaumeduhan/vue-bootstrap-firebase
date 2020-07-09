<template>
	<div id="Navigation">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">Navbar</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<router-link
						v-for="(link, index) in links"
						:key="index"
						:to="link.path"
						class="mx-2 text-decoration-none text-white"
					>{{ link.name }}</router-link>
				</div>
			</div>

			<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
			</form>
		</nav>
	</div>
</template>

<script>
export default {
	name: "Navigation",
	data() {
		return {
			links: [
				{
					name: "My timeline",
					path: "/home"
				},
				{
					name: "My profile",
					path: "/user"
				},
				{
					name: "My friends",
					path: "/friends"
				}
			]
		};
	}
};
</script>

<template>
	<div class="background-image">
		<Menu v-if="$route.path !== '/'" />
		<nuxt/>
	</div>
</template>

<script>
import Menu from "../components/menu";

export default {
	components: {
		Menu
	}
};
</script>


<style lang="scss" scoped>
.background-image {
	background-image: url("~/images/blue-background.png");
	background-size: cover;
	background-position: 50% 50%;
	position: absolute;
	z-index: -1;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}
</style>

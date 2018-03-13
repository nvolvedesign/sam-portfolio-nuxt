<template>
	<div class="background-image">
		<!-- <transition name="fade">
			<Menu v-if="$route.path !== '/'" />
		</transition> -->
		<nuxt/>
	</div>
</template>

<script>
import Menu from "../components/menu";

export default {
	components: {
		Menu
	},
	transition: "fade"
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
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>

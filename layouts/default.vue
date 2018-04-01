<template>
	<BackgroundImg>
		<div class="flex-container">
			<Navigation class="navigation" />
			<div class="content">
				<h1 class="title">
					About Me
				</h1>
				<nuxt />
			</div>
		</div>
	</BackgroundImg>
</template>

<script>
import Navigation from "../components/navigation";
import BackgroundImg from "../components/background-image";

export default {
	components: {
		Navigation,
		BackgroundImg
	}
};
</script>


<style lang="scss" scoped>
.flex-container {
	display: flex;
}

.navigation {
	flex: 1;
}

.content {
	flex: 3;
	padding-top: 64px;
}

.title {
	font-weight: 400;
	text-transform: uppercase;
	padding-bottom: 32px;
	border-bottom: 2px solid #fff;
	margin: 0 0 40px;
}
</style>

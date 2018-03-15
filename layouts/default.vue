<template>
	<BackgroundImg>
		<div class="flex-container">
			<Navigation class="navigation" />
			<nuxt class="content" />
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
}
</style>

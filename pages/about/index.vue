<template>
	<div>
		<div class="headshot">
		</div>

		<p class="text">
			Sam thrives in a creative environment and is always eager to be tasked with new challenges. He possesses strong communication and project planning skills. He is a highly	motivated individual and works well in a team based environments. Sam is also an adventurous outdoorsman. He enjoys camping, physical training, mountain biking and shooting for sport.
		</p>

		<p class="text">
			Sam thrives in a creative environment and is always eager to be tasked with new challenges. He possesses strong communication and project planning skills. He is a highly motivated individual and works well in a team based environments. Sam is also an adventurous outdoorsman. He enjoys camping, physical training, mountain biking and shooting for sport.
		</p>
	</div>
</template>

<script>
export default {
	head: {
		title: "About Me"
	}
};
</script>

<style lang="scss" scoped>
.headshot {
	background-image: url("~/images/sam.png");
	background-size: cover;
	margin: 0 32px 10px 0;
	height: 143px;
	width: 143px;
	float: left;
}

.text {
	max-width: 696px;
	width: 80%;
}
</style>

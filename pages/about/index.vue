<template>
	<div class="container">
		<h1 class="title">
			About Me
		</h1>

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
.container {
	padding-top: 64px;
}

.headshot {
	background-image: url("~/images/sam.png");
	background-size: cover;
	margin: 0 32px 10px 0;
	height: 143px;
	width: 143px;
	float: left;
}

.title {
	font-weight: 400;
	text-transform: uppercase;
	padding-bottom: 32px;
	border-bottom: 2px solid #fff;
	margin: 0 0 40px;
}

.text {
	max-width: 696px;
	width: 80%;
}
</style>

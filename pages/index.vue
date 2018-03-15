<template>
	<div class="container">
		<div class="content">

			<div class="headshot">
			</div>

			<h1 class="title">
				<div>
					Welcome to the
				</div>

				<div>
					Portfolio of Sam Nevarez
				</div>
			</h1>

			<router-link to="about" class="about_link">
				Enter Portfolio
			</router-link>

		</div>
	</div>
</template>


<script>
export default {
	layout: "home",
	head: {
		title: "Home"
	}
};
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}

.content {
	padding: 0 15px;
	text-align: center;
	text-transform: uppercase;
}

.headshot {
	background-image: url("~/images/sam.png");
	background-size: cover;
	margin: 0 auto 46px;
	height: 210px;
	width: 210px;
}

.title {
	margin: 0 0 30px;
	font-size: 32px;
	font-weight: 400;
}

.about_link {
	font-size: 24px;
	color: $blue;
	font-weight: 700;
}
</style>

<style lang="scss">

</style>

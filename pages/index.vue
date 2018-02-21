<template>
	<div>
		<div class="background-image">
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

					<router-link to="about">
						Enter Portfolio
					</router-link>

				</div>
			</div>
		</div>
	</div>
</template>


<script>
import axios from 'axios';

export default {
	// asyncData(context) {
	// 	return axios.get(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/entries?access_token=${process.env.CONTENTFUL_KEY}`)
	// 	.then(resp => {
	// 		return {
	// 			blogPosts: resp.data.items,
	// 		}
	// 	});
	// },

	data: function() {
		return {}
	}
}
</script>

<style lang="scss" scoped>

	.background-image {
		background-image: url('~/images/blue-background.png');
		position: absolute;
		z-index: -1;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
	}

	.container {
		align-self: center;
		padding: 0 15px;
	}

	.content {
		text-align: center;
		text-transform: uppercase;
	}

	.headshot {
		background-image: url('~/images/sam.png');
		background-size: cover;
		margin: 0 auto 46px;
		height: 210px;
		width: 210px;
	}

	.title {
		margin: 0 0 30px;
		font-size: 32px;
		color: $blue;
	}

</style>


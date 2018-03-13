<template>
	<div>
		Hello!
		<div v-html="blogPosts">
		</div>
	</div>
</template>

<script>
import axios from "axios";
import marked from "marked";

export default {
	data: () => {
		return {
			blogPosts: ""
		};
	},
	asyncData(context) {
		return axios
			.get(
				`https://cdn.contentful.com/spaces/${
					process.env.CONTENTFUL_SPACE
				}/entries?access_token=${process.env.CONTENTFUL_KEY}`
			)
			.then(resp => {
				console.log(resp.data.items);
				return {
					blogPosts: marked(resp.data.items[1].fields.postContent)
				};
			});
	}
};
</script>

<style lang="scss" scoped>

</style>

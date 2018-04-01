<template>
	<div>
		<h2 v-for="category in categories" :key="category">
			{{ category }}
		</h2>
	</div>
</template>

<script>
import { createClient } from "contentful";
const client = createClient({
	space: process.env.CONTENTFUL_SPACE,
	accessToken: process.env.CONTENTFUL_KEY
});

export default {
	head: {
		title: "Portfolio"
	},
	pageTitle: "Portfolio",
	asyncData(context) {
		return client
			.getEntries({
				content_type: "category"
			})
			.then(function(response) {
				const categories = response.items.map(
					entry => entry.fields.categoryName
				);

				// This code block checks whether or not each category has entries
				return Promise.all(
					categories.map(category => {
						return new Promise(resolve => {
							client
								.getEntries({
									content_type: "portfolioPiece",
									"fields.category.sys.contentType.sys.id": "category",
									"fields.category.fields.categoryName[match]": category
								})
								.then(entries => {
									if (entries.total) {
										resolve(category);
									}
									resolve(false);
								});
						});
					})
				);
			})
			.then(categories => {
				return {
					categories: categories.filter(category => category)
				};
			});
	}
};
</script>

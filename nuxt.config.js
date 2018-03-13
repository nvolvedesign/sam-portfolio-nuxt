const resolve = require("path").resolve;

module.exports = {
	css: ["normalize.css", { src: "@/assets/styles/main.scss", lang: "scss" }],
	modules: [
		// Simple usage
		"@nuxtjs/dotenv",
		[
			"nuxt-sass-resources-loader",
			resolve(__dirname, "assets/styles/main.scss")
		]
	],
	generate: {
		fallback: true // if you want to use '404.html'
	},
	head: {
		title: "Sam Nevarez - Portfolio",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" }
		],
		link: [
			{
				rel: "stylesheet",
				href:
					"https://fonts.googleapis.com/css?family=Lato:400,700|Roboto+Mono:400,700"
			}
		]
	},
	loading: false
};
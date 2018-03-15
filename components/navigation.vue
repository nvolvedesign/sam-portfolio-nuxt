<template>
	<div class="container">
		<nav>
			<ul class="list">
				<nuxt-link v-for="item in navItems" :key="item.text" tag="li" :to="item.link" class="list-item">
					<Bullet class="bullet" /> <span class="list-item-text"> {{ item.text }} </span>
				</nuxt-link>
			</ul>
		</nav>
	</div>
</template>

<script>
import Bullet from "~/static/images/bullet.svg";

export default {
	components: {
		Bullet
	},
	data() {
		return {
			navItems: [
				{
					text: "Home",
					link: "/"
				},
				{
					text: "About Me",
					link: "/about"
				},
				{
					text: "Portfolio",
					link: "/portfolio"
				},
				{
					text: "Resume",
					link: "/resume.pdf"
				},
				{
					text: "My Music",
					link: "/music"
				},
				{
					text: "Blog",
					link: "/blog"
				},
				{
					text: "Contact Me",
					link: "/contact"
				},
				{
					text: "Social Med",
					link: "/social"
				}
			]
		};
	}
};
</script>


<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
}

.list {
	list-style: none;
}

.list-item {
	color: #ccc;
	cursor: pointer;
	margin-bottom: 22px;
	display: flex;
	align-items: center;
}

.bullet {
	height: 9px;
	width: 9px;
	margin-right: 22px;
}

.list-item-text {
	text-transform: uppercase;
}
</style>

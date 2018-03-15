<template>
	<div class="navigation__container">
		<!-- The Elements in this component use a BEM naming convention (instead of scoped SCSS) to allow for the bullet color to change when active -->
		<nav>
			<ul class="navigation__list">
				<nuxt-link
					v-for="item in navItems"
					:key="item.text"
					tag="li"
					:to="item.link"
					class="navigation__list-item"
					exact-active-class="navigation__active"
				>
					<Bullet class="navigation__bullet" /> <span class="navigation__list-item-text"> {{ item.text }} </span>
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

<style lang="scss">
.navigation__container {
	display: flex;
	justify-content: center;
	padding-top: 137px;
}

.navigation__list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.navigation__list-item {
	color: #ccc;
	cursor: pointer;
	margin-bottom: 22px;
	display: flex;
	align-items: center;

	&.navigation__active,
	&:hover {
		.navigation__list-item-text {
			color: $blue;
			text-decoration: underline;
		}

		.navigation__bullet {
			transform: scale(1.5);
			// box-shadow: rgba(255, 255, 255, 0.6) 0 0 5px 2px;

			#bulletPath {
				fill: #fff !important;
			}
		}
	}
}

.navigation__bullet {
	height: 9px;
	width: 9px;
	margin-right: 22px;
	transform: scale(1);
	transition: transform 0.2s;
	// border-radius: 50%;
}

.navigation__list-item-text {
	text-transform: uppercase;
	font-size: 20/16 * 1rem;
	transition: color 0.2s;
}
</style>

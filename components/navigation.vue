<template>
    <div class="container">
        <nav>
            <nuxt-link v-for="item in navItems" :key="item.text" :to="item.link" class="list-item" :active-class="item.activeClass || 'active'" exact-active-class="active" :target="item.target || '_self'">
                <Bullet class="bullet" />
                <span class="list-item-text"> {{ item.text }} </span>
            </nuxt-link>
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
          link: "/",
          activeClass: " "
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
          link: "/resume.pdf",
          target: "_blank"
        },
        {
          text: "My Music",
          link: "/music"
        },
        // {
        // 	text: "Blog",
        // 	link: "/blog"
        // },
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
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  background-color: red;
  padding: 24px;
  //   width: 100%;
  transform: translateX(-100%);
  transition: transform 200ms ease-in-out;

  @include bp("md") {
    position: static;
    padding-top: 137px;
    min-height: none;
    transform: translateX(0);
  }

  &.opened {
    transform: translateX(0);
  }
}

.list-item {
  color: #ccc;
  cursor: pointer;
  margin-bottom: 22px;
  display: flex;
  align-items: center;

  &.active,
  &:hover {
    .list-item-text {
      color: $blue;
      border-bottom: 1px solid;
    }

    .bullet {
      transform: scale(1.5);
      // box-shadow: rgba(255, 255, 255, 0.6) 0 0 5px 2px;

      #bulletPath {
        fill: #fff !important;
      }
    }
  }
}

.bullet {
  height: 9px;
  width: 9px;
  margin-right: 22px;
  transform: scale(1);
  transition: transform 0.2s ease;
  // border-radius: 50%;
  -webkit-transform: translate3d(
    0,
    0,
    0
  ); //Fixes Safari Flicker Bug https://stackoverflow.com/questions/3461441/prevent-flicker-on-webkit-transition-of-webkit-transform/8948115
}
.list-item-text {
  text-transform: uppercase;
  font-size: 1.25rem;
  transition: color 0.2s;
  border-bottom: 1px solid transparent;
  font-weight: 700;
}
</style>

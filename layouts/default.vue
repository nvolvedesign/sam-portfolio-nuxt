<template>
  <BackgroundImg>
    <div class="flex-container" :class="{'menu-open': $store.state.mobileMenuOpen}">
      <Navigation class="navigation" />
      <div class="body-container">
        <div class="title-container">
          <button class="hamburger hamburger--spring" type="button" aria-label="Menu" aria-controls="navigation" @click="$store.commit('toggleMobileMenu')" :class="{'is-active': $store.state.mobileMenuOpen}">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>

          <h1 class="title">
            {{ $store.state.pageTitle }}
          </h1>
        </div>
        <div class="content">
          <nuxt />
        </div>
      </div>
    </div>
  </BackgroundImg>
</template>

<script>
import Navigation from "../components/navigation";
import BackgroundImg from "../components/background-image";

export default {
  components: {
    Navigation,
    BackgroundImg
  },
  head() {
    return {
      bodyAttrs: {
        style: this.$store.state.mobileMenuOpen ? "overflow:hidden" : ""
      }
    };
  }
};
</script>


<style lang="scss" scoped>
.flex-container {
  position: relative;
  transition: transform 200ms ease-in-out;

  @include bp("md") {
    display: flex;
  }

  &.menu-open {
    transform: translateX(207px);

    @include bp("md") {
      transform: none;
    }
  }
}

.navigation {
  flex: 1;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-207px);

  @include bp("md") {
    position: static;
    transform: none;
  }
}

.body-container {
  flex: 3;
  padding: 24px 0 0;

  @include bp("md") {
    padding: 64px 0 0;
  }
}

.title-container {
  padding: 0 16px 24px;
  border-bottom: 2px solid #fff;
  margin: 0 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include bp("md") {
    padding: 0 0 32px;
    display: block;
  }
}

.hamburger {
  @include bp("md") {
    display: none;
  }
}

.title {
  font-weight: 400;
  text-transform: uppercase;
  text-align: right;
  margin: 0;

  @include bp("md") {
    text-align: left;
  }
}

.content {
  padding: 0 16px 32px;

  @include bp("md") {
    max-width: 696px;
    width: 80%;
  }
}
</style>

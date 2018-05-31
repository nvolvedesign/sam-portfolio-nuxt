<template>
    <BackgroundImg>
        <div class="flex-container">
            <Navigation class="navigation" />
            <div class="content-container">
                <h1 class="title">
                    {{ $store.state.pageTitle }}
                </h1>
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
  }
};
</script>


<style lang="scss" scoped>
.flex-container {
  position: relative;

  @include bp("md") {
    display: flex;
  }
}

.navigation {
  flex: 1;
}

.content-container {
  flex: 3;
  padding: 24px 0 0;

  @include bp("md") {
    padding: 64px 0 0;
  }
}

.title {
  font-weight: 400;
  text-transform: uppercase;
  padding: 0 0 24px 16px;
  border-bottom: 2px solid #fff;
  margin: 0 0 40px;

  @include bp("md") {
    padding: 0 0 32px;
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

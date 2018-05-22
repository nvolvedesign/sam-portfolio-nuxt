<template>
    <div class="background-image">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.background-image {
  background-image: url("~/images/blue-background.png");
  background-size: cover;
  background-position: 50% 50%;
  height: 100%;
  min-height: 100vh;
  z-index: -1;
}
</style>

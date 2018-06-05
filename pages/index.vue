<template>
  <div class="container">
    <div class="content">

      <transition appear appear-class="fade-appear-down" appear-active-class="fade-appear-active">
        <div class="headshot">
        </div>
      </transition>

      <transition appear appear-class="fade-appear-up" appear-active-class="fade-appear-active">
        <div>
          <h1 class="title">
            <div>
              Welcome to the
            </div>

            <div>
              Portfolio of Sam Nevarez
            </div>
          </h1>

          <router-link to="about" class="enter_link">
            Enter Portfolio
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
export default {
  layout: "home",
  head: {
    title: "Home"
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
}

.content {
  padding: 0 15px;
  text-align: center;
  text-transform: uppercase;
}

.headshot {
  background-image: url("~/images/sam.png");
  background-size: cover;
  margin: 0 auto 51px;
  height: 210px;
  width: 210px;
}

.title {
  margin: 0 0 30px;
  font-size: 2rem;
  font-weight: 400;
}

.enter_link {
  font-size: 1.5rem;
  color: $blue;
  font-weight: 700;
  text-decoration: underline;
}
</style>

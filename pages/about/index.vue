<template>
    <div>
        <div class="headshot">
        </div>

        <p>
            I am Sam, a UX Designer from San Diego. I thrive in a creative environment and I am always eager to be tasked with new challenges. I possess strong communication and project planning skills and I am a highly motivated individual that works well in a team based environment. As a designer, I’ve worked closely with animal rescues, addiction treatment centers, first responders, military serviceman and veterans with marketing needs.
        </p>

        <p>
            A few things about me: I love the outdoors and I enjoy camping, physical training, mountain biking and shooting for sport. From time to time, I like to experience the existential pleasures of eating tacos.
        </p>
    </div>
</template>

<script>
export default {
  head: {
    title: "About Me"
  },
  created: function() {
    return this.$store.commit("setPageTitle", "About Me");
  }
};
</script>

<style lang="scss" scoped>
.headshot {
  background-image: url("~/images/sam.png");
  background-size: cover;
  margin: 0 32px 10px 0;
  height: 143px;
  width: 143px;
  float: left;
}
</style>

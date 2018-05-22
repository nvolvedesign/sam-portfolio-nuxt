<template>
    <div>
        <iframe width="100%" height="600" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3163283&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    </div>
</template>

<script>
export default {
  created: function() {
    return this.$store.commit("setPageTitle", "Music");
  },
  head: {
    title: "Music"
  }
};
</script>
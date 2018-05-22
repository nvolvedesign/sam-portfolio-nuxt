<template>
    <div>
        My social media links
    </div>
</template>

<script>
export default {
  created: function() {
    return this.$store.commit("setPageTitle", "Social Media");
  },
  head: {
    title: "Portfolio"
  }
};
</script>
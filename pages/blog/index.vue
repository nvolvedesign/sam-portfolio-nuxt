<template>
    <div>
        The blog
    </div>
</template>

<script>
export default {
  created: function() {
    return this.$store.commit("setPageTitle", "Blog");
  }
};
</script>

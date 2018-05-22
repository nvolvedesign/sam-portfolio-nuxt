<template>
    <div>
        Contact me at
        <a href="mailto:snevarez89@gmail.com">snevarez89@gmail.com</a>.
    </div>
</template>

<script>
export default {
  created: function() {
    return this.$store.commit("setPageTitle", "Contact");
  },
  head: {
    title: "Contact"
  }
};
</script>
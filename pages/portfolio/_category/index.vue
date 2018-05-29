<template>
    <div>
        <nuxt-link v-for="piece in portfolioPieces" :key="piece.fields.slug" :to="`/portfolio/${$route.params.category}/${piece.fields.slug}`" class="link">
            <h2 class="title">
                {{ piece.fields.title }}
            </h2>
        </nuxt-link>
    </div>

</template>


<script>
import allPortfolioPieces from "~/assets/contentful.json";

export default {
  async asyncData({ params, error, payload }) {
    const categoryPieces = allPortfolioPieces.filter(
      piece => piece.fields.category.fields.slug === params.category
    );

    return {
      portfolioPieces: categoryPieces,
      title: categoryPieces[0].fields.category.fields.name
    };
  },
  created() {
    return this.$store.commit("setPageTitle", this.title);
  },
  head() {
    return { title: this.title };
  }
};
</script>

<template>
    <div v-html="body">
    </div>
</template>


<script>
import marked from "marked";
import allPortfolioPieces from "~/assets/contentful.json";

export default {
  async asyncData({ params, error, payload }) {
    const categoryPiece = allPortfolioPieces.filter(
      piece => piece.fields.slug === params.piece
    );

    return {
      body: marked(categoryPiece[0].fields.body),
      title: categoryPiece[0].fields.title
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

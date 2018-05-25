<template>
    <div v-html="body">
    </div>
</template>


<script>
import marked from "marked";
import { createClient } from "contentful";
const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_KEY
});

export default {
  async asyncData({ params, error, payload }) {
    if (payload) return { body: marked(payload) };

    const piece = await contentful.getEntries({
      content_type: "portfolioPiece",
      "fields.slug": params.piece
    });

    return {
      body: marked(piece.items[0].fields.body),
      title: piece.items[0].fields.title
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

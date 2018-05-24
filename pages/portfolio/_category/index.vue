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
import { createClient } from "contentful";
const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_KEY
});

export default {
  fetch({ store, params }) {
    return contentful
      .getEntries({
        "fields.slug": params.category,
        content_type: "category"
      })
      .then(res => store.commit("setPageTitle", res.items[0].fields.name));
  },
  asyncData({ params }) {
    return contentful
      .getEntries({
        content_type: "category",
        "fields.slug": params.category
      })
      .then(resp => {
        const categoryId = resp.items[0].sys.id;

        return contentful
          .getEntries({
            content_type: "portfolioPiece",
            "fields.category.sys.id": categoryId
          })
          .then(resp => {
            return {
              portfolioPieces: resp.items
            };
          });
      });
  },
  head() {
    return { title: this.$store.state.pageTitle };
  }
};
</script>

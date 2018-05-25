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
  async asyncData({ params, error, payload }) {
    if (payload) return { portfolioPieces: payload };

    const categoryData = await contentful.getEntries({
      content_type: "category",
      "fields.slug": params.category
    });

    const portfolioPieces = await contentful.getEntries({
      content_type: "portfolioPiece",
      "fields.category.sys.id": categoryData.items[0].sys.id
    });

    return {
      portfolioPieces: portfolioPieces.items,
      title: categoryData.items[0].fields.name
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

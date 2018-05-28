<template>
    <div class="container">
        <nuxt-link v-for="category in categories" :key="category.slug" :to="`/portfolio/${category.slug}`" class="link">
            <h2 class="title">
                {{ category.name }}
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
  head: {
    title: "Portfolio"
  },
  created: function() {
    return this.$store.commit("setPageTitle", "Portfolio");
  },
  async asyncData() {
    const portfolioPieces = await contentful.getEntries({
      content_type: "portfolioPiece"
    });

    let categoriesData = {};
    portfolioPieces.items.forEach(piece => {
      const categorySlug = piece.fields.category.fields.slug;
      const categoryName = piece.fields.category.fields.name;
      categoriesData[categorySlug] = categoryName;
    });

    const categories = Object.keys(categoriesData).map(category => {
      return {
        slug: category,
        name: categoriesData[category]
      };
    });

    return {
      categories
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}

.link {
  background-color: $blue;
  color: white;
  margin: 8px;
  flex: 1;
  max-width: 221px;
  min-width: 31%;
  text-align: center;
  padding: 16px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: darken($blue, 10%);
  }
}

.title {
  font-weight: 400;
  text-transform: uppercase;
}
</style>

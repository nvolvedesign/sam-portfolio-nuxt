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
  asyncData() {
    return contentful
      .getEntries({
        content_type: "category"
      })
      .then(function(response) {
        const categories = response.items.map(entry => {
          return entry.fields;
        });

        // This code block checks whether or not each category has entries
        return Promise.all(
          categories.map(category => {
            return new Promise(resolve => {
              contentful
                .getEntries({
                  content_type: "portfolioPiece",
                  "fields.category.sys.contentType.sys.id": "category",
                  "fields.category.fields.name": category.name
                })
                .then(entries => {
                  if (entries.total) {
                    resolve(category);
                  }
                  resolve(false);
                });
            });
          })
        );
      })
      .then(categories => {
        return {
          categories: categories.filter(category => category)
        };
      });
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

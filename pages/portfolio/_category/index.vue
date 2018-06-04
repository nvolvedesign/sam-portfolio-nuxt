<template>
  <div>
    <nuxt-link v-for="piece in portfolioPieces" :key="piece.fields.slug" :to="`/portfolio/${$route.params.category}/${piece.fields.slug}`" class="link">
      <h2 class="title">
        {{ piece.fields.title }}
      </h2>
      <div class="excerpt-container">
        <p class="excerpt">
          {{ piece.fields.excerpt }}
        </p>

        <div class="read-more">
          Read More
        </div>
      </div>
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

<style lang="scss" scoped>
.link {
  color: #fff;
  display: block;

  @include bp("md") {
    display: flex;
  }
}

.title {
  font-size: 20px;
  font-weight: 300;
  margin: 0;
  background-color: $blue;
  padding: 16px;
  text-transform: uppercase;

  @include bp("md") {
    flex: 0.333333;
  }
}

.excerpt-container {
  background-color: rgba(0, 42, 92, 0.8);
  font-size: 18px;
  font-family: $latoFont;
  padding: 16px 16px;

  @include bp("md") {
    flex: 0.666666;
  }
}

.excerpt {
  margin: 0 0 40px;
  font-size: inherit;
  line-height: 24px;
  text-align: justify;
}

.read-more {
  color: $blue;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: right;
}
</style>

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
  fetch({ store, params }) {
    return contentful
      .getEntries({
        "fields.slug": params.piece,
        content_type: "portfolioPiece"
      })
      .then(res => store.commit("setPageTitle", res.items[0].fields.title));
  },
  asyncData({ params, error, payload }) {
    if (payload) return { body: marked(payload) };

    return contentful
      .getEntries({
        content_type: "portfolioPiece",
        "fields.slug": params.piece
      })
      .then(resp => {
        return {
          body: marked(resp.items[0].fields.body)
        };
      });
  },
  head() {
    return { title: this.$store.state.pageTitle };
  }
};
</script>

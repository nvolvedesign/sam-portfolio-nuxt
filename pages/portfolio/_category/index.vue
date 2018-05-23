<template>
    <div>
        <h1>
            {{ $route.params.category }} {{ $store.state.pageTitle }}
        </h1>
    </div>

</template>


<script>
import { createClient } from "contentful";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_KEY
});

export default {
  head: {
    title: "Portfolio"
  },
  fetch({ store, params }) {
    return client
      .getEntries({
        "fields.slug": params.category,
        content_type: "category"
      })
      .then(res => store.commit("setPageTitle", res.items[0].fields.name));
  }
};
</script>

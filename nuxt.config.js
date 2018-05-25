require("dotenv").config();
const createClient = require("contentful").createClient;
const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_KEY
});

module.exports = {
  css: ["normalize.css", "~/assets/styles/styles.scss"],
  modules: [
    // Simple usage
    "@nuxtjs/dotenv",
    ["nuxt-sass-resources-loader", "./assets/styles/sass.scss"]
  ],
  generate: {
    fallback: true // if you want to use '404.html'
  },
  head: {
    titleTemplate: "%s - Sam Nevarez",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700|Roboto+Mono:400,700"
      }
    ]
  },
  loading: false,
  build: {
    extend(config) {
      const urlLoader = config.module.rules.find(
        rule => rule.loader === "url-loader"
      );
      urlLoader.test = /\.(png|jpe?g|gif)$/;

      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader",
        options: {
          svgo: {
            plugins: [{ cleanupIDs: false }]
          }
        }
      });
    }
  },
  generate: {
    routes: () => {
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
                    "fields.category.fields.name[match]": category.name
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
          const filteredCategories = categories.filter(category => category);
          return filteredCategories.map(category => {
            return {
              route: `/portfolio/${category.slug}`,
              payload: category
            };
          });
        });
    }
  }
};

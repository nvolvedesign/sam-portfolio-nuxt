require("dotenv").config();
const createClient = require("contentful").createClient;
const allPortfolioPieces = require("../assets/contentful.json");
const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_KEY
});

module.exports = async () => {
  // Variable, function declarations
  const routes = [];
  const categories = [];
  const aggregateCategories = categorySlug => {
    if (!categories.includes(categorySlug)) {
      categories.push(categorySlug);
    }
  };

  // Start route generation
  allPortfolioPieces.forEach(piece => {
    const categorySlug = piece.fields.category.fields.slug;
    const pieceSlug = piece.fields.slug;
    aggregateCategories(categorySlug);

    routes.push(`/portfolio/${categorySlug}/${pieceSlug}`);
  });

  categories.forEach(category => {
    routes.push(`/portfolio/${category}`);
  });

  return routes;
};

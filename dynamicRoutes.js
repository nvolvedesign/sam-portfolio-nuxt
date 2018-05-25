require("dotenv").config();
const createClient = require("contentful").createClient;
const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_KEY
});

module.exports = async () => {
  const categoriesData = {};
  const categoriesRoutes = [];

  const portfolioPieces = await contentful.getEntries({
    content_type: "portfolioPiece"
  });

  const piecesRoutes = portfolioPieces.items.map(piece => {
    const categorySlug = piece.fields.category.fields.slug;
    const pieceSlug = piece.fields.slug;

    if (!categoriesData.hasOwnProperty(categorySlug)) {
      categoriesData[categorySlug] = [];
    }
    categoriesData[categorySlug].push(piece);

    return {
      route: `/portfolio/${categorySlug}/${pieceSlug}`,
      payload: piece.fields.body
    };
  });

  for (const category in categoriesData) {
    categoriesRoutes.push({
      route: `/portfolio/${category}`,
      payload: categoriesData[category]
    });
  }
  return [...piecesRoutes, ...categoriesRoutes];
};

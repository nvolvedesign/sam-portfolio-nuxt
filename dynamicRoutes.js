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

  const addCategoryData = (categoryInfo, piece) => {
    if (!categoriesData.hasOwnProperty(categoryInfo.slug)) {
      categoriesData[categoryInfo.slug] = {
        title: categoryInfo.title,
        pieces: []
      };
    }
    categoriesData[categoryInfo.slug].pieces.push(piece);
  };

  const piecesRoutes = portfolioPieces.items.map(piece => {
    const categoryInfo = piece.fields.category.fields;
    const pieceSlug = piece.fields.slug;

    addCategoryData(categoryInfo, piece);

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

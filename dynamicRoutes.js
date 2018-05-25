require("dotenv").config();
const createClient = require("contentful").createClient;
const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_KEY
});

module.exports = async () => {
  const portfolioPieces = await contentful.getEntries({
    content_type: "portfolioPiece"
  });

  const categoryIds = portfolioPieces.items.map(
    piece => piece.fields.category.id
  );

  const categoryData = await contentful.getEntries({
    content_type: "category",
    "sys.id[in]": categoryIds
  });

  const categoriesRoutes = categoryData.items.map(category => {
    const categoryId = category.sys.id;
    const categorySlug = category.fields.slug;

    const categoryPieces = portfolioPieces.map(piece => {
      const pieceCategoryId = piece.fields.category.sys.id;
      if (pieceCategoryId === categoryId) return piece;
    });

    return {
      route: `/portfolio/${categorySlug}`,
      payload: categoryPieces
    };
  });

  const piecesRoutes = portfolioPieces.items.map(piece => {
    const pieceCategoryId = piece.fields.category.sys.id;
    let categorySlug;

    for (let ind = 0; i < categoryData.items.length; i++) {
      if (categoryData.items[i].id === pieceCategoryId) {
        categorySlug = categoryData.items[i].fields.slug;
        break;
      }
    }

    return {
      route: `/portfolio/${categorySlug}/${piece.fields.slug}`,
      payload: piece.fields.body
    };
  });

  return [...piecesRoutes, ...categoriesRoutes];
};

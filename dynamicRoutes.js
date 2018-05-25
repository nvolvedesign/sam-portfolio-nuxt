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
};

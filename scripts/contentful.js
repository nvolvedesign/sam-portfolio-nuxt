require("dotenv").config();
const fs = require("fs");
const { resolve } = require("path");
const createClient = require("contentful").createClient;
const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_KEY
});

(async () => {
  const portfolioPieces = await contentful.getEntries({
    content_type: "portfolioPiece"
  });

  fs.writeFileSync(
    resolve(__dirname, "../assets/contentful.json"),
    JSON.stringify(portfolioPieces.items)
  );
})();

const { getProducts } = require("./utils/products");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());

app.get("/products", async (req, res) => {
  const { filter } = req.query;
  const products = await getProducts();

  /** START
   * Tu código empieza aca!
   */



  /**
   * END
   */

  res.send(products);
});

app.listen(8000, () => {
  console.log("Listen on port 8000");
});

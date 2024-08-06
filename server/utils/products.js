const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const { products } = await res.json();

  return products.map((product) => {
    const { reviews, meta, dimensions, ...simple_product } = product;
    return simple_product;
  });
};

module.exports = { getProducts };

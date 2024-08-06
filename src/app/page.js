"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Range from "./components/Range";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [weight, setWeight] = useState(10);

  const setValue = async (weight) => {
    await getProducts(weight);
    setWeight(weight);
  }

  const getProducts = async (weight) => {
    const { data } = await axios.get(`http://localhost:8000/products?filter[where][lt]=${weight}`);

    setProducts(data);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      await getProducts(weight);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-3">
          <Range value={weight} setValue={setValue} />
          {products &&
            products.map((product) => (
              <div key={product.id} className="col-md-3 mt-3">
                <Card product={product} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;

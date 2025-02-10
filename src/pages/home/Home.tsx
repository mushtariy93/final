import React from "react";
import Products from "../../components/products/Products";
import Hero from "./Hero";
import { useGetProductsQuery } from "../../redux/api/product-api";

const Home = () => {
  const { data } = useGetProductsQuery({limit:8});
  console.log(data);
  

  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
};

export default React.memo(Home);

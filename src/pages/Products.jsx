import React from "react";
import ProductCard from "../components/ProductCard";
import data from "../data";

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          id={product.id}
        />
      ))}
    </div>
  );
};
export default Products;

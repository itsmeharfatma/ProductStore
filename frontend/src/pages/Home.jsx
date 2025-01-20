import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";

const Home = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("Products", products);

  return (
    <div className="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-8 items-center justify-items-center">
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </>
      ) : (
        <>
          <h3 className="text-gray-100">No Products Found..!</h3>
          <Link to={"/create"} className="hover:underline">
            Create New Product
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;

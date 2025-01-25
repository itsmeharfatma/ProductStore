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
    <div>
      {products.length > 0 ? (
        <div className="container mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-8 items-center justify-items-center">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-10 mt-24">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              No Products Found..!
            </h3>
            <Link
              to={"/create"}
              className="text-2xl font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-gray-400 hover:underline"
            >
              Create New Product
              <i class="fas fa-arrow-up-right-from-square fa-2xs ml-2"></i>
            </Link>
          </div>
          <img
            src="/product-not-found.png"
            alt="No Products Found"
            className="h-60 md:h-96"
          />
        </div>
      )}
    </div>
  );
};

export default Home;

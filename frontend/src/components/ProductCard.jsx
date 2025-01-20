import React, { useState } from "react";
import { useProductStore } from "../store/product";
import UpdateModal from "./UpdateModal";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
  };

  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="rounded-lg overflow-hidden shadow-md bg-gray-50 w-80 h-fit border border-gray-300">
        <img
          src={product.image}
          alt={`${product.name} Image`}
          className="w-full h-36 object-cover"
        />
        <div className="px-6 py-4">
          <h3 className="font-bold text-purple-500 text-xl mb-2">
            {product.name}
          </h3>
          <p className="font-bold text-purple-500 text-xl mb-2">
            ₹{product.price}
          </p>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => handleModal()}
              className="text-gray-900 bg-slate-200 px-3 py-1 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="text-gray-900 bg-slate-200 px-3 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;

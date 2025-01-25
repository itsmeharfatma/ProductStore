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
      <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100 w-80 h-fit border border-gray-300 dark:border-gray-900">
        <img
          src={product.image}
          alt={`${product.name} Image`}
          className="w-full h-36 object-cover"
        />
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-1">
            {product.name}
          </h3>
          <p className="font-semibold text-lg mb-3">
            ₹{product.price}.00
          </p>
          <div className="flex flex-row gap-2">
            <button
              onClick={() => handleModal()}
              className="text-blue-700 bg-slate-200 px-2.5 py-1.5 rounded"
            >
              <i class="fas fa-pen-to-square"></i>
            </button>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="text-red-600 bg-slate-200 px-2.5 py-1.5 rounded"
            >
              <i class="fas fa-trash-can"></i>
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

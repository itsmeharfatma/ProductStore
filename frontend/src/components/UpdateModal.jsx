import React, { useState } from "react";
import { useProductStore } from "../store/product";

const UpdateModal = ({ isOpen, onClose, product }) => {
  const { updateProduct } = useProductStore();
  const [seletedProduct, setSelectedProduct] = useState(product);

  const handleUpdateProduct = async (productId, updatedProduct) => {
    await updateProduct(productId, updatedProduct);
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 w-full min-h-screen flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-[#1e2227] rounded-2xl px-6 pt-6 pb-5 w-[70%] lg:w-[50%] shadow-lg">
          <h2 className="text-center font-bold text-3xl">Update Product</h2>
          <form className="flex flex-col gap-6 mt-6">
            <div className="flex flex-col gap-1.5">
              <label className="font-medium">Product Name</label>
              <input
                value={seletedProduct.name}
                onChange={(e) =>
                  setSelectedProduct({
                    ...seletedProduct,
                    name: e.target.value,
                  })
                }
                type="text"
                name="name"
                className="py-1 px-3 rounded-md bg-gray-700 placeholder:text-gray-300"
                placeholder="Headphone"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-medium">Price</label>
              <input
                value={seletedProduct.price}
                onChange={(e) =>
                  setSelectedProduct({
                    ...seletedProduct,
                    price: e.target.value,
                  })
                }
                name="price"
                className="py-1 px-3 rounded-md bg-gray-700 placeholder:text-gray-300"
                placeholder="₹99.00"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-medium">Image URL</label>
              <input
                value={seletedProduct.image}
                onChange={(e) =>
                  setSelectedProduct({
                    ...seletedProduct,
                    image: e.target.value,
                  })
                }
                name="image"
                className="py-1 px-3 rounded-md bg-gray-700 placeholder:text-gray-300"
                placeholder="https://example.com"
              />
            </div>
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="w-fit py-1 px-6 rounded-md bg-white text-gray-900 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleUpdateProduct(seletedProduct._id, seletedProduct);
                }}
                className="w-fit py-1 px-6 rounded-md bg-white text-gray-900 font-semibold"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default React.memo(UpdateModal);

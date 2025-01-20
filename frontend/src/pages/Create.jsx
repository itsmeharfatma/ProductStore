import React, { useState } from "react";
import { useProductStore } from "../store/product";

const Create = () => {
  const { createProduct } = useProductStore();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const nameHandler = (e) => {
    setNewProduct({ ...newProduct, name: e.target.value });
  };

  const priceHandler = (e) => {
    setNewProduct({ ...newProduct, price: e.target.value });
  };

  const imgHandler = (e) => {
    setNewProduct({ ...newProduct, image: e.target.value });
  };

  const addProductHandler = async (e) => {
    e.preventDefault();
    const { success, message } = await createProduct(newProduct);
    console.log("Success:", success);
    console.log("Message:", message);
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <div className="mx-auto mt-24 w-full max-w-2xl p-10 shadow-xl rounded-xl border border-gray-500">
      <h2 className="text-center font-bold text-3xl">Create New Product</h2>
      <form className="flex flex-col gap-6 mt-6">
        <div className="flex flex-col gap-1.5">
          <label className="font-medium">Product Name</label>
          <input
            value={newProduct.name}
            onChange={nameHandler}
            type="text"
            name="name"
            className="py-1 px-3 rounded-md bg-gray-700 placeholder:text-gray-300"
            placeholder="Headphone"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-medium">Price</label>
          <input
            value={newProduct.price}
            onChange={priceHandler}
            name="price"
            className="py-1 px-3 rounded-md bg-gray-700 placeholder:text-gray-300"
            placeholder="₹99.00"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-medium">Image URL</label>
          <input
            value={newProduct.image}
            onChange={imgHandler}
            name="image"
            className="py-1 px-3 rounded-md bg-gray-700 placeholder:text-gray-300"
            placeholder="https://example.com"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={addProductHandler}
            className="w-fit py-1 px-10 rounded-md bg-white text-gray-900 font-semibold"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;

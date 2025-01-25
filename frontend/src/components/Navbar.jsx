import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container mx-auto px-6 py-8 flex flex-row justify-between">
      <div>
        <Link className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100" to="/">
          ProductStore
        </Link>
      </div>
      <nav>
        <div className="flex flex-row space-x-3 md:space-x-4">
          <Link to="/create">
            <button className="w-10 md:w-14 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-500 dark:text-gray-100 p-2 md:py-3 md:px-4 rounded-md">
              <i className="far fa-square-plus fa-lg"></i>
            </button>
          </Link>
          <button
            onClick={darkModeHandler}
            className="w-10 md:w-14 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-500 dark:text-gray-100 p-2 md:py-3 md:px-4 rounded-md"
          >
            {darkMode ? (
              <i className="far fa-sun md:fa-lg"></i>
            ) : (
              <i className="fas fa-moon md:fa-lg"></i>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

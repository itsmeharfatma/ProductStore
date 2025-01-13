import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="h-screen bg-white dark:text-gray-100 dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </main>
  );
};

export default App;

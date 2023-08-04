import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./assets/Home";
import Shop from "./assets/Shop";
import Collection from "./assets/Collection";
import Blogs from "./assets/Blogs";
import Contact from "./assets/Contact";
import SingleProduct from "./assets/SingleProduct";
import TopNav from "./assets/Components/TopNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/singleproductpage/:id" element={<SingleProduct />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

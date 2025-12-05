import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Cart from "./Cart.jsx";
import Toggler from "./Toggler.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toggler>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Toggler>
  </StrictMode>
);

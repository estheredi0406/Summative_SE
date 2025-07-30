import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/user/LandingPage";
import Shop from "./pages/user/Shop";
import CartPage from "./pages/user/CartPage";
import CheckoutPage from "./pages/user/CheckoutPage";
import Login from "../src/pages/user/LoginPage";
import Signup from "../src/pages/user/Signup";
import AboutUs from "../src/pages/user/AboutUs";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;

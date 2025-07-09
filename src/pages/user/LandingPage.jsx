import { useState } from "react";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";

function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <ProductList />
      {/* You can add more components here as needed */}
    </>
  );
}

export default LandingPage;

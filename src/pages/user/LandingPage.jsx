import { useState } from "react";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import InfoBox from "../../components/InfoBox";
import ShopSnap from "../../components/ShopSnap";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <InfoBox />
      <ShopSnap />
      {/* <ProductList /> */}
      <Footer />

      {/* You can add more components here as needed */}
    </>
  );
}

export default LandingPage;

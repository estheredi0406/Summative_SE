import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import InfoBox from "../../components/InfoBox";
import ShopSnap from "../../components/ShopSnap";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal"; // your modal component

function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check localStorage if modal was already shown and dismissed
    const dismissed = localStorage.getItem("modalDismissed");
    if (dismissed === "true") {
      return; // Do not show modal if dismissed before
    }

    const handleScroll = () => {
      setShowModal(true); // Show modal on first scroll
      window.removeEventListener("scroll", handleScroll); // Remove listener so it only triggers once
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeModal = () => {
    localStorage.setItem("modalDismissed", "true"); // Save dismissal state
    setShowModal(false);
  };

  return (
    <>
      <NavBar />
      <Hero />
      <InfoBox />
      <ShopSnap />
      <Footer />

      {showModal && <Modal onClose={closeModal} />}
    </>
  );
}

export default LandingPage;

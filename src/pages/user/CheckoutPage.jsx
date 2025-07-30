import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import { CartContext } from "../../context/Cartcontext";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsProcessing(true);

    // Simulate a checkout process delay
    setTimeout(() => {
      clearCart();
      setSuccess(true);
      setIsProcessing(false);
    }, 2000);
  };

  if (cartItems.length === 0 && !success)
    return (
      <EmptyMessage>
        <h2>Your cart is empty.</h2>
        <button onClick={() => navigate("/")}>Go Back to Shop</button>
      </EmptyMessage>
    );

  if (success)
    return (
      <SuccessMessage>
        <h2>Thank you for your purchase!</h2>
        <button onClick={() => navigate("/")}>Back to Shop</button>
      </SuccessMessage>
    );

  return (
    <Wrapper>
      <h1>Checkout</h1>
      <Summary>
        <p>
          You are about to purchase <strong>{cartItems.length}</strong> items
          for a total of <strong>${totalPrice.toFixed(2)}</strong>.
        </p>
        <button onClick={handleCheckout} disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Confirm Purchase"}
        </button>
      </Summary>
    </Wrapper>
  );
}

export default CheckoutPage;

// Styled Components

const Wrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const Summary = styled.div`
  margin-top: 30px;

  p {
    font-size: 1.2rem;
  }

  button {
    margin-top: 20px;
    padding: 12px 30px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 25px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;

    &:disabled {
      background: #94d3a2;
      cursor: not-allowed;
    }
  }
`;

const EmptyMessage = styled.div`
  padding: 60px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  button {
    padding: 12px 25px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const SuccessMessage = styled(EmptyMessage)``;

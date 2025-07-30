// src/components/ScrollAuthModal.jsx
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { FaTimes, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 0.35s ease-out forwards;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.4rem;
  color: #aaa;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #000;
  }
`;

const ModalTitle = styled.h2`
  color: #2d3436;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
`;

const ModalText = styled.p`
  color: #636e72;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AuthButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }
`;

const LoginButton = styled(AuthButton)`
  background: linear-gradient(to right, #e74c3c, #c0392b);
  color: #fff;
  border: none;

  &:hover {
    background: linear-gradient(to right, #c0392b, #e74c3c);
  }
`;

const SignupButton = styled(AuthButton)`
  background: linear-gradient(to right, #2ecc71, #27ae60);
  color: #fff;
  border: none;

  &:hover {
    background: linear-gradient(to right, #27ae60, #2ecc71);
  }
`;

const ScrollAuthModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    localStorage.setItem("authModalDismissed", "true");
    onClose();
  };

  const handleLogin = () => {
    handleClose();
    navigate("/login");
  };

  const handleSignup = () => {
    handleClose();
    navigate("/signup");
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={handleClose}>
          <FaTimes />
        </CloseButton>
        <ModalTitle>Join Our Fresh Community</ModalTitle>
        <ModalText>
          Sign in or create an account to enjoy faster checkout, save your
          favorite items, and track your orders.
        </ModalText>
        <ButtonContainer>
          <LoginButton onClick={handleLogin}>
            <FaSignInAlt /> Log In
          </LoginButton>
          <SignupButton onClick={handleSignup}>
            <FaUserPlus /> Sign Up
          </SignupButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ScrollAuthModal;

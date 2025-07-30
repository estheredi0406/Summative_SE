import { useState } from "react";
import styled from "@emotion/styled";
import logo from "../assets/logo1.png";
import { MdMenu, MdClose } from "react-icons/md";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ⬅️ import for navigation

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ⬅️ init navigate

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </Logo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </MobileIcon>

        <Ulist isOpen={isOpen}>
          <CloseButton onClick={() => setIsOpen(false)}>
            <MdClose size={40} />
          </CloseButton>

          <LI onClick={() => navigate("/")}>Home</LI>
          <LI onClick={() => navigate("/aboutUs")}>About Us</LI>
          <LI onClick={() => navigate("/shop")}>Products</LI>

          <LI>
            <CartIcon onClick={() => navigate("/profile")}>
              <FaUser size={24} />
            </CartIcon>
          </LI>
          <LI>
            <CartIcon onClick={() => navigate("/cart")}>
              <FaShoppingCart size={24} />
            </CartIcon>
          </LI>
        </Ulist>
      </Nav>
    </HeaderContainer>
  );
}

export default NavBar;

const HeadInfo = styled.div`
  background-color: rgb(127, 190, 175);
  width: 100%;
  height: 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
`;

const HeaderContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-top: 10px;
  height: 200px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: rgba(223, 245, 175, 0.9);
  height: 80px;
  width: 100%;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;

  img {
    width: 230px;
    margin-top: 20px;
    margin-left: 150px;

    @media (max-width: 768px) {
      width: 80px;
      margin-left: -130px;
    }
  }
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  margin-left: auto;

  @media (max-width: 768px) {
    display: block;
    margin-right: 80px;
    margin-top: 10px;
  }
`;

const Ulist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 50%;
  padding: 0;
  margin-left: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    background-color: white;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    padding-top: 80px;
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0px 4px 10px rgba(0,0,0,0.1)" : "none"};
    z-index: 1000;
  }
`;

const LI = styled.li`
  margin: 0 1rem;
  font-size: 1rem;
  color: black;
  cursor: pointer;

  &:hover {
    color: #019875;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
`;

const CloseButton = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

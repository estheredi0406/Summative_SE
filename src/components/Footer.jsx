import { useState } from "react";
import styled from "@emotion/styled";
import logo from "../assets/logo1.png";
import { MdMenu, MdClose, MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "Fruits",
    "Vegetables",
    "Protein",
    "Dairy & Eggs",
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </MobileIcon>

        <SearchContainer>
          <CategoryDropdown>
            <CategoryButton onClick={toggleCategoryDropdown}>
              {selectedCategory}
              <MdKeyboardArrowDown size={20} />
            </CategoryButton>
            {isCategoryOpen && (
              <DropdownMenu>
                {categories.map((category) => (
                  <DropdownItem
                    key={category}
                    onClick={() => selectCategory(category)}
                    active={category === selectedCategory}
                  >
                    {category}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </CategoryDropdown>
          <SearchInput
            type="text"
            placeholder="Search for anything..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SearchButton>
            <MdSearch size={24} />
          </SearchButton>
        </SearchContainer>

        <Ulist isOpen={isOpen}>
          <CloseButton onClick={() => setIsOpen(false)}>
            <MdClose size={40} />
          </CloseButton>

          <LI>Home</LI>
          <LI>About Us</LI>
          <LI>Products</LI>
          <LI>
            <CartIcon>
              <FaUser size={24} />
            </CartIcon>
          </LI>
          <LI>
            <CartIcon>
              <FaShoppingCart size={24} />
            </CartIcon>
          </LI>
        </Ulist>
      </Nav>
    </HeaderContainer>
  );
}

export default NavBar;

// Styled components
const HeaderContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding-top: 10px;
  height: 200px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  height: 140px;
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
    width: 150px;
    margin-top: 20px;

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

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
  width: 50%;
  max-width: 600px;
  position: relative;
  height: 44px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CategoryDropdown = styled.div`
  position: relative;
  height: 100%;
`;

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 16px;
  background-color: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  border-right: none;
  cursor: pointer;
  min-width: 160px;
  font-size: 14px;

  &:hover {
    background-color: #e7e7e7;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

const DropdownItem = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  background-color: ${(props) => (props.active ? "#f0f0f0" : "white")};

  &:hover {
    background-color: #f7f7f7;
  }
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px 16px;
  border: 1px solid #ddd;
  height: 100%;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #019875;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 16px;
  background-color: #019875;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #01705a;
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

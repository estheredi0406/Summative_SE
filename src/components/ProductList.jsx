// import styled from "@emotion/styled";
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import MockProducts from "../JSONFILES/MockProducts.js";
// import { CartContext } from "../context/Cartcontext.jsx";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [addedProduct, setAddedProduct] = useState(null);
//   const navigate = useNavigate();
//   const { addToCart, currency, changeCurrency } = useContext(CartContext);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setTimeout(() => {
//         setProducts(MockProducts);
//       }, 1500);
//     };
//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product) => {
//     const { amount } = convertPrice(product.Price); // Get the converted price
//     const productToAdd = {
//       ...product,
//       Price: amount, // Set the converted price
//     };
//     console.log("Adding to cart:", productToAdd); // Debugging line
//     addToCart(productToAdd); // Add the product with the correct price to the cart
//     setAddedProduct(product);
//     setIsModalOpen(true);
//   };

//   // Function to convert price based on selected currency
//   const convertPrice = (price) => {
//     const numericPrice = parseFloat(price); // Ensure price is a number
//     if (isNaN(numericPrice)) {
//       return { amount: 0, symbol: currency === "RWF" ? "RWF" : "$" }; // Return 0 if the price is not a valid number
//     }
//     if (currency === "RWF") {
//       return { amount: numericPrice * 1100, symbol: "RWF" }; // Example conversion rate from USD to RWF
//     }
//     return { amount: numericPrice, symbol: "$" }; // Return price in USD
//   };

//   const filteredProducts = products.filter((product) => {
//     const price = convertPrice(parseFloat(product.Price)); // Convert price based on selected currency
//     const categoryMatch =
//       categoryFilter === "All" || product.Category === categoryFilter;
//     const minMatch = minPrice === "" || price.amount >= parseFloat(minPrice);
//     const maxMatch = maxPrice === "" || price.amount <= parseFloat(maxPrice);
//     const searchMatch = product.Title.toLowerCase().includes(
//       searchQuery.toLowerCase()
//     );

//     return categoryMatch && minMatch && maxMatch && searchMatch;
//   });

//   const categories = [
//     "All",
//     ...new Set(MockProducts.map((item) => item.Category)),
//   ];

//   const closeModal = () => {
//     setIsModalOpen(false); // Close the modal
//   };

//   return (
//     <>
//       {/* Filter Container */}
//       <FilterContainer>
//         <label>
//           Category:
//           <select
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             value={categoryFilter}
//           >
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Min Price:
//           <input
//             type="number"
//             value={minPrice}
//             onChange={(e) => setMinPrice(e.target.value)}
//             placeholder="0"
//           />
//         </label>
//         <label>
//           Max Price:
//           <input
//             type="number"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(e.target.value)}
//             placeholder="1000"
//           />
//         </label>
//         <label>
//           Search:
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search by title..."
//           />
//         </label>
//         <label>
//           Currency:
//           <select
//             onChange={(e) => changeCurrency(e.target.value)}
//             value={currency}
//           >
//             <option value="USD">USD</option>
//             <option value="RWF">RWF</option>
//           </select>
//         </label>
//       </FilterContainer>

//       {/* Cart Button */}
//       <CartBar>
//         <Link to="/cart">
//           <ViewCartButton>View Cart</ViewCartButton>
//         </Link>
//       </CartBar>

//       {/* Product List */}
//       <Container>
//         {filteredProducts.map((product) => {
//           const { amount, symbol } = convertPrice(product.Price); // Get amount and symbol
//           const formattedPrice =
//             amount !== undefined ? amount.toFixed(2) : "0.00"; // Check for undefined and format

//           return (
//             <Card key={product.id}>
//               <Link to={`/getSingleProduct/${product.id}`}>
//                 <Image>
//                   <img src={product.Image} alt="Product Image" />
//                 </Image>
//               </Link>
//               <Content>
//                 <Title>{product.Title}</Title>
//                 <Price>
//                   {symbol} {formattedPrice}
//                 </Price>{" "}
//                 {/* Display formatted price */}
//                 <Category>{product.Category}</Category>
//                 <Details>{product.Details}</Details>
//                 <AddButton onClick={() => handleAddToCart(product)}>
//                   Add to Cart
//                 </AddButton>
//               </Content>
//             </Card>
//           );
//         })}
//       </Container>

//       {/* Modal Popup */}
//       {isModalOpen && (
//         <ModalOverlay>
//           <Modal>
//             <h2>Added to Cart!</h2>
//             <p>{addedProduct?.Title} has been added to your cart.</p>
//             <ButtonContainer>
//               <ModalButton onClick={() => navigate("/cart")}>
//                 Go to Cart
//               </ModalButton>
//               <ModalButton onClick={closeModal}>Close</ModalButton>
//             </ButtonContainer>
//           </Modal>
//         </ModalOverlay>
//       )}
//     </>
//   );
// }

// export default ProductList;

// // Styles
// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-top: 20px;
//   font-family: "Poppins", sans-serif;
//   margin-left: 10px;
//   margin-right: 10px;
// `;

// const Card = styled.div`
//   width: 300px;
//   height: 500px;
//   margin: 20px;
//   border-radius: 10px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   position: relative;
// `;

// const Image = styled.div`
//   width: 100%;
//   height: 50%;
//   object-fit: cover;
//   display: flex;
//   justify-content: center;

//   img {
//     width: 100%;
//     height: 90%;
//     object-fit: cover;
//   }
// `;

// const Content = styled.div`
//   width: 100%;
//   height: 40%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.h2`
//   font-size: 1.5rem;
//   margin: 10px;
//   font-family: "Fira Sans", sans-serif;
// `;

// const Price = styled.p`
//   font-size: 1.6rem;
//   margin: 10px;
//   color: red;
// `;

// const Category = styled.p`
//   font-size: 0.9rem;
//   margin: 10px;
//   font-weight: bold;
//   font-family: "Fira Sans", sans-serif;
// `;

// const Details = styled.p`
//   font-size: 0.8rem;
//   margin: 10px;
//   text-align: center;
// `;

// const AddButton = styled.button`
//   background-color: red;
//   color: white;
//   font-size: 1rem;
//   font-weight: 600;
//   padding: 0.8rem 2rem;
//   border-radius: 4rem;
//   border: none;
//   cursor: pointer;
//   margin-top: 15px;
//   transition: all 0.3s;

//   &:hover {
//     background-color: #019875;
//   }
// `;

// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 20px 0;
//   gap: 20px;
//   font-family: "Fira Sans", sans-serif;
//   font-size: 1.2rem;

//   label {
//     display: flex;
//     font-weight: bold;
//     align-items: center;
//   }

//   input,
//   select {
//     margin-left: 10px;
//     padding: 5px;
//   }
// `;

// const ViewCartButton = styled.button`
//   background-color: black;
//   color: white;
//   font-size: 1rem;
//   padding: 0.7rem 1.5rem;
//   border: none;
//   border-radius: 3rem;
//   cursor: pointer;
//   margin: 10px;
//   transition: all 0.3s;

//   &:hover {
//     background-color: #555;
//   }
// `;

// const CartBar = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-right: 40px;
// `;

// // Modal Styles
// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const Modal = styled.div`
//   background-color: white;
//   padding: 2rem;
//   border-radius: 8px;
//   text-align: center;
//   width: 300px;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;
// `;

// const ModalButton = styled.button`
//   background-color: #019875;
//   color: white;
//   padding: 0.8rem 1.5rem;
//   font-size: 1rem;
// `;

import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MockProducts from "../JSONFILES/MockProducts.js";
import { CartContext } from "../context/Cartcontext.jsx";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      setTimeout(() => {
        setProducts(MockProducts);
      }, 1500);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const isLoggedIn = localStorage.getItem("userToken"); // Or change the key based on what you'll use later

    if (!isLoggedIn) {
      // 🔁 Redirect to signup page if user is not logged in
      navigate("/signup");
      return;
    }

    // ✅ If logged in, add product to cart and show modal
    addToCart(product);
    setAddedProduct(product);
    setIsModalOpen(true);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      categoryFilter === "All" || product.Category === categoryFilter;
    const searchMatch = product.Title.toLowerCase().includes(
      searchQuery.toLowerCase()
    );
    return categoryMatch && searchMatch;
  });

  const categories = [
    "All",
    ...new Set(MockProducts.map((item) => item.Category)),
  ];

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* 🔍 Search and Category Filter Row */}
      <FilterBar>
        <CategorySelect
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </CategorySelect>

        <SearchInput
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for anything..."
        />
      </FilterBar>

      {/* 🛒 Cart Button */}
      <CartBar>
        <Link to="/cart">
          <ViewCartButton>View Cart</ViewCartButton>
        </Link>
      </CartBar>

      {/* 🧱 Product List */}
      <Container>
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <Link to={`/getSingleProduct/${product.id}`}>
              <Image>
                <img src={product.Image} alt="Product Image" />
              </Image>
            </Link>
            <Content>
              <Title>{product.Title}</Title>
              <Price>{product.Price}</Price>
              <Category>{product.Category}</Category>
              <Details>{product.Details}</Details>
              <AddButton onClick={() => handleAddToCart(product)}>
                Add to Cart
              </AddButton>
            </Content>
          </Card>
        ))}
      </Container>

      {/* 🧾 Modal */}
      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <h2>Added to Cart!</h2>
            <p>{addedProduct?.Title} has been added to your cart.</p>
            <ButtonContainer>
              <ModalButton onClick={() => navigate("/cart")}>
                Go to Cart
              </ModalButton>
              <ModalButton onClick={closeModal}>Close</ModalButton>
            </ButtonContainer>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}

export default ProductList;

// Styles

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
  margin-left: 10px;
  margin-right: 10px;
  background-color: rgb(135, 101, 101);
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;

  margin: 30px auto;
  max-width: 700px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.1);
`;

const CategorySelect = styled.select`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: rgb(226, 231, 145);
  border-right: 1px solid #ccc;
  flex: 1;
  max-width: 150px;
`;

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  outline: none;
  flex: 3;
`;

const CartBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 20px;
  font-family: "Fira Sans", sans-serif;
  font-size: 1.2rem;
`;
const Card = styled.div`
  width: 280px;
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.div`
  height: 220px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 90%;
    max-width: 90%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0.5rem 0;
  font-family: "Poppins", sans-serif;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #e63946;
  margin: 0.25rem 0;
`;

const Category = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.25rem;
`;

const Details = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0.5rem 0;
  min-height: 40px;
`;

const AddButton = styled.button`
  background-color: red;
  color: white;
  padding: 0.7rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: red;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 20px;
  font-family: "Fira Sans", sans-serif;
  font-size: 1.2rem;

  label {
    display: flex;
    font-weight: bold;
    align-items: center;
  }

  input,
  select {
    margin-left: 10px;
    padding: 5px;
  }
`;

const ViewCartButton = styled.button`
  background-color: black;
  color: white;
  font-size: 1rem;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  margin: 10px;
  transition: all 0.3s;

  &:hover {
    background-color: #555;
  }
`;

/* Removed duplicate CartBar declaration to fix redeclaration error */

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  width: 300px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  background-color: #019875;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
`;

// Enhanced ProductList component with quantity selector on each product card
import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MockProducts from "../../JSONFILES/MockProducts";
import { CartContext } from "../../context/Cartcontext";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      setTimeout(() => {
        setProducts(MockProducts);
      }, 1000);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product, quantity = 1) => {
    addToCart(product, quantity);
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

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  const categories = [
    "All",
    ...new Set(MockProducts.map((item) => item.Category)),
  ];

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <FilterBar>
        <label>
          <span>Category:</span>
          <select
            onChange={(e) => setCategoryFilter(e.target.value)}
            value={categoryFilter}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder=" Search for products..."
        />
        <Link to="/cart">
          <CartBtn>View Cart</CartBtn>
        </Link>
      </FilterBar>

      <ProductGrid>
        {visibleProducts.map((product, index) => (
          <ProductCardWithQuantity
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </ProductGrid>

      {!showAll && filteredProducts.length > 8 && (
        <Center>
          <ShowMoreBtn onClick={() => setShowAll(true)}>
            See All Products
          </ShowMoreBtn>
        </Center>
      )}

      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <h2>Added to Cart!</h2>
            <p>{addedProduct?.Title} has been added.</p>
            <ModalActions>
              <button onClick={() => navigate("/cart")}>Go to Cart</button>
              <button onClick={closeModal}>Continue Shopping</button>
            </ModalActions>
          </Modal>
        </ModalOverlay>
      )}
    </Wrapper>
  );
}

function ProductCardWithQuantity({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => Math.min(q + 1, 99));
  const decrement = () => setQuantity((q) => Math.max(q - 1, 1));

  return (
    <ProductCard>
      <Image src={product.Image} alt={product.Title} />
      <DetailsBox>
        <TitleRow>
          <h3>{product.Title}</h3>
          <span className="price">${parseFloat(product.Price).toFixed(2)}</span>
        </TitleRow>

        <p className="desc">{product.Details}</p>
        <QuantitySelector>
          <button onClick={decrement}>-</button>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => {
              let val = parseInt(e.target.value);
              if (isNaN(val) || val < 1) val = 1;
              else if (val > 99) val = 99;
              setQuantity(val);
            }}
          />
          <button onClick={increment}>+</button>
        </QuantitySelector>
        <Footer>
          <span className="category">{product.Category}</span>
          <button onClick={() => onAddToCart(product, quantity)}>
            Add to Cart
          </button>
        </Footer>
      </DetailsBox>
    </ProductCard>
  );
}

export default ProductList;

// Styled Components
const Wrapper = styled.div`
  padding: 50px;
  font-family: "Poppins", sans-serif;
  background-color: ;
  margin-top: -30px;
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 20px;
  margin-bottom: 80px;
  align-items: center;

  label {
    font-size: 1rem;
    font-weight: 600;

    select {
      margin-left: 8px;
      padding: 6px;
      border-radius: 8px;
    }
  }
`;

const SearchInput = styled.input`
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  width: 300px;
  font-size: 1rem;
  background-color: white;
`;

const CartBtn = styled.button`
  background: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #218838;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 2px 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const DetailsBox = styled.div`
  padding: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1rem;
    margin: 0;
  }
  .price {
    font-size: 0.95rem;
    font-weight: 600;
    color: #e74c3c;
  }
`;

const Rating = styled.div`
  font-size: 0.8rem;
  margin: 6px 0;
  color: #f39c12;
`;

const QuantitySelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  button {
    background: #ddd;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 6px;
    user-select: none;

    &:hover {
      background: #ccc;
    }
  }

  input {
    width: 50px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: 0 8px;
    font-size: 1rem;
    padding: 4px 0;
  }
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .category {
    font-size: 0.75rem;
    color: #555;
    font-style: italic;
  }

  button {
    background: #ff4757;
    color: white;
    padding: 6px 12px;
    border: none;
    border-radius: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #ff6b81;
    }
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ShowMoreBtn = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 400px;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #28a745;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #218838;
    }
  }
`;

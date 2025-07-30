import styled from "@emotion/styled";
import { useRef } from "react";
import { Link } from "react-router-dom";
import eggs from "../assets/eggs.jpg";
import lettuce from "../assets/salad.jpg";
import beans from "../assets/beans.jpg";
import bellpepper from "../assets/bellpeper.jpg";
import bananas from "../assets/bananas.jpg";
import chicken from "../assets/chicken.jpg";
import bananagreen from "../assets/bananaGreen.jpg";
import tomatoes from "../assets/tomatoes.jpg";
import Shop from "../pages/user/Shop";

function FoodItem({ image, title, content, price }) {
  return (
    <UniqueFood>
      <Picture src={image} alt={title} />
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Price>{price}</Price>
      <Link to="/Shop" style={{ textDecoration: "none" }}>
        <Button>View Product</Button>
      </Link>
    </UniqueFood>
  );
}

function ListFood() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const foodItems = [
    {
      image: bellpepper,
      title: "Bell Pepper",
      content: "Fresh and crunchy.",
      price: "$3.99",
    },
    {
      image: tomatoes,
      title: "Tomatoes",
      content: "Ripe and juicy.",
      price: "$4.99",
    },
    {
      image: bananas,
      title: "Bananas",
      content: "Sweet and ripe.",
      price: "$6.99",
    },
    {
      image: lettuce,
      title: "Lettuce",
      content: "Crisp and fresh.",
      price: "$7.99",
    },
    {
      image: chicken,
      title: "Chicken",
      content: "Fresh chicken.",
      price: "$5.49",
    },
    {
      image: bananagreen,
      title: "Green Bananas",
      content: "Healthy and nutritious.",
      price: "$5.99",
    },
    {
      image: beans,
      title: "Beans",
      content: "High in protein and fiber.",
      price: "$7.49",
    },
  ];

  return (
    <Wrapper>
      <FoodWrapper>
        <ScrollContainer ref={scrollRef}>
          {foodItems.map((food, index) => (
            <FoodItem
              key={index}
              image={food.image}
              title={food.title}
              content={food.content}
              price={food.price}
            />
          ))}
        </ScrollContainer>
        <ScrollButtons>
          <ScrollButton onClick={scrollLeft}>&lt;</ScrollButton>
          <ScrollButton onClick={scrollRight}>&gt;</ScrollButton>
        </ScrollButtons>
        <Link to="/Shop" style={{ textDecoration: "none" }}>
          <VisitShopButton>Visit Shop</VisitShopButton>
        </Link>
      </FoodWrapper>
    </Wrapper>
  );
}

export default ListFood;

// Styled Components
const Button = styled.button`
  background-color: #ff4757;
  color: white;
  padding: 6px 16px;
  border: none;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 8px;
  margin-bottom: 16px;

  &:hover {
    background-color: #ff6b81;
  }
`;

const VisitShopButton = styled.button`
  background-color: #28a745; /* Green color for the shop button */
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px; /* Space above the button */

  &:hover {
    background-color: #218838; /* Darker green on hover */
  }
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #e84118;
  padding: 4px;
  border-radius: 8px;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.85rem;
  color: #7f8c8d;
  text-align: center;
  padding: 4px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  color: #2f3542;
  text-align: center;

  &:hover {
    color: #1e90ff;
  }
`;

const Picture = styled.img`
  width: 240px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const UniqueFood = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 260px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 8px;
  flex: 0 0 auto;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  padding: 10px;
  gap: 8px;
  width: 80%;
  justify-content: flex-start;
  scroll-behavior: smooth;
  position: relative;
`;

const ScrollButton = styled.button`
  background-color: white;
  width: 60px;
  height: 60px;
  color: #ff4757;
  font-size: 1.5rem;
  border: 1px solid #ff4757;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s;
  margin: 5px;

  &:hover {
    background-color: #ff4757;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 6px;
  }
`;

const ScrollButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
  width: 100%;
`;

const FoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  background-color: #f3f5ed;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f3f5ed;
  padding: 20px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

import styled from "@emotion/styled";
import { useRef } from "react";
import eggs from "../assets/eggs.jpg";
import lettuce from "../assets/salad.jpg";
import beans from "../assets/beans.jpg";
import bellpepper from "../assets/bellpeper.jpg";
import bananas from "../assets/bananas.jpg";
import chicken from "../assets/chicken.jpg";
import bananagreen from "../assets/bananaGreen.jpg";
import tomatoes from "../assets/tomatoes.jpg";
import { Link } from "react-router-dom";

// Reusable FoodItem Component. The FoodItem component is a reusable component that takes image, title, content, and price as props and displays them in a styled format.

function FoodItem({ image, title, content, price }) {
  return (
    <UniqueFood>
      <Picture src={image} alt={title} />
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Price>{price}</Price>
      <Link to="/ProductPage" style={{ textDecoration: "none" }}>
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

  // Food data array
  const foodItems = [
    {
      image: eggs,
      title: "Fresh Eggs",
      content: "Organic farm eggs.",
      price: "$8.99",
    },
    {
      image: bellpepper,
      title: "Bell Pepper",
      content: "Fresh and crunchy, perfect for salads.",
      price: "$3.99",
    },
    {
      image: tomatoes,
      title: "Tomatoes",
      content: "Ripe and juicy tomatoes, perfect for salads, sauces, and more.",
      price: "$4.99",
    },
    {
      image: bananas,
      title: "Bananas",
      content:
        "Sweet and ripe bananas, perfect for smoothies and more, great for weight loss.",
      price: "$6.99",
    },
    {
      image: lettuce,
      title: "Lettuce",
      content:
        "Crisp and fresh lettuce, perfect for salads, sandwiches, and more.",
      price: "$7.99",
    },
    {
      image: chicken,
      title: "Chicken",
      content: "Fresh chicken, perfect for grilling or roasting.",
      price: "$5.49",
    },
    {
      image: bananagreen,
      title: "Green Bananas",
      content: "Healthy and nutritious, great for weight loss.",
      price: "$5.99",
    },
    {
      image: beans,
      title: "Beans",
      content: "High in protein and fiber, perfect for salads and soups.",
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
      </FoodWrapper>
    </Wrapper>
  );
}

export default ListFood;

const Button = styled.button`
  background-color: red;
  color: white;
  padding: 8px 20px;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  margin-bottom: 20px;

  &:hover {
    background-color: #9acd32;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: red;
  padding: 5px;
  border-radius: 8px;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.9rem;
  color: gray;
  text-align: center;
  padding: 5px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-align: center;

  &:hover {
    color: green;
  }
`;

const Picture = styled.img`
  width: 260px;
  height: 160px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 10px;
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
  width: 280px;
  padding: 12px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  flex: 0 0 auto;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  padding: 10px;
  gap: 10px;
  width: 80%;
  justify-content: flex-start;
  scroll-behavior: smooth;
  position: relative;
`;

const ScrollButton = styled.button`
  background-color: white;
  width: 80px;
  height: 80px;
  color: red;
  font-size: 1.5rem;
  border: 1px solid red;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s;
  margin: 5px;

  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 8px 12px;
  }
`;

const ScrollButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
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

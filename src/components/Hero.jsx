import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

// Import your background images
import delivery from "../assets/delivery.jpg";

// Slide data with individual images
const slides = [
  {
    title: "Farm-Fresh Kigali Delivery",
    text: "Get the freshest Rwandan produce delivered straight from local farms to your home. We work with trusted farmers across Rubavu, Musanze, and Bugesera.",
    bgImage: delivery,
    textColor: "white",
  },
  {
    title: "Same-Day Kigali Delivery",
    text: "Order by 12PM and receive your groceries before sunset. Serving Kimihurura, Gikondo, Kanombe, Kicukiro and more.",
    bgImage: delivery,
    textColor: "white",
  },
  {
    title: "Seasonal Rwandan Specials",
    text: "Enjoy locally-grown avocados, tree tomatoes, passion fruits, and traditional crops like ibitoke—delivered at peak freshness.",
    bgImage: delivery,
    textColor: "white",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AllContent>
      <HeroContainer
        style={{
          backgroundImage: `url(${slides[currentSlide].bgImage})`,
          color: slides[currentSlide].textColor,
        }}
      >
        <HeroOverlay>
          <HeroContent>
            <HeroTextContent>
              <HeroTitle>{slides[currentSlide].title}</HeroTitle>
              <HeroText>{slides[currentSlide].text}</HeroText>
              <HeroButtons>
                <Button2>Order Now</Button2>
                <OutlineButton>Learn More</OutlineButton>
              </HeroButtons>
            </HeroTextContent>
          </HeroContent>
        </HeroOverlay>
      </HeroContainer>
    </AllContent>
  );
}

export default Hero;

// Styled Components
const AllContent = styled.div`
  width: 100%;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
  position: relative;
`;

const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
`;

const HeroTextContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button2 = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #3e8e41;
  }
`;

const OutlineButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: white;
  color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: grey;
  }
`;

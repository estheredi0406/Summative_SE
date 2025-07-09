import styled from "@emotion/styled";
import panier from "../assets/panier.png";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";

function Hero() {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroContentLeft>
            <HeroTitle>
              <span>Organic Food </span>
              <br />
              Delivery Service
            </HeroTitle>

            <HeroText>
              Get your healthy groceries delivered to your doorsteps. We deliver
              organic food that is good for your health. Our products are
              sourced from the best farmers in the world, using only the
              freshest ingredients and are delivered to your doorsteps.
            </HeroText>

            <HeroButtons>
              <Button2>View Shop</Button2>
            </HeroButtons>
          </HeroContentLeft>

          <HeroContentRight>
            <img src={panier} alt="Organic Food Delivery" />
          </HeroContentRight>
        </HeroContent>
      </HeroContainer>
      //Wrapper for the banner
      <Wrapper>
        <WrapperBig>
          <Wrapper1>
            <Icon1>
              <MdDeliveryDining />
            </Icon1>

            <Text1>
              <h4>Smooth Delivery</h4>
              <p>
                We provide a smooth delivery experience for our customers. Our
                delivery team is trained to handle your orders with care
              </p>
            </Text1>
          </Wrapper1>

          <Wrapper2>
            <Icon2>
              <MdOutlinePayments />
            </Icon2>

            <Text2>
              <h4>Easy payments</h4>
              <p>
                We offer a variety of payment options to make your shopping
                experience as convenient as possible.
              </p>
            </Text2>
          </Wrapper2>

          <Wrapper3>
            <Icon3>
              <MdOutlineFastfood />
            </Icon3>

            <Text3>
              <h4>Exact calories</h4>
              <p>
                We provide exact calories for each food item, so you can make
                informed decisions about your meals.
              </p>
            </Text3>
          </Wrapper3>
        </WrapperBig>
      </Wrapper>
    </>
  );
}
export default Hero;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -80px;
  height: 100vh;
  background-color: #f3f5ed;
  padding: 2rem;
  font-family: "Poppins", sans-serif;

  // overflow-x: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 2rem 1rem;
    margin-top: 3rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

const HeroContentLeft = styled.div`
  width: 50%;
  padding: 0 4rem;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0 1.5rem;
    align-items: center;
  }
`;

const HeroContentRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
    max-width: 400px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
  margin-bottom: 20px;

  span {
    color: #9acd32;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  color: #000;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button1 = styled.button`
  background-color: red;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 4rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.6rem 1rem;
  }
`;

const Button2 = styled(Button1)`
  background-color: #9acd32;
  margin-left: 130px;
  &:hover {
    background-color: darkgreen;
  }
`;

const Wrapper3 = styled.div`
  display: flex;
  align-items: center;
  background-color: #292d35;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 240px;
  }
`;

const Text3 = styled.div`
  width: 80%;
  background-color: #292d35;
  padding: 30px;
  height: 70%;
  margin-left: -5px; 
  color: white;
  margin-top: -60px;

  h4 {
    font-size: 20px;
    margin-top: 20px;
    margin-left: -25px;
  }

  p {
    font-size: 15px;
    margin-top: 10px;
    text-align: left;
  }

  @media (max-width: 768px) {

  h4 {
    margin-top: -50px;
`;

const Icon3 = styled.div`
  font-size: 70px;
  padding-left: 20px;
  color: yellowgreen;
`;

const Wrapper2 = styled.div`
  display: flex;
  background-color: yellowgreen;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 240px;
  }
`;

const Text2 = styled.div`
  width: 80%;
  background-color: yellowgreen;
  padding: 30px;
  height: 70%;
  margin-left: -5px;

  h4 {
    font-size: 20px;
    margin-top: -12px;
    color: white;
    margin-left: -25px;
  }

  p {
    font-size: 15px;
    margin-top: 10px;
    text-align: left;
  }

  @media (max-width: 768px) {

  h4 {
    margin-top: -50px;
`;

const Icon2 = styled.div`
  font-size: 70px;
  color: white;
  padding-left: 20px;
`;

const Text1 = styled.div`
  width: 80%;
  background-color: white;
  padding: 30px;
  height: 70%;
  margin-left: 20px;
  margin-top: -60px;
  
  h4 {
    font-size: 20px;
    margin-top: 20px;
    margin-left: -30px;
  }

  p {
    font-size: 15px;
    margin-top: 10px;
    text-align: left;
  }

  @media (max-width: 768px) {

  h4 {
    margin-top: -50px;



`;

const Icon1 = styled.div`
  font-size: 70px;
  color: yellowgreen;
  padding-left: 20px;
`;

const Wrapper1 = styled.div`
  display: flex;
  background-color: white;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 240px;
  }
`;

const WrapperBig = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    display: flex;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -80px;
  width: 100%;
  height: 200px;
  font-family: "Poppins", sans-serif;

  // background-color: rgb(202, 231, 206);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    text-align: center;
    padding: 1rem;
    width: 90%;
    margin-top: 50px;
  }
`;

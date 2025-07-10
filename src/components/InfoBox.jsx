import styled from "@emotion/styled";
import { FaRegClock } from "react-icons/fa6";
import { RxVideo } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";

function Info() {
  return (
    <>
      <Wrapper>
        <WrapperBig>
          <WrapperContentLeft>
            <Title>
              Healthy and tasty foods with <br />{" "}
              <span>natural ingredients</span>
            </Title>

            <Content>
              Our delivery service is designed to make your life easier. We
              offer a wide range of organic food products, including fresh
              fruits and vegetables, whole grains, dairy products, and healthy
              snacks. We source our products from local farmers and suppliers,
              ensuring that they are fresh and of the highest quality.
            </Content>

            <InfoWrapper>
              <Item1>
                <Icon>
                  <FaRegClock />
                </Icon>
                <h3>Everyday from 7am to 11pm</h3>
              </Item1>

              <Item1>
                <Icon>
                  <FaPhone />
                </Icon>
                <h3>+1 234 567</h3>
              </Item1>
            </InfoWrapper>

            <Button>Read More </Button>
          </WrapperContentLeft>

          <WrapperContentRight>
            <img src="./src/assets/infoimg.jpg" alt="Organic Food Delivery" />
            <Video>
              <h4>Video About Our Company</h4>
              <VideoIcon>
                <RxVideo />
              </VideoIcon>
            </Video>
          </WrapperContentRight>
        </WrapperBig>
      </Wrapper>
    </>
  );
}

export default Info;

const WrapperContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  img {
    width: 65%;
    object-fit: cover;
    margin-top: 50px;
    margin-left: 50px;
    display: block;
    border-radius: 1.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;}

    img {
      width: 340px;
      object-fit: cover;
      align-self: center;
      display: block;
    }
  }
`;

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 1rem;
  width: 32%;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 4rem;
  border: none;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: #9acd32;
    transition: all 0.3s zoom-in-out;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px auto;
    margin-top: 2rem;
    margin-left: 1rem;
    height: 40px;
    font-size: 0.9rem;
    padding: 0.5rem 1.5rem;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  color: yellowgreen;
`;

const Item1 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-top: -5px;
  h3 {
    color: black;
    font-size: 1rem;
    margin-left: 1.3rem;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  margin-top: 2.5rem;
  flex-direction: column;
  justify-content: center;
`;

const WrapperContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  background-color: ;
  padding: 0 5rem;

  @media (max-width: 768px) {
    width: 70%;
    align-self: center;
  }
`;

const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: black;
  span {
    color: yellowgreen;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const Content = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
  color: black;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: center;
  height: 800px;
  margin-top: 5rem;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const WrapperBig = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const Video = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-top: 70px;
  position: relative;
  bottom: 180px;
  left: 3px;
  border-radius: 1rem;
  margin-left: 50px;
  background-color: white;
  cursor: pointer;

  h4 {
    color: black;
    font-size: 1rem;
    margin-bottom: 1.5rem;

    &:hover {
      color: yellowgreen;
    }

  @media (max-width: 768px) {
  display: none;
  }
`;

const VideoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: yellowgreen;
  margin-top: -1.6rem;
  padding: 0.5rem;

  &:hover {
    color: black;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

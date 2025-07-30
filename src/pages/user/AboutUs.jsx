import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "@emotion/styled";

function AboutUs() {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Title>About Us</Title>
        <Paragraph>
          Welcome to FreshCart, your trusted online grocery store. We're here to
          make your shopping easier, faster, and fresher. From locally sourced
          produce to everyday essentials, we deliver quality to your door with
          care.
        </Paragraph>
        <Paragraph>
          Our mission is to save your time and bring joy back into grocery
          shopping. With secure checkout, fast delivery, and top-notch customer
          support, we’re here to help.
        </Paragraph>
        <Paragraph>
          Thank you for choosing FreshCart — we’re glad you’re here!
        </Paragraph>
      </Wrapper>
      <Footer />
    </>
  );
}

export default AboutUs;

const Wrapper = styled.div`
  padding: 80px 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
`;

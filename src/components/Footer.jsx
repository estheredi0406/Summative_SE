import styled from "@emotion/styled";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <Logo>
            <img src="./src/assets/logo1.png" alt="" />
          </Logo>
          <Description>
            Healthy food delivered to your doorstep. Also we are commited to
            deliver the best service to you, to make sure that you reach your
            goals and spend less time in the figuring out what to cook
          </Description>
          <SocialIcons>
            <Icon href="#">
              <FaFacebookF />
            </Icon>
            <Icon href="#">
              <FaInstagram />
            </Icon>
            <Icon href="#">
              <FaTwitter />
            </Icon>
          </SocialIcons>
        </Section>

        {/* Navigation Links */}
        <Section>
          <Titre>Explore</Titre>
          <Nav>
            <Link
              to="/LandingPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              <NavItem>Home</NavItem>
            </Link>

            <Link
              to="/AboutUs"
              style={{ textDecoration: "none", color: "white" }}
            >
              <NavItem>About Us</NavItem>
            </Link>

            <Link
              to="/ProductPage"
              style={{ textDecoration: "none", color: "white" }}
            >
              <NavItem>Products</NavItem>
            </Link>

            <NavItem>Blog</NavItem>
            <NavItem>Contact</NavItem>
          </Nav>
        </Section>

        {/* Contact & Social Media */}
        <Section>
          <ContactInfo>
            <Titres>Contact Info</Titres>
            <P>
              <Icons>
                {" "}
                <CiLocationOn />
              </Icons>
              Location: Kigali, Rwanda
            </P>
            <P>
              <Icons>
                {" "}
                <FaPhoneAlt />
              </Icons>
              Phone: +250 123 456 789
            </P>
            <P>
              <Icons>
                {" "}
                <MdOutlineEmail />
              </Icons>
              Email: support@fitmeal.com
            </P>
          </ContactInfo>
        </Section>
      </FooterContent>

      {/* Copyright */}
      <CopyRight>
        &copy; {new Date().getFullYear()} Fitmeal. All rights reserved.
      </CopyRight>
    </FooterContainer>
  );
}

export default Footer;

const Icons = styled.div`
  font-size: 1.4rem;
  color: #a3d661;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

const P = styled.p`
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-left: 4rem;
`;

const Titres = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #a3d661;
  margin-left: 0.5rem;
  margin-top: -7.5rem;
`;

const Titre = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #a3d661;
  margin-left: -5rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    margin-left: -8rem;
  }
`;

const FooterContainer = styled.footer`
  background-color: #2c2c2c;

  color: white;
  padding: 2rem 1rem;
  text-align: center;
  margin-top: 8rem;
`;

const FooterContent = styled.div`
  max-width: 1100px;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 280px;
  margin-top: 1rem;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    margin-left: -2rem;
  }
`;

const Logo = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-left: -1rem;
  img {
    width: 220px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  width: 70%;
  text-align: left;
  margin-left: -rem;
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  margin-left: -22rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    margin-left: -400px;
  }
`;

const NavItem = styled.li`
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;
  text-align: left;
  margin-left: 14rem;

  &:hover {
    color: #a3d661;
  }
`;

const ContactInfo = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-top: 2.5rem;
  margin-left: -5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-left: -4rem;
`;

const Icon = styled.a`
  font-size: 1.4rem;
  color: white;
  transition: color 0.3s;
  width: 40px;
  height: 40px;
  background-color: #a3d661;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #a3d661;
  }
`;

const CopyRight = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 2rem;
  text-align: center;
  margin-left: -3rem;
`;

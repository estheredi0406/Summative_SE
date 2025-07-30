import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // ✅ Import useNavigate

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate(); // ✅ For redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      // You can choose to handle this case if needed
      return;
    }

    try {
      // Make API call to sign up the user
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // You can log the response if needed
      const data = await response.json();
      console.log("Signup response:", data);

      // Store token in local storage if needed
      // localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error signing up:", error);
      // No error message displayed
    } finally {
      // Redirect to the landing page regardless of success or failure
      navigate("/"); // Change this to your landing page route
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">Sign Up</Button>
        <StyledLink to="/login">Already have an account? Login</StyledLink>
      </Form>
    </Container>
  );
}

export default Signup;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const StyledLink = styled(RouterLink)`
  display: block;
  margin-top: 1rem;
  text-align: center;
  color: #4caf50;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

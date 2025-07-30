import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // ✅ Import useNavigate

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // ✅ For redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      try {
        // Make API call to log in the user
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!response.ok) {
          // Handle errors based on response status
          const errorData = await response.json();
          throw new Error(errorData.message || "Invalid email or password.");
        }

        const data = await response.json();
        console.log("Login response:", data);
        setError("");

        // Store token in local storage
        localStorage.setItem("token", data.token);

        // ✅ Redirect to dashboard or home page after successful login
        navigate("/dashboard"); // Change this to your desired route
      } catch (error) {
        console.error("Error logging in:", error);
        setError("Invalid email or password. Please try again.");
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
        <Button type="submit">Login</Button>
        <StyledLink to="/signup">Don't have an account? Sign up</StyledLink>
      </Form>
    </Container>
  );
}

export default Login;

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

const ErrorMessage = styled.p`
  color: red;
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

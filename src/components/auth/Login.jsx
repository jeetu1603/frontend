import React, { useState } from "react";
import {
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container h="95vh">
      <VStack h="full" justifyContent="center" spacing="16">
        <Heading children="Welcome to course bundler" />
        <form style={{ width: "100%" }}>
          <Box my="4">
            <FormLabel htmlFor="email" children="email address" />
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@doe.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my="4">
            <FormLabel htmlFor="password" children="password" />
            <Input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your password"
              type="password"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
            <Link to="/forgetpassword">
              <Button fontSize="sm" variant="link">
                Forget Password
              </Button>
            </Link>
          </Box>
          <Button my="4" colorScheme="yellow" type="submit">
            Login
          </Button>
          <Box my="4">
            New User?{" "}
            <Link to="/register">
              <Button colorScheme="yellow" variant="link">
                Sign up
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;

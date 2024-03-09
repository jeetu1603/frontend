import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Request = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  return (
    <Container h="92vh">
      <VStack h="full" justifyContent="center" spacing="16">
        <Heading children="Request new course" />
        <form style={{ width: "100%" }}>
          <Box my="4">
            <FormLabel htmlFor="name" children="name" />
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="john doe"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>
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
            <FormLabel htmlFor="course" children="course" />
            <Textarea
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="enter your course"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button my="4" colorScheme="yellow" type="submit">
            Send mail
          </Button>
          <Box my="4">
            See available courses{" "}
            <Link to="/courses">
              <Button colorScheme="yellow" variant="link">
                Click
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Request;

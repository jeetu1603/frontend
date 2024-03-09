import React, { useState } from "react";
import { Container, Heading, Input, VStack, Button } from "@chakra-ui/react";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container py="16" minH="90vh">
      <form>
        <Heading
          children="update profile"
          my="16"
          textAlign={["center", "left"]}
          textTransform={"uppercase"}
        ></Heading>
        <VStack spacing={8}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            type="text"
            focusBorderColor="yellow.500"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
            focusBorderColor="yellow.500"
          />
          <Button w="full" colorScheme="yellow" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;

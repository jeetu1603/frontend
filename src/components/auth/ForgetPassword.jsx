import React, { useState } from "react";
import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <Container py="16" h="90vh">
      <form>
        <Heading
          children="Forgot Password"
          my="16"
          textTransform="uppercase"
          textAlign={["center", "left"]}
        />
        <VStack spacing="8">
          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@doe.com"
            type="email"
            focusBorderColor="yellow.500"
          />
          <Button type="submit" w="full" colorScheme="yellow">
            send reset link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;

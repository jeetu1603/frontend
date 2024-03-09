import React, { useState } from "react";
import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const params = useParams();
  console.log(params.token);

  return (
    <Container py="16" h="90vh">
      <form>
        <Heading
          children="Reset Password"
          my="16"
          textTransform="uppercase"
          textAlign={["center", "left"]}
        />
        <VStack spacing="8">
          <Input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter new password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Button type="submit" w="full" colorScheme="yellow">
            reset password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;

import React, { useState } from "react";
import { Container, Heading, Input, VStack, Button } from "@chakra-ui/react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <Container py="16" minH="90vh">
      <form>
        <Heading
          children="change password"
          my="16"
          textAlign={["center", "left"]}
          textTransform={"uppercase"}
        ></Heading>
        <VStack spacing={8}>
          <Input
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="enter old password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="enter new password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Button w="full" colorScheme="yellow" type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;

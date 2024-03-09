import React from "react";
import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <Container h="90vh" p="16">
      <VStack justifyContent="center" h="full" spacing="4">
        <RiErrorWarningFill size="5rem" />
        <Heading my="8" textAlign="center" textTransform="uppercase">
          Payment Failed
        </Heading>
        <Link to="/subscribe">
          <Button variant="ghost">Try again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFailed;

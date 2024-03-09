import React from "react";
import { Box, Stack, Heading, VStack, HStack } from "@chakra-ui/react";
import {
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <Box padding="4" bg="blackAlpha.900" minH="10vh">
      <Stack direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]} width="full">
          <Heading children="All rights reserved" color="white" />
          <Heading
            children="@Jeetu Bangari"
            color="yellow.400"
            fontFamily="body"
            size="sm"
          />
        </VStack>
        <HStack
          spacing={["2", "10"]}
          justifyContent="center"
          color="white"
          fontSize="50"
        >
          <a href="https://youtube.com" target="_blank">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://instagram.com" target="_blank">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com" target="_blank">
            <TiSocialGithubCircular />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;

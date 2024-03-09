import React, { useState } from "react";
import {
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Box,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const fileUploadCss = {
  cursor: "pointer",
  marginLeft: "-5%",
  width: "110%",
  border: "none",
  height: "100%",
  color: "#ecc94b",
  backgroundColor: "white",
};

const fileUploadStyle = {
  "&::file-selector-button": fileUploadCss,
};

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgPrev, setImgPrev] = useState("");
  const [img, setImg] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgPrev(reader.result);
      setImg(reader.result);
    };
  };

  return (
    <Container h="95vh">
      <VStack h="full" justifyContent="center" spacing="16">
        <Heading children="Register" textTransform="uppercase" />
        <form style={{ width: "100%" }}>
          <Box my="4" display="flex" justifyContent="center">
            <Avatar size="2xl" src={imgPrev} />
          </Box>
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
          <Box my="4">
            <FormLabel htmlFor="avatar" children="choose avatar" />
            <Input
              id="avatar"
              accept="image/*"
              type="file"
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>
          <Button my="4" colorScheme="yellow" type="submit">
            Register
          </Button>
          <Box my="4">
            Old User?{" "}
            <Link to="/login">
              <Button colorScheme="yellow" variant="link">
                Login
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;

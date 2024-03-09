import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { fileUploadCss } from "./auth/Register";

const ChangePhotoBox = ({ isOpen, onClose, changeImageSubmitHandler }) => {
  const [img, setImg] = useState("");
  const [imgPrev, setImgPrev] = useState("");

  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgPrev(reader.result);
      setImg(reader.result);
    };
  };

  const closeHandler = () => {
    onClose();
    setImgPrev("");
    setImg("");
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader>change photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e) => changeImageSubmitHandler(e, img)}>
              <VStack spacing="8">
                {imgPrev && <Avatar boxSize="48" src={imgPrev} />}
                <Input
                  type="file"
                  css={{ "&::file-selector-button": fileUploadCss }}
                  onChange={changeImage}
                />
                <Button w="full" colorScheme="yellow" type="submit">
                  change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Profile = () => {
  const user = {
    name: "jeetu",
    email: "jeetu@email.com",
    createdAt: String(new Date().toISOString()),
    role: "user",
    subscription: { status: "active" },
    playlist: [
      {
        course: "aldfj",
        poster:
          "https://ssl.gstatic.com/onebox/media/sports/logos/fJAsY2gAnyxtQDGw5h_Utw_96x96.png",
      },
    ],
  };

  const removeFromPlaylistHandler = (id) => {
    console.log(id);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  const changeImageSubmitHandler = (e, img) => {
    e.preventDefault();
    console.log(img);
  };

  return (
    <Container minH="95vh" maxW="container.lg" py="8">
      <Heading
        children="Profile"
        m="8"
        textTransform="uppercase"
        textAlign="center"
      />
      <Stack
        justifyContent="flex-start"
        direction={["column", "row"]}
        alignItems="center"
        spacing={["8", "16"]}
        padding="8"
      >
        <VStack>
          <Avatar boxSize="48" />
          <Button colorScheme="yellow" variant="ghost" onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing="4" alignItems={["center", "flex-start"]}>
          <HStack>
            <Text children="name" fontWeight="bold" />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="email" fontWeight="bold" />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="created at" fontWeight="bold" />
            <Text children={user.createdAt.split("T")[0]} />
          </HStack>
          {user.role !== "admin" && (
            <HStack>
              <Text children="subscription" fontWeight="bold" />
              {user.subscription.status === "active" ? (
                <Button color="yellow.500" variant="unstyled">
                  cancel subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="yellow">subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={["column", "row"]} alignItems="center">
            <Link to="/updateProfile">
              <Button>update profile</Button>
            </Link>
            <Link to="/changePassword">
              <Button>change password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="playlist" size="md" my="8" />
      {user.playlist.length > 0 && (
        <Stack
          direction={["column", "row"]}
          alignItems="center"
          flexWrap="wrap"
          padding="8"
        >
          {user.playlist.map((element, index) => (
            <VStack w="48" m="2" key={element.course}>
              <Image boxSize="full" objectFit="contain" src={element.poster} />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant="ghost" colorScheme="yellow">
                    watch now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
};

export default Profile;

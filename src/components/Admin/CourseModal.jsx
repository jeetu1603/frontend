import {
  Box,
  Button,
  Grid,
  Heading,
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { fileUploadCss } from "../auth/Register";

const VideoCard = ({
  title,
  desc,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
}) => (
  <Stack
    direction={["column", "row"]}
    my="8"
    borderRadius={"lg"}
    boxShadow={"0 0 10px rgba(107,70,193,.5)"}
    justifyContent={["flex-start", "space-between"]}
    p={["4", "8"]}
  >
    <Box>
      <Heading size="sm" children={`#${num} ${title}`} />
      <Text children={desc} />
    </Box>
    <Button
      color={"purple.600"}
      onClick={() => deleteButtonHandler(courseId, lectureId)}
    >
      <RiDeleteBin7Fill />
    </Button>
  </Stack>
);

const CourseModal = ({
  isOpen,
  onClose,
  id,
  courseTitle,
  deleteLectureButtonHandler,
  addLectureHandler,
  lectures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setVideoPrev(reader.result);
      setVideo(reader.result);
    };
  };

  const handleClose = () => {
    setTitle("");
    setDesc("");
    setVideo("");
    setVideoPrev("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      size={"full"}
      onClose={handleClose}
      scrollBehavior="outside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton onClick={handleClose} />
        <ModalBody p={16}>
          <Grid templateColumns={["1fr", "3fr 1fr"]}>
            <Box px={["0", "16"]}>
              <Box my="5">
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size={"sm"} opacity={0.4} />
              </Box>
              <Heading children="lectures" size="lg" />
              {lectures.map((item, i) => (
                <VideoCard
                  key={i}
                  title="abc"
                  desc="abc"
                  num={i + 1}
                  lectureId="afadvczvc"
                  courseId={id}
                  deleteLectureButtonHandler={deleteLectureButtonHandler}
                  addLectureHandler={addLectureHandler}
                />
              ))}
            </Box>
            <Box>
              <form
                onSubmit={(e) => addLectureHandler(e, id, title, desc, video)}
              >
                <VStack spacing={"4"}>
                  <Heading
                    children="add lecture"
                    size="md"
                    textTransform={"uppercase"}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <Input
                    id="avatar"
                    accept="video/mp4"
                    required
                    type="file"
                    focusBorderColor="purple.300"
                    css={{
                      "&::file-selector-button": {
                        ...fileUploadCss,
                        color: "purple",
                      },
                    }}
                    onChange={changeVideoHandler}
                  />
                  {videoPrev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoPrev}
                    ></video>
                  )}
                  <Button w="full" colorScheme="purple" type="submit">
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

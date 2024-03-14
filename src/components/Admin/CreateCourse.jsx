import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import cursor from "../../assets/images/cursor.png";
import { fileUploadCss } from "../auth/Register";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [imgPrev, setImgPrev] = useState("");

  const categories = [
    "Web Dev",
    "App Dev",
    "Game Dev",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
  ];

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
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <form>
        <Container py="16">
          <Heading
            textTransform={"uppercase"}
            children="create course"
            my="16"
            textAlign={["center", "left"]}
          />
          <VStack m={"auto"} spacing={"8"}>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="description"
              type="text"
              focusBorderColor="purple.300"
            />
            <Input
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              placeholder="created by"
              type="text"
              focusBorderColor="purple.300"
            />
            <Select
              focusBorderColor="purple.300"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              id="avatar"
              accept="image/*"
              type="file"
              focusBorderColor="purple.300"
              css={{
                "&::file-selector-button": {
                  ...fileUploadCss,
                  color: "purple",
                },
              }}
              onChange={changeImageHandler}
            />
            {imgPrev && (
              <Image src={imgPrev} boxSize={"64"} objectFit={"contain"} />
            )}
            <Button w="full" colorScheme="purple" type="submit">
              Create
            </Button>
          </VStack>
        </Container>
      </form>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;

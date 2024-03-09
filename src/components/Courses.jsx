import React, { useState } from "react";
import {
  Container,
  Heading,
  Input,
  HStack,
  Button,
  Text,
  Stack,
  VStack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Course = ({
  views,
  title,
  imgSrc,
  id,
  addToPlayListHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image
        src={
          "https://images.pexels.com/photos/20167083/pexels-photo-20167083/free-photo-of-portrait-of-girl-with-hands-on-cheeks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        boxSize="60"
        objectFit="contain"
      />
      <Heading
        textAlign={["center", "left"]}
        maxW="200px"
        size="sm"
        fontFamily="sans-serif"
        noOfLines="3"
        children={title}
      />
      <Text children={description} noOfLines="2" />
      <HStack>
        <Text fontWeight="bold" textTransform="uppercase" children="Creator" />
        <Text fontFamily="body" textTransform="uppercase" children={creator} />
      </HStack>
      <Heading
        textAlign="center"
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={["column", "row"]} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch now</Button>
        </Link>
        <Link to={`/course/${id}`}>
          <Button
            variant="ghost"
            colorScheme="yellow"
            onClick={() => addToPlayListHandler(id)}
          >
            Add to playlist
          </Button>
        </Link>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const categories = [
    "Web Dev",
    "App Dev",
    "Game Dev",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
  ];
  const addToPlayListHandler = (e) => {
    console.log("add to playlist handler");
  };

  return (
    <Container minH="95vh" maxW="container.lg">
      <Heading children="All courses" m="8" textAlign="center" />
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search a course"
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX="auto"
        paddingY="8"
        css={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        {categories.map((item, index) => (
          <Button key={index} minW="60" onClick={() => setCategory(item)}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={["column", "row"]}
        flexWrap="wrap"
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Course
          title="sample"
          description="sample"
          views="23"
          imgSrc="sample"
          id="sample"
          creator="sample"
          lectureCount="2"
          addToPlayListHandler={addToPlayListHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;

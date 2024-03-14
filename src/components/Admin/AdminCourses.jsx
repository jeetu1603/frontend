import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import cursor from "../../assets/images/cursor.png";
import { RiDeleteBin7Fill } from "react-icons/ri";
import CourseModal from "./CourseModal";

const Row = ({ item, courseDetailsHandler, deleteButtonHandler }) => (
  <Tr>
    <Td>#{item._id}</Td>
    <Td>
      <Image src={item.poster.url} />
    </Td>
    <Td>{item.title}</Td>
    <Td textTransform={"uppercase"}>{item.category}</Td>
    <Td>{item.createdBy}</Td>
    <Td isNumeric>{item.views}</Td>
    <Td isNumeric>{item.numOfVideos}</Td>
    <Td isNumeric>
      <HStack justifyContent={"flex-end"}>
        <Button
          variant="outline"
          color="purple.500"
          onClick={() => courseDetailsHandler(item._id)}
        >
          View Lectures
        </Button>
        <Button
          color="purple.600"
          onClick={() => deleteButtonHandler(item._id)}
        >
          <RiDeleteBin7Fill />
        </Button>
      </HStack>
    </Td>
  </Tr>
);

const AdminCourses = () => {
  const courses = [
    {
      _id: "adfklj;ladf",
      title: "mern course",
      category: "web dev",
      poster: {
        url: "https://images.unsplash.com/photo-1542451313056-b7c8e626645f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
      },
      createdBy: "jeetu",
      views: 123,
      numOfVideos: 12,
    },
  ];
  const { isOpen, onClose, onOpen } = useDisclosure();
  const courseDetailsHandler = (courseId) => {
    onOpen();
  };
  const deleteButtonHandler = (courseId) => {};
  const deleteLectureButtonHandler = (courseId, lectureId) => {};
  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box p={["0", "16"]} overflowX={"auto"}>
        <Heading
          textTransform={"uppercase"}
          children="all users"
          my="16"
          textAlign={["center", "left"]}
        />
        <TableContainer w={["100vw", "full"]}>
          <Table variant="simple" size="lg">
            <TableCaption>all available courses in the db</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((item) => (
                <Row
                  key={item._id}
                  item={item}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id="adfhkzjvn"
          courseTitle="lajnvl;c"
          deleteLectureButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

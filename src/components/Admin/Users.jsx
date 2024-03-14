import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import cursor from "../../assets/images/cursor.png";
import { RiDeleteBin7Fill } from "react-icons/ri";

const Row = ({ item, updateHandler, deleteButtonHandler }) => (
  <Tr>
    <Td>#{item._id}</Td>
    <Td>{item.name}</Td>
    <Td>{item.email}</Td>
    <Td>{item.role}</Td>
    <Td>{item.subscription.status === "active" ? "Active" : "Not Active"}</Td>
    <Td isNumeric>
      <HStack justifyContent={"flex-end"}>
        <Button
          variant="outline"
          color="purple.500"
          onClick={() => updateHandler(item._id)}
        >
          Change Role
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

const Users = () => {
  const users = [
    {
      _id: "adfklj;ladf",
      name: "jeetu",
      email: "jeetu@gmail.com",
      role: "admin",
      subscription: { status: "active" },
    },
  ];
  const updateHandler = (userId) => {};
  const deleteButtonHandler = (userId) => {};

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
            <TableCaption>all available users in the db</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th isNumeric>Subscription</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((item) => (
                <Row
                  key={item._id}
                  item={item}
                  updateHandler={updateHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

import React from "react";
import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import cursor from "../../assets/images/cursor.png";
import Sidebar from "./Sidebar";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";

const Databox = ({ title, qty, qtyperc, profit }) => (
  <Box
    w={["full", "20%"]}
    boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
    p="8"
    borderRadius={"lg"}
  >
    <Text children={title} />
    <HStack spacing={6}>
      <Text fontSize={"2xl"} fontWeight={"bold"} children={qty} />
      <HStack>
        <Text children={qtyperc + "%"} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text children={"since last month"} opacity={0.6} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py="4" px={[0, 20]}>
    <Heading size="sm" children={title} mb="2" />
    <HStack w="full" alignItems={"center"}>
      <Text children={profit ? "0%" : `-${value}%`} />
      <Progress w={"full"} value={profit ? value : 0} colorScheme="purple" />
      <Text children={`${value > 100 ? 100 : value}%`} />
    </HStack>
  </Box>
);

const Dashboard = () => {
  return (
    <Grid
      css={{ cursor: `url(${cursor}),default` }}
      minH={"100vh"}
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box boxSizing="border-box" py="16" px={[4, 0]}>
        <Text
          textAlign={"center"}
          opacity={0.5}
          children={`last change was on ${String(new Date()).split("G")[0]}`}
        />
        <Heading
          children="dashboard"
          ml={[0, 16]}
          mb="16"
          textAlign={["center", "left"]}
        />
        <Stack
          direction={["column", "row"]}
          minH={24}
          justifyContent={"space-evenly"}
        >
          <Databox title="views" qty="123" qtyperc="30" profit="true" />
          <Databox title="users" qty="123" qtyperc="30" profit="true" />
          <Databox title="subscription" qty="123" qtyperc="30" profit="true" />
        </Stack>
        <Box
          m={[0, 16]}
          borderRadius={"lg"}
          p={[0, 16]}
          mt={[4, 16]}
          boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
        >
          <Heading
            textAlign={["center", "left"]}
            size={"md"}
            children="views graph"
            pt={[8, 0]}
            ml={[0, 16]}
          />
        </Box>
        <Grid templateColumns={["1fr", "2fr 1fr"]}>
          <Box p="4">
            <Heading
              textAlign={["center", "left"]}
              size={"md"}
              children="progress bar"
              my="8"
              ml={[0, 16]}
            />
            <Box>
              <Bar title="views" value="30" profit="true" />
              <Bar title="users" value="78" profit="true" />
              <Bar title="subscription" value="20" profit="false" />
            </Box>
          </Box>
          <Box p={[0, 16]} boxSizing="border-box" py="4">
            <Heading textAlign={"center"} size={"md"} mb="4" children="users" />
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;

import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <VStack spacing={8} p={16} boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}>
      <Link to="/admin/dashboard">
        <Button
          fontSize={"larger"}
          variant={"ghost"}
          colorScheme={location.pathname === "/admin/dashboard" ? "purple" : ""}
        >
          <RiDashboardFill style={{ margin: "4px" }} />
          Dashboard
        </Button>
      </Link>
      <Link to="/admin/courses">
        <Button
          fontSize={"larger"}
          variant={"ghost"}
          colorScheme={location.pathname === "/admin/courses" ? "purple" : ""}
        >
          <RiEyeFill style={{ margin: "4px" }} />
          Courses
        </Button>
      </Link>
      <Link to="/admin/users">
        <Button
          fontSize={"larger"}
          variant={"ghost"}
          colorScheme={location.pathname === "/admin/users" ? "purple" : ""}
        >
          <RiUser3Fill style={{ margin: "4px" }} />
          Users
        </Button>
      </Link>
      <Link to="/admin/createcourse">
        <Button
          fontSize={"larger"}
          variant={"ghost"}
          colorScheme={
            location.pathname === "/admin/createcourse" ? "purple" : ""
          }
        >
          <RiAddCircleFill style={{ margin: "4px" }} />
          Create Course
        </Button>
      </Link>
    </VStack>
  );
};

export default Sidebar;

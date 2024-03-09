import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { RiDashboardFill, RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = { role: "admin" };
  const logoutHandler = () => {
    console.log("logout");
    onClose();
  };

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width="12"
        height="12"
        rounded="full"
        position="fixed"
        top="6"
        left="6"
        zIndex="overlay"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter="blur(3px)" />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Course Bundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing="4" alignItems="flex-start">
              <Link onClick={onClose} to="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link onClick={onClose} to="/courses">
                <Button variant="ghost">Browse all courses</Button>
              </Link>
              <Link onClick={onClose} to="/request">
                <Button variant="ghost">Request a course</Button>
              </Link>
              <Link onClick={onClose} to="/contact">
                <Button variant="ghost">Contact us</Button>
              </Link>
              <Link onClick={onClose} to="/about">
                <Button variant="ghost">About</Button>
              </Link>
            </VStack>
            <HStack
              justifyContent="space-evenly"
              position="absolute"
              bottom="2rem"
              width="80%"
            >
              {isAuthenticated ? (
                <>
                  <VStack>
                    <HStack>
                      <Link onClick={onClose} to="/profile">
                        <Button variant="ghost" colorScheme="yellow">
                          Profile
                        </Button>
                      </Link>
                      <Button variant="ghost" onClick={logoutHandler}>
                        <RiLogoutBoxLine />
                        Logout
                      </Button>
                    </HStack>
                    {user && user.role === "admin" && (
                      <Link onClick={onClose} to="/admin/dashboard">
                        <Button colorScheme="purple" variant="ghost">
                          <RiDashboardFill style={{ margin: "4px" }} />
                          Dashboard
                        </Button>
                      </Link>
                    )}
                  </VStack>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={onClose}>
                    <Button colorScheme="yellow">Login</Button>
                  </Link>
                  <p>OR</p>
                  <Link to="/register" onClick={onClose}>
                    <Button colorScheme="yellow">Sign up</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

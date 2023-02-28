import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import {
  Button,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import theme from "../../styles/theme";
import {
  NavLinkText,
  NavbarSearchSittersButton,
  NavbarLogoButton,
  NavbarStyle,
  SidebarLinkText,
  SidebarLogo,
  SidebarLine,
  ProfileImage,
  NavbarFunction,
  SidebarFunction,
} from "./styledNavbar";
import RedPoint from "../assets/RedPoint";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function changeMenuIsOpenStatus() {
    setMenuIsOpen((preIsOpenStatus: boolean) => {
      return !preIsOpenStatus;
    });
  }

  function changeIsLoggedStatus() {
    setIsLoggedIn((prevIsLoggedStatus: boolean) => {
      return !prevIsLoggedStatus;
    });
  }

  return (
    <NavbarStyle>
      <SidebarFunction>
        {!isLoggedIn && (
          <HStack>
            <Button colorScheme={theme.colors.background.primary} onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <NavLink to="/register">
                  <SidebarLinkText>Become a Sitter</SidebarLinkText>
                </NavLink>
                <NavLink to="/register">
                  <SidebarLinkText>Sign up</SidebarLinkText>
                </NavLink>
                <NavLink to="/login" onClick={changeIsLoggedStatus}>
                  <SidebarLinkText>Login</SidebarLinkText>
                </NavLink>
                <SidebarLine />
                <NavLink to="/adminPage">
                  <SidebarLinkText>Admin</SidebarLinkText>
                </NavLink>
                <SidebarLogo>
                  <Heading className="SidebarLogo__heading__style">PetNanny</Heading>
                </SidebarLogo>
              </DrawerContent>
            </Drawer>
          </HStack>
        )}

        {isLoggedIn && (
          <HStack>
            <Button colorScheme={theme.colors.background.primary} onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader>
                  <ProfileImage size="xl" name="M" src="" bg={`${theme.colors.background.grey}`} />
                </DrawerHeader>
                <SidebarLinkText statusColor>Mark</SidebarLinkText>
                <NavLink to="#">
                  <SidebarLinkText>Dashboard</SidebarLinkText>
                </NavLink>
                <NavLink to="#">
                  <SidebarLinkText>Messages</SidebarLinkText>
                </NavLink>
                <NavLink to="#">
                  <SidebarLinkText>Profile</SidebarLinkText>
                </NavLink>
                <NavLink to="#">
                  <SidebarLinkText>Review</SidebarLinkText>
                </NavLink>
                <NavLink
                  to="#"
                  onClick={() => {
                    changeIsLoggedStatus();
                  }}
                >
                  <SidebarLinkText>Logout</SidebarLinkText>
                </NavLink>
                <SidebarLogo>
                  <Heading className="SidebarLogo__heading__style">PetNanny</Heading>
                </SidebarLogo>
              </DrawerContent>
            </Drawer>
          </HStack>
        )}
      </SidebarFunction>

      <NavbarLogoButton>
        <NavLink to="/">
          <Heading className="navLogoButton__heading__style">PetNanny</Heading>
        </NavLink>
      </NavbarLogoButton>

      <Spacer />

      <NavbarFunction>
        <NavbarSearchSittersButton>
          <Text className="navSearchSittersButton__text__color">Search Sitters</Text>
        </NavbarSearchSittersButton>

        {!isLoggedIn && (
          <HStack spacing="1.5rem">
            <NavLink to="/register">
              <NavLinkText>Become a Sitter</NavLinkText>
            </NavLink>
            <NavLink to="/register">
              <NavLinkText>Sign up</NavLinkText>
            </NavLink>
            <NavLink to="/login" onClick={changeIsLoggedStatus}>
              <NavLinkText>Login</NavLinkText>
            </NavLink>
            <NavLink to="/adminPage">
              <NavLinkText>Admin</NavLinkText>
            </NavLink>
          </HStack>
        )}

        {isLoggedIn && (
          <HStack height="100%" spacing="1rem">
            <HStack height="100%" spacing="0.5rem">
              <Menu>
                <ProfileImage name="M" src="" bg={`${theme.colors.background.grey}`} />
                <MenuButton
                  as={Button}
                  rightIcon={menuIsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  colorScheme="#5CACE2"
                  height="80%"
                  padding="0em"
                  onClick={changeMenuIsOpenStatus}
                >
                  {`Mark  `}
                  <RedPoint />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={changeMenuIsOpenStatus}>
                    <NavLink to="#">Dashboard</NavLink>
                  </MenuItem>
                  <MenuItem onClick={changeMenuIsOpenStatus}>
                    <NavLink to="#">Messages</NavLink>
                  </MenuItem>
                  <MenuItem onClick={changeMenuIsOpenStatus}>
                    <NavLink to="#">Profile</NavLink>
                  </MenuItem>
                  <MenuItem onClick={changeMenuIsOpenStatus}>
                    <NavLink to="#">Review</NavLink>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      changeIsLoggedStatus();
                      changeMenuIsOpenStatus();
                    }}
                  >
                    <NavLink to="#">Logout</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            <Button height="100%" colorScheme="#5CACE2">
              <Icon as={AiOutlineMail} boxSize={6} color="white" />
            </Button>
            <Button height="100%" colorScheme="#5CACE2">
              <Icon as={AiOutlineBell} boxSize={6} color="white" />
            </Button>
          </HStack>
        )}
      </NavbarFunction>
    </NavbarStyle>
  );
};

export default Navbar;

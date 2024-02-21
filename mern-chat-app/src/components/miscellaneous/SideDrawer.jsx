/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";
import SearchDrawer from "./SearchDrawer";
const SideDrawer = ({ user }) => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/", { replace: true });
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        w="100%"
        p="5px 10px 5px 10px"
        borderRadius="10px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <SearchDrawer user={user}>
            <IoIosSearch color="white" />
            <Text display={{ base: "none", md: "flex" }} color="white" px={4}>
              Search User
            </Text>
          </SearchDrawer>
        </Tooltip>
        <Text fontSize="3xl" color="white" fontFamily="Poppins">
          Create Moments
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon textColor="white" fontSize="2xl" m={1} />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} p={1} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user?.name}
                src={user?.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logOutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;

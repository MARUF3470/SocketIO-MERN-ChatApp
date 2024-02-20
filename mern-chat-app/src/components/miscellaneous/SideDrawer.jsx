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
const SideDrawer = ({ user }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  console.log(user);
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="transparent"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="2px"
        borderRadius="10px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <IoIosSearch color="white" />
            <Text display={{ base: "none", md: "flex" }} color="white" px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Poppins">
          Create Moments
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon textColor="white" fontSize="2xl" m={1} />
            </MenuButton>
            {/* <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList> */}
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
              <MenuItem>My Profile</MenuItem>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;

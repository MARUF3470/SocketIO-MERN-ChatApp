/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import { ChatState } from "../../context/ChatProvider";
import SingleChat from "./SingleChat";
import img from "../../assets/e8d94e1e8b6b530ad315e9385290141b.jpg";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChatData } = ChatState();
  console.log("sdasdasd", selectedChatData);
  return (
    <Box
      display={{ base: selectedChatData ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      bgImage={img}
      bgSize={"cover"}
      bgPos={"center"}
      color={"white"}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;

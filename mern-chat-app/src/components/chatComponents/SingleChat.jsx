import { Box, IconButton, Text } from "@chakra-ui/react";
import { ChatState } from "../../context/ChatProvider";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getSender, getSenderInfo } from "../../config/ChatLogics";
import ProfileModal from "../miscellaneous/ProfileModal";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChatData, setSelectedChatData } = ChatState();
  return (
    <>
      {selectedChatData ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChatData("")}
            />
            {!selectedChatData.isGroupChat ? (
              <>
                {getSender(user, selectedChatData.users)}
                <ProfileModal
                  user={getSenderInfo(user, selectedChatData.users)}
                />
              </>
            ) : (
              selectedChatData.chatName.toUpperCase()
            )}
          </Text>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="3xl" pb={3} color={"whitesmoke"}>
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;

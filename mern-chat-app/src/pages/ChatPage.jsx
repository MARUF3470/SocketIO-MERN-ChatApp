import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import "./Chatpage.css";
import MyChats from "../components/chatComponents/MyChats";
import ChatBox from "../components/chatComponents/ChatBox";
import { useState } from "react";
const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div className="chatPage" style={{ width: "100%", padding: "5px" }}>
      {user && <SideDrawer user={user}></SideDrawer>}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain}></MyChats>}
        {user && (
          <ChatBox
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
          ></ChatBox>
        )}
      </Box>
    </div>
  );
};

export default ChatPage;

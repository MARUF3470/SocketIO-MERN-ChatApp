import { Box } from "@chakra-ui/react";
import { ChatState } from "../context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import "./Chatpage.css";
import MyChats from "../components/chatComponents/MyChats";
import ChatBox from "../components/chatComponents/ChatBox";
const ChatPage = () => {
  const { user } = ChatState();
  return (
    <div className="chatPage" style={{ width: "100%", padding: "5px" }}>
      {user && <SideDrawer user={user}></SideDrawer>}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats></MyChats>}
        {user && <ChatBox></ChatBox>}
      </Box>
    </div>
  );
};

export default ChatPage;

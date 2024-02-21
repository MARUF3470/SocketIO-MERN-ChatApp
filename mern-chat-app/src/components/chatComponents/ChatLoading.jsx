import { Skeleton, Stack } from "@chakra-ui/react";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton startColor="green.500" endColor="blue.500" height="20px" />
    </Stack>
  );
};

export default ChatLoading;

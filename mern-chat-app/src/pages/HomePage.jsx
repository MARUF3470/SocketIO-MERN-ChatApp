import Login from "../components/authentication/Login";
import Registration from "../components/authentication/Registration";
import "./HomePage.css";
import {
  Container,
  Box,
  Text,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
} from "@chakra-ui/react";
const HomePage = () => {
  return (
    <div className="HomePage">
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg={"white"}
          w="100%"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="2xl" fontFamily="Poppins" textAlign="center">
            Create Moments
          </Text>
        </Box>
        <Box
          bg="white"
          p={3}
          borderRadius="lg"
          borderWidth="1px"
          w="100%"
          mt={5}
        >
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Registration />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;

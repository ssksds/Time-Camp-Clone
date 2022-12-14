import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Tabs,
  TabPanel,
  TabList,
  Tab,
  TabPanels,
  Text,
} from "@chakra-ui/react";
import React from "react";

function YourTimeCostsMore() {
  return (
    <>
      <Tabs colorScheme={"whatsapp"} variant="solid-rounded">
        <Flex align={"center"} direction="column" gap={"4"}>
          <Center>
            <Flex align={"center"} direction="column" gap={"10"}>
              <Text color={"#25CF60"}>PRICING</Text>
              <Heading>Your time costs more</Heading>
              <Text>
                Use free forever plan or subscribe to a paid plan to get more
                feactures!
              </Text>
              <TabList>
                <Flex>
                  <Tab borderRadius={"full"}> Annually 10% discount</Tab>
                  <Tab borderRadius={"full"}>Monthly</Tab>
                </Flex>
              </TabList>
            </Flex>
          </Center>
          <TabPanels>
            <TabPanel>
              <SimpleGrid
                border={"3px"}
                columns={["1", "2", "3", "4"]}
                gap="10"
                pl={["1", "1", "10", "28"]}
                pr={["1", "1", "10", "28"]}
              >
                <Box>
                  <Flex
                    p={"4"}
                    direction={"column"}
                    borderRadius={"2xl"}
                    border="2px"
                    align={"center"}
                    minW={["230px", "250px", "330px", "255px"]}
                    minH={["330px", "440px", "550px"]}
                    gap={"7"}
                  >
                    <Heading color={"#25CF60"}>Free</Heading>
                    <Text>Free forever plan</Text>
                    <hr
                      style={{
                        height: "2px",
                        width: "100%",
                        color: "#25CF60",
                        backgroundColor: "#25CF60",
                      }}
                    />
                    <Text>
                      Measure on which activities you spend time while working
                    </Text>
                    <Button
                      size={"lg"}
                      minW={"90%"}
                      borderRadius={"full"}
                      bg="#25CF60"
                      color={"white"}
                      _hover={{ bgColor: "#1da44c" }}
                    >
                      Join for free
                    </Button>
                    <ul>
                      <li>Unlimited users</li>
                      <li>Unlimited Projects & tasks</li>
                      <li>Desktop & Mobile app </li>
                    </ul>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    p={"4"}
                    direction={"column"}
                    borderRadius={"2xl"}
                    border="2px"
                    align={"center"}
                    minW={["230px", "250px", "330px", "255px"]}
                    minH={["330px", "440px", "550px"]}
                    gap={"7"}
                  >
                    <Heading>$ 6.3</Heading>
                    <Text>user/mo</Text>
                    <hr
                      style={{
                        height: "2px",
                        width: "100%",
                        color: "#25CF60",
                        backgroundColor: "#25CF60",
                      }}
                    />
                    <Text>Be more transparent and gain customers trust</Text>
                    <Button
                      size={"lg"}
                      minW={"90%"}
                      borderRadius={"full"}
                      bg="#25CF60"
                      color={"white"}
                      _hover={{ bgColor: "#1da44c" }}
                    >
                      Start your free trial
                    </Button>
                    <ul>
                      <li>Time rounding</li>
                      <li>Custom report</li>
                      <li>Hide time from users </li>
                      <li>Management roles</li>
                      <li>Team productivity tracking</li>
                      <li>XLS reports export</li>
                      <li>Unlimited integrations</li>
                      <li>Billable time & budgeting</li>
                    </ul>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    color={"white"}
                    bg="#25CF60"
                    p={"4"}
                    direction={"column"}
                    borderRadius={"2xl"}
                    border="2px"
                    align={"center"}
                    minW={["230px", "250px", "330px", "255px"]}
                    minH={["330px", "440px", "550px"]}
                    gap={"8"}
                  >
                    <Heading>$ 9</Heading>
                    <Text>user/mo</Text>
                    <hr
                      style={{
                        height: "2px",
                        width: "100%",
                        color: "#FFFFFF",
                        backgroundColor: "#FFFFFF",
                      }}
                    />
                    <Text>Get full control over your buiseness</Text>
                    <Button
                      size={"lg"}
                      minW={"90%"}
                      borderRadius={"full"}
                      bg="#ffffff"
                      color={"#25CF60"}
                      _hover={{ bgColor: "#ffffff" }}
                    >
                      Start your free trial
                    </Button>
                    <ul>
                      <li>Custom user roles</li>
                      <li>Billing rates</li>
                      <li>Invoicing</li>
                      <li>Timesheet approvals</li>
                      <li>Screenshots</li>
                      <li>SSO login</li>
                      <li>2-factor authentication</li>
                    </ul>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    p={"4"}
                    direction={"column"}
                    borderRadius={"2xl"}
                    border="2px"
                    align={"center"}
                    minW={["230px", "250px", "330px", "255px"]}
                    minH={["330px", "440px", "550px"]}
                    gap={"7"}
                  >
                    <Text color={"#25CF60"}>ENTERPRISE</Text>

                    <Heading>Lets discuss</Heading>
                    <Text>Free forever plan</Text>
                    <hr
                      style={{
                        height: "2px",
                        width: "100%",
                        color: "#25CF60",
                        backgroundColor: "#25CF60",
                      }}
                    />
                    <Text>Customize TimeCamp to your custom needs</Text>
                    <Button
                      size={"lg"}
                      minW={"90%"}
                      borderRadius={"full"}
                      bg="#25CF60"
                      color={"white"}
                      _hover={{ bgColor: "#1da44c" }}
                    >
                      Contact us
                    </Button>

                    <Text fontWeight={"500"}>Everything in Pro Plus</Text>
                    <ul>
                      <li>Personalized training</li>
                      <li>Private cloud inplementation</li>
                      <li>Self hosted server</li>
                    </ul>
                  </Flex>
                </Box>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                border={"3px"}
                columns={["1", "2", "3", "4"]}
                gap="10"
                pl={["1", "1", "10", "28"]}
                pr={["1", "1", "10", "28"]}
              >
                <Box>
                  <Flex
                    p={"4"}
                    direction={"column"}
                    borderRadius={"2xl"}
                    border="2px"
                    align={"center"}
                    minW={["330px", "255px"]}
                    minH={["330px", "440px", "550px"]}
                    gap={"7"}
                  >
                    <Heading color={"#25CF60"}>Free</Heading>
                    <Text>Free forever plan</Text>
                    <hr
                      style={{
                        height: "2px",
                        width: "100%",
                        color: "#25CF60",
                        backgroundColor: "#25CF60",
                      }}
                    />
                    <Text>
                      Measure on which activities you spend time while working
                    </Text>
                    <Button
                      size={"lg"}
                      minW={"90%"}
                      borderRadius={"full"}
                      bg="#25CF60"
                      color={"white"}
                    >
                      Join for free
                    </Button>
                    <ul>
                      <li>Unlimited users</li>
                      <li>Unlimited Projects & tasks</li>
                      <li>Desktop & Mobile app </li>
                    </ul>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    p={"4"}
                    direction={"column"}
                    borderRadius={"2xl"}
                    border="2px"
                    align={"center"}
                    minW={["330px", "255px"]}
                    minH={["330px", "440px", "550px"]}
                    gap={"7"}
                  >
                    <Heading>$ 7</Heading>
                    <Text>user/mo</Text>
                    <hr
                      style={{
                        height: "2px",
                        width: "100%",
                        color: "#25CF60",
                        backgroundColor: "#25CF60",
                      }}
                    />
                    <Text>Be more transparent and gain customers trust</Text>
                    <Button
                      size={"lg"}
                      minW={"90%"}
                      borderRadius={"full"}
                      bg="#25CF60"
                      color={"white"}
                    >
                      Start your free trial
                    </Button>
                    <ul>
                      <li>Time rounding</li>
                      <li>Custom report</li>
                      <li>Hide time from users </li>
                      <li>Management roles</li>
                      <li>Team productivity tracking</li>
                      <li>XLS reports export</li>
                      <li>Unlimited integrations</li>
                      <li>Billable time & budgeting</li>
                    </ul>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    color={"white"}
                    bg="#25CF60"
                    p={"4"}
                    direction={"column"}
                    borderRadius={"2xl"}
                    border="2px"
                    align={"center"}
                    minW={["330px", "255px"]}
                    minH={["330px", "440px", "550px"]}
                    gap={"8"}
                  >
                    <Heading>$ 10</Heading>
                    <Text>user/mo</Text>
                    <hr
                      style={{
                        height: "2px",
                        width: "100%",
                        color: "#FFFFFF",
                        backgroundColor: "#FFFFFF",
                      }}
                    />
                    <Text>Get full control over your buiseness</Text>
                    <Button
                      size={"lg"}
                      minW={"90%"}
                      borderRadius={"full"}
                      bg="white"
                      color={"#25CF60"}
                    >
                      Start your free trial
                    </Button>
                    <ul>
                      <li>Custom user roles</li>
                      <li>Billing rates</li>
                      <li>Invoicing</li>
                      <li>Timesheet approvals</li>
                      <li>Screenshots</li>
                      <li>SSO login</li>
                      <li>2-factor authentication</li>
                    </ul>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    p={"4"}
                    direction={"column"}
                    borderRadius={"2xl"}
                    border="2px"
                    align={"center"}
                    minW={["330px", "255px"]}
                    minH={["330px", "440px", "550px"]}
                    gap={"7"}
                  >
                    <Text color={"#25CF60"}>ENTERPRISE</Text>

                    <Heading>Lets discuss</Heading>
                    <Text>Free forever plan</Text>
                    <hr
                      style={{
                        height: "2px",
                        width: "100%",
                        color: "#25CF60",
                        backgroundColor: "#25CF60",
                      }}
                    />
                    <Text>Customize TimeCamp to your custom needs</Text>
                    <Button
                      size={"lg"}
                      minW={"90%"}
                      borderRadius={"full"}
                      bg="#25CF60"
                      color={"white"}
                    >
                      Contact us
                    </Button>

                    <Text fontWeight={"500"}>Everything in Pro Plus</Text>
                    <ul>
                      <li>Personalized training</li>
                      <li>Private cloud inplementation</li>
                      <li>Self hosted server</li>
                    </ul>
                  </Flex>
                </Box>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Flex>
      </Tabs>
    </>
  );
}

export default YourTimeCostsMore;

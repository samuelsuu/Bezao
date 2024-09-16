import React from "react";
import { Box, Button, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import Cardy from "./Cardy";

function Menu() {
  const [activeTab, setActiveTab] = useState("Recomended");
  const tabs = [
    "All",
    "Rice",
    "Beans",
    "Fries",
    "Swallow",
    "Others",
  ];

  return (
    <Box bg={'#FAFAFA'} py={{ base: 6, md: 10 }} px={{ base: 4, md: 16, lg: 48 }}>
      <Text color={'#DA3743'} fontSize={'14px'} fontWeight={700}>MENU</Text>

      <Flex
        justifyContent={'space-between'}
        alignItems={{ base: "flex-start", md: "center" }}
        flexDirection={{ base: "column", md: "row" }}
        mb={6}
      >
        <Text
          fontSize={{ base: '28px', md: '36px', lg: '42px' }}
          fontWeight={700}
          mb={{ base: 4, md: 0 }}
        >
          Current menu
        </Text>

        <Wrap
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          wrap="wrap"
          border="black 1px solid"
          px={4}
          py={2}
          borderRadius={10}
        >
          {tabs.map((tab) => (
            <WrapItem key={tab}>
              <Text
                borderBottom={
                  activeTab === tab ? "#DA3743 3px solid" : "transparent 3px solid"
                }
                w={{ base: "auto", md: "70px" }} // Auto width on mobile, fixed width on larger screens
                cursor="pointer"
                fontSize={{ base: "sm", md: "md" }} // Smaller font size on mobile
                whiteSpace="nowrap" // Prevent text from wrapping
                onClick={() => setActiveTab(tab)}
                fontWeight={500}
                textAlign="center"
              >
                {tab}
              </Text>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>

      <Cardy />

      <Button
        borderRadius={'30px'}
        bg={'#DA3743'}
        color={'white'}
        mx={'auto'} // Centers the button horizontally
        display={'block'} // Required for mx to work
        my={8}
        fontSize={{ base: '14px', md: '16px' }}
        fontWeight={500}
        py={6} // Vertical padding
        px={8} // Horizontal padding
      >
        Full Menu
      </Button>
    </Box>
  );
}

export default Menu;

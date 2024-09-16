import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "@chakra-ui/react";
import Av from "../assets/Avatar.svg";
import Ic from "../assets/Icon.svg";

function Testimony() {
  return (
    <Box bg={"rgba(218,55,67, 0.5)"} py={{ base: 10, md: 20 }} px={{ base: 6, md: 20, lg: 40 }}>
      <Flex 
        justifyContent={"space-between"} 
        alignItems={"center"} 
        gap={10} 
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Left Section */}
        <Box mb={{ base: 8, md: 0 }}>
          <Heading mb={4} fontSize={{ base: "24px", md: "32px", lg: "40px" }}>
            What our <Heading display={"inline-block"}>customers say</Heading> about us
          </Heading>
          <Text lineHeight={"26px"} fontSize={{ base: "sm", md: "md" }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum.
          </Text>
        </Box>

        {/* Right Section */}
        <Box 
          bg={"rgba(255,255,255, 0.7)"} 
          p={{ base: 6, md: 10 }} 
          w={{ base: "100%", md: "80%", lg: "150%" }} 
          borderRadius={20}
        >
          <Flex justifyContent={"flex-end"} mb={4}>
            <img src={Ic} alt="Icon" />
          </Flex>

          <Flex 
            justifyContent={"space-between"} 
            alignItems={"center"} 
            gap={{ base: 4, md: 10, lg: 20 }} 
            flexDirection={{ base: "column", md: "row" }}
          >
            {/* Avatar and User Info */}
            <Box textAlign={"center"} mb={{ base: 6, md: 0 }}>
              <Avatar name="John Samson" src={Av} w={"100px"} h={"100px"} />
              <Heading fontSize={"20px"} mt={4}>John Samson</Heading>
              <Text fontSize={"12px"}>Enugu, Nigeria</Text>
            </Box>

            {/* Testimonial Text */}
            <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} textAlign={{ base: "center", md: "left" }}>
              White dwarf a still more glorious dawn awaits tingling of the
              spine emerged into consciousness Vangelis shores of the cosmic
              ocean. Tendrils of gossamer clouds kindling the energy hidden in
              matter concept of the number one permanence.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Testimony;

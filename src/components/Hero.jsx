import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import Heroo from "../assets/Hero.svg";
import Com from "../assets/Com.png";

function Hero() {
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        mx={40}
        gap={4}
        mt={20}
      >
        <Box>
          <Heading fontSize={"64px"} fontWeight={700}>
            Delicious meals at your convenience
          </Heading>
          <Text fontSize={"18px"} fontWeight={400}>
            Order your meals from us and we will have it{" "}
            <Text>delivered at your doorstep.</Text>{" "}
          </Text>
          <Button
            borderRadius={20}
            bg={"#DA3743"}
            color={"white"}
            px={20}
            mt={10}
            fontSize={"16px"}
            fontWeight={500}
          >
            Get Started
          </Button>
        </Box>
        <Box>
          <img src={Heroo} />
        </Box>
      </Flex>
      <Flex justifyContent={"flex-end"} mr={20}>
        <img src={Com} />
      </Flex>
    </Box>
  );
}

export default Hero;

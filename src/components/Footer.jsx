import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo.svg";
import fb from "../assets/fb.svg";
import ins from "../assets/in.svg";
import tw from "../assets/tw.svg";

function Footer() {
  return (
    <Box bg={"#FAFAFA"} pt={{ base: "50px", md: "100px" }} pb={"40px"}>
      <Flex
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center", md: "flex-start" }}
        flexDirection={{ base: "column", md: "row" }}
        px={{ base: 6, md: 10, lg: 40 }}
        mb={{ base: 10, md: 0 }}
      >
        <img src={img} height={"60px"} alt="Logo" />

        <Flex
          gap={{ base: 10, md: 40 }}
          flexDirection={{ base: "column", md: "row" }}
          pt={{ base: 6, md: 0 }}
        >
          <Grid textAlign={{ base: "center", md: "left" }}>
            <Text fontWeight={700} fontSize={"16px"} mb={2}>
              Company
            </Text>
            <Link to="" style={{ fontSize: "16px", fontWeight: "400" }}>
              Blog
            </Link>
            <Link to="" style={{ fontSize: "16px", fontWeight: "400" }}>
              About Us
            </Link>
            <Link to="" style={{ fontSize: "16px", fontWeight: "400" }}>
              Contact Us
            </Link>
          </Grid>

          <Grid textAlign={{ base: "center", md: "left" }}>
            <Text fontWeight={700} fontSize={"16px"} mb={2}>
              Services
            </Text>
            <Link to="" style={{ fontSize: "16px", fontWeight: "400" }}>
              FAQs
            </Link>
            <Link to="" style={{ fontSize: "16px", fontWeight: "400" }}>
              Our Menu
            </Link>
          </Grid>
        </Flex>
      </Flex>

      <hr />

      <Flex
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row" }}
        px={{ base: 6, md: 10, lg: 20 }}
        py={10}
        gap={{ base: 6, md: 0 }}
      >
        <Text fontWeight={400} fontSize={"12px"} textAlign={{ base: "center", md: "left" }}>
          © 2022 Meals. All rights reserved.
        </Text>

        <Flex gap={6} justifyContent={{ base: "center", md: "flex-end" }}>
          <img src={fb} alt="Facebook" style={{ cursor: 'pointer' }} />
          <img src={ins} alt="Instagram" style={{ cursor: 'pointer' }} />
          <img src={tw} alt="Twitter" style={{ cursor: 'pointer' }} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;

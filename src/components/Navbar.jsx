import React, { useState } from "react";
import { Flex, Box, IconButton, Button, Slide } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../assets/Logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      width="100%"
      bg="white"
      boxShadow="md"
      py={4}
      px={{ base: 4, md: 10, lg: 40 }}
    >
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        {/* Logo and Menu */}
        <Flex alignItems="center" gap={7}>
          <img src={Logo} alt="Logo" />
          <Box display={{ base: "none", md: "flex" }} pl={10} gap={7}>
            <Link to="">Home</Link>
            <Link to="">Menu</Link>
            <Link to="">Meal Plans</Link>
          </Box>
        </Flex>

        {/* Search, Cart, and Account Links */}
        <Flex
          alignItems="center"
          gap={7}
          display={{ base: "none", md: "flex" }}
        >
          <CiSearch />
          <MdOutlineShoppingCart />
          <Link to="">Sign In</Link>
          <Button
            borderRadius={20}
            bg="#DA3743"
            color="white"
            fontSize="16px"
            fontWeight={500}
          >
            Create Account
          </Button>
        </Flex>

        {/* Hamburger Menu for Mobile */}

        <Flex gap={2}>
          <IconButton
            display={{ base: "block", md: "none" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            bg="transparent"
          />

          {/* <MdOutlineShoppingCart /> */}
        </Flex>
      </Flex>

      {/* Mobile Menu - Slide from the right */}
      <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          bg="white"
          h="100vh"
          pos="fixed"
          top="0"
          right="0"
          w="300px"
          shadow="md"
          display={{ base: "block", md: "none" }}
          p={4}
        >
          {/* Close Icon at the top-right */}
          <Flex justifyContent="flex-end" mb={4}>
            <IconButton
              icon={<CloseIcon />}
              aria-label="Close Menu"
              onClick={toggleMenu}
              bg="transparent"
            />
          </Flex>

          {/* Buttons in Flex mode */}
          <Flex gap={4} mb={6}>
            <Button
              borderRadius={20}
              bg="#DA3743"
              color="white"
              fontSize="16px"
              fontWeight={500}
              onClick={toggleMenu}
              flex="1"
            >
              Create Account
            </Button>

            <Button
              borderRadius={20}
              bg="#fff"
              color="black"
              fontSize="16px"
              border={"2px solid red"}
              fontWeight={500}
              onClick={toggleMenu}
              flex="1"
            >
              Sign In
            </Button>
          </Flex>

          {/* Navigation Links */}
          <Flex direction="column" gap={4}>
            <Link to="" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="" onClick={toggleMenu}>
              Menu
            </Link>
            <Link to="" onClick={toggleMenu}>
              Meal Plans
            </Link>
          </Flex>
        </Box>
      </Slide>
    </Box>
  );
}

export default Navbar;

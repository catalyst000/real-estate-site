import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Link,
  HStack,
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const NavBar = (sectionId) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
const handleLinkClick = (sectionId) => {
  onClose(); // Close drawer first
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  }, 400); // wait a bit for Drawer to close (adjust if needed)
};


  return (
    <Box
      bg="transparent"
      color="white"
      w="100%"
      h="60px"
      px={4}
      py={3}
      borderRadius="30px"
    >
      <Flex align="center" justify="space-between">
        {/* Left icon or logo */}
        <Image src="/logo.png" alt="Logo" h="40px" w="120px" />
        {/* Center links (hidden on mobile) */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          justify="center"
          flex="1"
        >
          <Link href="#hero-section" _hover={{ color: "yellow" }}>
            Home
          </Link>
          <Link href="#about-section" _hover={{ color: "yellow" }}>
            About
          </Link>
          <Link href="#services-section" _hover={{ color: "yellow" }}>
            Services
          </Link>
          <Link href="#contact-button" _hover={{ color: "yellow" }}>
            Contact
          </Link>
        </HStack>

        {/* Hamburger icon (only on mobile) */}
        <IconButton
          icon={<FaBars />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="ghost"
          color="black"
          _hover={{ bg: "gray.700" }}
          aria-label="Open Menu"
        />
      </Flex>

      {/* Drawer (popup menu on mobile) */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white" opacity="1" color="black" w="70%">
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} mt={12} align="start">
              <Link onClick={() => handleLinkClick("hero-section")}>
                Home
              </Link>
              <Link  onClick={() => handleLinkClick("about-section")}>
                About
              </Link>
              <Link   onClick={() => handleLinkClick("services-section")}>
                Services
              </Link>
              <Link  onClick={() => handleLinkClick("contact-button")}>
                Contact
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;

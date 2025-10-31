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

const NavBar = () => { 
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="tramsparent" color="white" w="100%" h="60px"px={4} py={3} borderRadius="30px">
      <Flex align="center" justify="space-between">
        {/* Left icon or logo */}
       <Image src="/logo.png" alt="Logo" h="40px" w="120px"/>
        {/* Center links (hidden on mobile) */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          justify="center"
          flex="1"
        >
          <Link href="#" _hover={{ color: "yellow" }}>
            Home
          </Link>
          <Link href="#" _hover={{ color: "yellow" }}>
            About
          </Link>
          <Link href="#" _hover={{ color: "yellow" }}>
            Services
          </Link>
          <Link href="#" _hover={{ color: "yellow" }}>
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
              <Link href="#" onClick={onClose}>
                Home
              </Link>
              <Link href="#" onClick={onClose}>
                About
              </Link>
              <Link href="#" onClick={onClose}>
                Services
              </Link>
              <Link href="#" onClick={onClose}>
                Contact
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default NavBar

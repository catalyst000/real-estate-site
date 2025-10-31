import { Box, Flex, Text, VStack, HStack, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="black" color="white" py={10} px={{ base: 6, md: 20 }}>
      {/* Top Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        mb={8}
        gap={10}
      >
        {/* Logo & About */}
        <VStack align="flex-start" spacing={3}>
          <HStack>
            <Icon as={FaHome} boxSize={6} color="yellow.400" />
            <Text fontSize="xl" fontWeight="bold">
              PrimeHomes Realty
            </Text>
          </HStack>
          <Text color="gray.400" maxW="300px">
            Your trusted partner in finding premium, affordable, and luxury
            properties across Nigeria and beyond.
          </Text>
        </VStack>

        {/* Quick Links */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold" color="yellow.400">
            Quick Links
          </Text>
          <Link href="#" _hover={{ color: "yellow.300" }}>
            Home
          </Link>
          <Link href="#" _hover={{ color: "yellow.300" }}>
            Properties
          </Link>
          <Link href="#" _hover={{ color: "yellow.300" }}>
            About
          </Link>
          <Link href="#" _hover={{ color: "yellow.300" }}>
            Contact
          </Link>
        </VStack>

        {/* Contact Info */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold" color="yellow.400">
            Contact
          </Text>
          <Text color="gray.400">Lagos, Nigeria</Text>
          <Text color="gray.400">+234 800 123 4567</Text>
          <Text color="gray.400">info@primehomes.com</Text>

          <HStack spacing={4} mt={2}>
            <Link href="#" _hover={{ color: "yellow.300" }}>
              <Icon as={FaFacebook} boxSize={5} />
            </Link>
            <Link href="#" _hover={{ color: "yellow.300" }}>
              <Icon as={FaInstagram} boxSize={5} />
            </Link>
            <Link href="#" _hover={{ color: "yellow.300" }}>
              <Icon as={FaTwitter} boxSize={5} />
            </Link>
          </HStack>
        </VStack>
      </Flex>

      {/* Divider Line */}
      <Box borderTop="1px solid" borderColor="gray.700" pt={6}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          textAlign="center"
          fontSize="sm"
          color="gray.500"
          gap={2}
        >
          <Text>
            © {new Date().getFullYear()} PrimeHomes Realty. All rights reserved.
          </Text>
          <Text as="a"   
          href="https://wa.me/2349013172370" 
        target="_blank"
        rel="noopener noreferrer">Built with ❤️ by David Kanayo</Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer

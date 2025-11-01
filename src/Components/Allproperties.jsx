import React from 'react'
    import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Heading,
  Button,
  VStack,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaArrowLeft, FaMapMarkerAlt, FaMousePointer } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Allproperties = () => {

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "Modern Apartment",
    location: "Lekki, Lagos",
    price: "₦350,000,000",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    title: "Luxury Villa",
    location: "Abuja, Nigeria",
    price: "₦950,000,000",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Cozy Duplex",
    location: "Enugu, Nigeria",
    price: "₦280,000,000",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    title: "Smart Bungalow",
    location: "Port Harcourt, Nigeria",
    price: "₦120,000,000",
  },
];

  return (
    <Box bg="gray.50" minH="100vh" py={12} px={{ base: 6, md: 20 }}>
      <Flex justify="start">
        <Link to="/">
        <FaArrowLeft/>  
        </Link>
        
      </Flex>
      {/* Page Title */}
      <Heading textAlign="center" mb={10} color="yellow.500">
        Properties for Sale
      </Heading>

      {/* Property Grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
        {properties.map((property) => (
          <Box
            key={property.id}
            bg="white"
            borderRadius="2xl"
            boxShadow="md"
            overflow="hidden"
            _hover={{ transform: "scale(1.03)", transition: "0.3s" }}
          >
            <Image
              src={property.image}
              alt={property.title}
              h="200px"
              w="100%"
              objectFit="cover"
            />
            <VStack align="flex-start" spacing={2} p={4}>
              <Heading fontSize="lg" color="black">
                {property.title}
              </Heading>
              <HStack>
                <Icon as={FaMapMarkerAlt} color="yellow.400" />
                <Text color="gray.600">{property.location}</Text>
              </HStack>
              <Text fontWeight="bold" color="yellow.500" fontSize="lg">
                {property.price}
              </Text>
              <Button
                colorScheme="yellow"
                bg="yellow.400"
                color="black"
                size="sm"
                _hover={{ bg: "yellow.300" }}
                w="full"
              >
                View Details
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
export default Allproperties
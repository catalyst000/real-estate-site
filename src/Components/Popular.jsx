import { FaMap, FaStar } from 'react-icons/fa'
import { Flex, Heading, SimpleGrid, Image, Button, Icon, Box, Text, Grid } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: "Modern Apartment",
    location: "Lagos, Nigeria",
    price: "₦350,000 / month",
  },
  {
    id: 2,
    title: "Luxury Villa",
    location: "Abuja, Nigeria",
    price: "₦120,000,000",
  },
  {
    id: 3,
    title: "Cozy Bungalow",
    location: "Port Harcourt, Nigeria",
    price: "₦45,000,000",
  },
  {
    id: 4,
    title: "Beachfront Duplex",
    location: "Lekki, Lagos",
    price: "₦75,000,000",
  },{
    id: 5,
    title: "Beachfront Duplex",
    location: "Lekki, Lagos",
    price: "₦75,000,000", 
  }
];

const Popular = () => {

  return (
 <Box>
        <Box py={16} px={{ base: 4, md: 12 }} bg="gray.50">
      {/* Header */}
      <Box textAlign="center" align="center" justify="center" mb={10} >
        <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={2} align="center" justify="center">
            <FaStar />
          Popular Properties
        </Heading>
        <Text color="gray.600">Explore our most viewed and desirable listings</Text>
      </Box>

      {/* Property Grid */}
      <Box overflowX="auto"
        overflowY="hidden"
        whiteSpace="nowrap"
        sx={{
    "::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE & Edge
  }}
     >
      <Grid  gridAutoFlow="column"
          autoColumns="250px"
          gap={6}
          w="fit-content" bg="lightgray"
        pt="2rem"
        pb="2rem">
        {properties.map((property) => (
          <Box
            key={property.id}
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            overflow="hidden"
            transition="0.3s"
            _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
          >
            <Box p={4}>
                <Box w="100%" h="150px" bgImage="url('property1.jpg')"
                bgSize="cover"
  bgPosition="center"
  bgRepeat="no-repeat"></Box>
              <Text fontWeight="bold" fontSize="lg">
                {property.title}
              </Text>
              <Flex align="center" color="gray.600" fontSize="sm" my={1}>
                <FaMap w={4} h={4} mr={1}/>
                {property.location}
              </Flex>
              <Text fontWeight="bold" color="yellow.600" mb={3}>
                {property.price}
              </Text>
              <Button
                colorScheme="yellow"
                variant="solid"
                size="sm"
                w="full"
                borderRadius="md"

              >
                View Details
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>
      </Box>
          <Text align="end" mt={4} fontSize="md" cursor="pointer" color="blue.500" _hover={{ textDecoration: "underline" }}
          as={Link}
          to="/Allproperties">
        See More...
      </Text>
    </Box>
 </Box>
  )
}

export default Popular

import React from 'react'
import { Box, Heading, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';

const ServicePage = () => {
    const { ref: ref, inView: inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
        <Box py={16} px={{ base: 6, md: 20 }} textAlign="center" bg="gray.50" id="services-section">
      {/* Page Title */}
      <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
        Our Services
      </Heading>
      <Text maxW="650px" mx="auto" color="gray.600" mb={12}>
        We offer a full range of real estate and construction services — helping
        you find, build, and manage exceptional properties with confidence.
      </Text>

      {/* Services Grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} ref={ref}>
        {/* Service 1 */}
        <Box
        as={motion.div}
        initial={{ x: 150, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 14, ease: "easeOut", type: "spring",}}
          p={8}
          borderRadius="xl"
          boxShadow="md"
          bg="white"
          _hover={{ transform: "translateY(-5px)", transition: "0.3s" }}
        >
          <Heading fontSize="xl" mb={3}>
            Property Sales & Rentals
          </Heading>
          <Text color="gray.600" mb={4}>
            We help clients buy, sell, and rent quality properties in top
            locations, ensuring transparency and value at every step.
          </Text>
          <Button colorScheme="yellow" variant="solid" size="sm"
          as={Link}
           to="/Allproperties">
            Explore Listings
          </Button>
        </Box>

        {/* Service 2 */}
        <Box
          p={8}
          borderRadius="xl"
          boxShadow="md"
          bg="white"
          _hover={{ transform: "translateY(-5px)", transition: "0.3s" }}
        >
          <Heading fontSize="xl" mb={3}>
            Building & Construction
          </Heading>
          <Text color="gray.600" mb={4}>
            From residential homes to commercial structures, we deliver durable,
            modern, and cost-effective construction solutions.
          </Text>
          <Button colorScheme="yellow" variant="solid" size="sm">
            View Projects
          </Button>
        </Box>

        {/* Service 3 */}
        <Box
          as={motion.div}
          initial={{ x: -150, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 14, ease: "easeOut", type: "spring",}}
          p={8}
          borderRadius="xl"
          boxShadow="md"
          bg="white"
          _hover={{ transform: "translateY(-5px)", transition: "0.3s" }}
        >
          <Heading fontSize="xl" mb={3}>
            Property Management
          </Heading>
          <Text color="gray.600" mb={4}>
            We manage your properties professionally — handling tenants,
            maintenance, and documentation with precision and care.
          </Text>
          <Button colorScheme="yellow" variant="solid" size="sm">
            Learn More
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default ServicePage


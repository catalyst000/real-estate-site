
import { Box, Flex, Heading, Text, Image, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref : ref1, inView: inView1 } = useInView({ triggerOnce: true,   threshold: 0.2,  });
   const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <Box id="about-section">
        <Box bg="gray.50" py={16} px={{ base: 6, md: 20 }}>
      {/* Header Section */}
      <VStack spacing={4} textAlign="center" mb={12}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>
          About Our Company
        </Heading>
        <Text maxW="800px" color="gray.600">
          We're dedicated to helping you find your dream property — whether it's
          a family home, luxury apartment, or commercial space. Our mission is
          simple: to make real estate seamless, transparent, and rewarding.
        </Text>
      </VStack>

      {/* Content Section */}
      <Flex
      ref={ref1}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={10}
      >
        <Image
          src="about-img.jpg"
          bgPosition="center"
          bgSize="cover"
          alt="Luxury property"
          borderRadius="2xl"
          boxShadow="lg"
          objectFit="cover"
          w={{ base: "100%", md: "50%" }}
          h="350px"
        />

        <Box w={{ base: "100%", md: "50%" }}         
        as={motion.div}
        initial={{ x: 150, opacity: 0 }}
        animate={inView1 ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 14, ease: "easeOut", type: "spring",}}>
          <Heading fontSize="2xl" mb={4} color="black">
            Who We Are
          </Heading>
          <Text color="gray.700" mb={4}>
            At <b>PrimeHomes Realty</b>, we connect people with properties that
            match their lifestyle and budget. From affordable rentals to premium
            estates, we pride ourselves on offering trusted guidance and
            personalized service.
          </Text>
          <Text color="gray.700" mb={6}>
            With a dedicated team of experienced agents, deep market knowledge,
            and modern technology, we make buying, selling, or renting property
            easier than ever before.
          </Text>
          <Button id="contact-button"
           as="a"
  href="https://wa.me/2349013172370" 
  target="_blank"
  rel="noopener noreferrer"
            colorScheme="yellow"
            bg="yellow.400"
            color="black"
            size="lg"
            _hover={{ bg: "yellow.300" }}
          >
            Contact Us
          </Button>
        </Box>
      </Flex>

      {/* Mission & Vision Section */}
      <Flex
      ref={ref2}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        mt={20}
        gap={10}
      >
        <Box
        as={motion.div}
        initial={{ x: -150, opacity: 0 }}
        animate={inView2 ? { x: 0, opacity: 1 } : {}}
       transition={{ duration: 14, ease: "easeOut", type: "spring",}}
          bg="white"
          borderRadius="2xl"
          boxShadow="md"
          p={8}
          flex="1"
          borderTop="5px solid yellow"
        >
          <Heading fontSize="xl" mb={3} color="black">
            Our Mission
          </Heading>
          <Text color="gray.600">
            To empower our clients with reliable property insights, seamless
            transactions, and exceptional service — ensuring every experience
            feels like home.
          </Text>
        </Box>

        <Box
         as={motion.div}
        initial={{ x: 150, opacity: 0 }}
        animate={inView2 ? { x: 0, opacity: 1 } : {}}
         transition={{ duration: 14, ease: "easeOut", type: "spring",}}
          bg="white"
          borderRadius="2xl"
          boxShadow="md"
          p={8}
          flex="1"
          borderTop="5px solid black"
        >
          <Heading fontSize="xl" mb={3} color="black">
            Our Vision
          </Heading>
          <Text color="gray.600">
            To become the most trusted real estate brand in Africa by combining
            innovation, integrity, and customer satisfaction.
          </Text>
        </Box>
      </Flex>
    </Box>
    </Box>
  )
}

export default About

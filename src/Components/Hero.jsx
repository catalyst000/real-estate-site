// Import Chakra UI components for layout, text, buttons, and tabs
import { Helmet } from "react-helmet";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

// Import your custom navigation bar
import NavBar from "./NavBar";
import { FaSearch } from "react-icons/fa";

// Main Hero component
const Hero = () => {
  return (

    // SEO 
    <>
          <Helmet>
        <title>PrimeHomes Realty – Properties for Sale</title>
        <meta name="description" content="Browse luxury apartments, villas, and houses for sale in Nigeria. Find your dream property with PrimeHomes Realty." />
        <meta name="keywords" content="real estate, properties for sale, apartments, villas, Nigeria" />
      </Helmet>
    // 🔲 Outer container (the hero section)
    
    <Box
      w="100%" // Full width of the page
      h="80vh" // Height: 80% of the viewport height
      bg="lightgrey" // Background color
      borderBottomRadius="50px" // Rounded bottom corners
      bgSize="cover" // Ensures any background image covers the entire box
      bgPosition="center" // Keeps the image centered
      bgRepeat="no-repeat" // Prevents the image from repeating
      border="5px solid white" // Adds a white border all around
      borderRadius="20px" // Smooth rounded corners
    >
      {/* ✅ Top navigation bar */}
      <NavBar />

      {/* 🔹 Flex container dividing Hero into two sections (Text + Image) */}
      <Flex
        direction={{ base: "column", lg: "row" }} // Stack vertically on small screens, horizontally on large
        align="center" // Vertically center children
        justify="center" // Horizontally center children
        h="80%" // Take up most of the hero height
        bg="transparent" // Transparent background
      >
        {/* 🔸 LEFT SIDE — Text content for desktop */}
        <Flex
          direction="column" // Stack text vertically
          justify="flex-end" // Push content to the bottom of the column
          h="60vh" // Height for text area
          w={{ base: "100%", lg: "50%" }} // Full width on small, half width on large
          bg="transparent"
          display={{ base: "none", lg: "block" }} // Show only on desktop
          pl="2rem" // Padding-left for spacing
        >
          {/* Headline */}
          <Text
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} // Responsive font sizes
            mb={4}
            mt="5rem" 
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)" // Subtle dark shadow for better readability
          >
            Not Just a{" "}
            <Box as="span" fontWeight="bold">
              House
            </Box>
            , but a{" "}
            <Box as="span" fontWeight="bold">
              Home
            </Box>
            .
          </Text>

          {/* Supporting text */}
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            mb={8}
            maxW="600px"
            textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)"
          >
            Explore the best properties available for sale and rent in your desired location.
          </Text>

          {/* 🔘 Action buttons (Desktop only) */}
          <Flex
            mr="0.5rem"
            ml="0.5rem"
            w="80%"
            h="fit-content"
            p="0.3rem"
            align="center"
            justify="space-evenly"
            display={{ base: "none", lg: "flex" }} // Only show on large screens
          >
            {/* First Button */}
            <Button
              position="relative"
              overflow="hidden"
              h="50px"
              w="30%"
              borderRadius="20px"
              bg="white"
              color="black"
              boxShadow="0 4px 0 rgba(0, 0, 0, 1)"
              _hover={{}} // Empty — hover handled by sx
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  transform: "scale(0)",
                  transformOrigin: "bottom right",
                  width: "200%",
                  height: "200%",
                  borderRadius: "50%",
                  backgroundColor: "yellow",
                  transition: "transform 0.6s ease-out",
                  zIndex: 0,
                },
                "&:hover::before": { transform: "scale(1)" },
                "& > *": { position: "relative", zIndex: 1 },
              }}
            >
              Discover
            </Button>

            {/* Second Button */}
            <Button
              position="relative"
              overflow="hidden"
              h="50px"
              w="30%"
              borderRadius="20px"
              bg="white"
              color="black"
              boxShadow="0 4px 0 rgba(0, 0, 0, 1)"
              _hover={{}}
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  transform: "scale(0)",
                  transformOrigin: "bottom right",
                  width: "200%",
                  height: "200%",
                  borderRadius: "50%",
                  backgroundColor: "yellow",
                  transition: "transform 0.6s ease-out",
                  zIndex: 0,
                },
                "&:hover::before": { transform: "scale(1)" },
                "& > *": { position: "relative", zIndex: 1 },
              }}
            >
              Explore
            </Button>
          </Flex>
        </Flex>

        {/* 🔸 RIGHT SIDE — Image + Mobile content */}
        <Flex
          bgImage="url('house.png')" // Background image of a house
          h="100%"
          w={{ base: "100%", lg: "50%" }} // Full width on mobile, half on desktop
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          direction="column"
          justify="flex-end" // Text at the bottom of the image
        >
          {/* Mobile headline and text */}
          <Text
            color={{ base: "white", lg: "black" }}
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            mb={4}
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
            display={{ base: "flex", lg: "none" }}
            bg="rgba(0, 0, 0, 0.2)"
            mr="0.2rem"
            ml="0.2rem"
          >
            Not Just a <Box as="span" fontWeight="bold"> House</Box>, but a <Box as="span" fontWeight="bold"> Home</Box>.
          </Text>

          <Text
            bg="rgba(0, 0, 0, 0.2)"
            mr="0.2rem"
            ml="0.2rem"
            color={{ base: "white", lg: "black" }}
            mb={8}
            maxW="600px"
            textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)"
            display={{ base: "flex", lg: "none" }}
          >
            Explore the best properties available for sale and rent in your desired location.
          </Text>

          {/* 🔳 Tabs section for mobile */}
          <Tabs
            variant="enclosed"
            bg="white"
            borderRadius="10px"
            mr="0.5rem"
            ml="0.5rem"
            display={{ base: "block", lg: "none" }} // Only on mobile
          >
            <TabList>
              <Tab _selected={{ color: "yellow", bg: "black" }}>Buy</Tab>
              <Tab _selected={{ color: "yellow", bg: "black" }}>Rent</Tab>
            </TabList>

            <TabPanels>
              <TabPanel >
                    <Flex
      bg="transparent"
      borderRadius="20px"
      align="center"
      justify="space-evenly"
      flexWrap="nowrap"
      w="100%"
      color="white"
      
    >
      {/* Location Input */}
      <Box w={{ base: "100%", md: "25%" }}>
        <Input
          placeholder="Location"
          bg="white"
          color="black"
          borderRadius="15px"
          _placeholder={{ color: "gray.500" }}

        />
      </Box>

      {/* Property Type */}
      <Box w={{ base: "100%", md: "20%" }}>
        <Select bg="white" color="black" borderRadius="15px" placeholder="Property">
          <option>Apartment</option>
          <option>Duplex</option>
          <option>Bungalow</option>
          <option>Studio</option>
        </Select>
      </Box>

      {/* Budget */}
      <Box w={{ base: "100%", md: "20%" }}>
        <Select bg="white" color="black" borderRadius="15px" placeholder="Budget">
          <option>₦100k - ₦500k</option>
          <option>₦500k - ₦1M</option>
          <option>₦1M - ₦5M</option>
          <option>₦5M+</option>
        </Select>
      </Box>
      {/* Search Button */}
    <Button 
      w="60px"
      bg="grey"
      color="black"
      fontWeight="bold"
      borderRadius="15px"
      h="45px"
      boxShadow="0 4px 0 rgba(0,0,0,1)"
      _hover={{ bg: "yellow.400" }}
    >
      <FaSearch/>
    </Button>
    </Flex>
              </TabPanel>
              {/* Rental tab panel */}
              <TabPanel >
                    <Flex
      bg="transparent"
      borderRadius="20px"
      align="center"
      justify="space-evenly"
      flexWrap={{ base: "nowrap", md: "nowrap" }} // stack on mobile, horizontal on large
      w="100%"
      color="white"
      
    >
      {/* Location Input */}
      <Box w={{ base: "100%", md: "25%" }}>
        <Input
          placeholder="Location"
          bg="white"
          color="black"
          borderRadius="15px"
          _placeholder={{ color: "gray.500" }}

        />
      </Box>

      {/* Property Type */}
      <Box w={{ base: "100%", md: "20%" }}>
        <Select bg="white" color="black" borderRadius="15px" placeholder="Property">
          <option>Apartment</option>
          <option>Duplex</option>
          <option>Bungalow</option>
          <option>Studio</option>
        </Select>
      </Box>

      {/* Budget */}
      <Box w={{ base: "100%", md: "20%" }}>
        <Select bg="white" color="black" borderRadius="15px" placeholder="Budget">
          <option>₦100k - ₦500k</option>
          <option>₦500k - ₦1M</option>
          <option>₦1M - ₦5M</option>
          <option>₦5M+</option>
        </Select>
      </Box>
      {/* Search Button */}
    <Button 
       w="60px"
      bg="grey"
      color="black"
      fontWeight="bold"
      borderRadius="15px"
      h="45px"
      boxShadow="0 4px 0 rgba(0,0,0,1)"
      _hover={{ bg: "yellow.400" }}
    >
      <FaSearch />
    </Button>
    </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>

          {/* Mobile buttons under the tabs */}
          <Flex
            mr="0.5rem"
            ml="0.5rem"
            w="100%"
            mt="1rem"
            justify="center"
            gap="1rem"
            display={{ base: "flex", lg: "none" }}
          >
            <Button
              position="relative"
              overflow="hidden"
              h="50px"
              w="40%"
              borderRadius="20px"
              bg="white"
              color="black"
              boxShadow="0 4px 0 rgba(0, 0, 0, 1)"
              _hover={{}}
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  transform: "scale(0)",
                  transformOrigin: "bottom right",
                  width: "200%",
                  height: "200%",
                  borderRadius: "50%",
                  backgroundColor: "yellow",
                  transition: "transform 0.6s ease-out",
                  zIndex: 0,
                },
                "&:hover::before": { transform: "scale(1)" },
                "& > *": { position: "relative", zIndex: 1 },
              }}
            >
              Discover
            </Button>

            <Button
              position="relative"
              overflow="hidden"
              h="50px"
              w="40%"
              borderRadius="20px"
              bg="white"
              color="black"
              boxShadow="0 4px 0 rgba(0, 0, 0, 1)"
              _hover={{}}
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "0%",
                  left: "0%",
                  transform: "scale(0)",
                  transformOrigin: "bottom right",
                  width: "200%",
                  height: "200%",
                  borderRadius: "50%",
                  backgroundColor: "yellow",
                  transition: "transform 0.6s ease-out",
                  zIndex: 0,
                },
                "&:hover::before": { transform: "scale(1)" },
                "& > *": { position: "relative", zIndex: 1 },
              }}
            >
              Explore
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* 🔹 Desktop Tabs below the hero section */}
      <Tabs
        variant="enclosed"
        bg="white"
        borderRadius="10px"
        mr="0.5rem"
        ml="0.5rem"
        display={{ base: "none", lg: "block" }} // Only on desktop
        w="80%"
        mt="-5rem" // Pull upward to overlap the hero section a bit
        mb="2rem"
        mx="auto" // Centers horizontally
         borderBottom="5px solid black"
      >
        <TabList>
          <Tab _selected={{ color: "yellow", bg: "black" }}>Buy</Tab>
          <Tab _selected={{ color: "yellow", bg: "black" }}>Rent</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
                <Flex
      bg="transprent"
      borderRadius="20px"
      align="center"
      justify="space-evenly"
      flexWrap={{ base: "wrap", md: "nowrap" }} // stack on mobile, horizontal on large
      w="90%"
      mx="auto"
      color="white"
    >
      {/* Location Input */}
      <Box w={{ base: "100%", md: "25%" }}>
        <Input
          placeholder="Location"
          bg="white"
          color="black"
          borderRadius="15px"
          _placeholder={{ color: "gray.500" }}
        />
      </Box>

      {/* Property Type */}
      <Box w={{ base: "100%", md: "20%" }}>
        <Select bg="white" color="black" borderRadius="15px" placeholder="Property">
          <option>Apartment</option>
          <option>Duplex</option>
          <option>Bungalow</option>
          <option>Studio</option>
        </Select>
      </Box>

      {/* Budget */}
      <Box w={{ base: "100%", md: "20%" }}>
        <Select bg="white" color="black" borderRadius="15px" placeholder="Budget">
          <option>₦100k - ₦500k</option>
          <option>₦500k - ₦1M</option>
          <option>₦1M - ₦5M</option>
          <option>₦5M+</option>
        </Select>
      </Box>

      {/* Bedrooms */}
      <Box w={{ base: "100%", md: "15%" }}>
        <Select bg="white" color="black" borderRadius="15px" placeholder="Bedrooms">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4+</option>
        </Select>
      </Box>

      {/* Search Button */}
    <Button 
      w="60px"
      bg="grey"
      color="black"
      fontWeight="bold"
      borderRadius="15px"
      h="60px"
      boxShadow="0 4px 0 rgba(0,0,0,1)"
      _hover={{ bg: "yellow.400" }}
    >
      <FaSearch/>
    </Button>
    </Flex>
          </TabPanel>

          {/* Rental tab */}
          <TabPanel>
  <Flex
    bg="transparent"
    borderRadius="20px"
    align="center"
    justify="space-evenly"
    flexWrap={{ base: "wrap", md: "nowrap" }} // stack on mobile
    w="100%"
    mx="auto"
    color="white"
  >
    {/* Location Input */}
    <Box w={{ base: "100%", md: "25%" }}>
      <Input
        placeholder="Location"
        bg="white"
        color="black"
        borderRadius="15px"
        _placeholder={{ color: "gray.500" }}
      />
    </Box>

    {/* Property Type */}
    <Box w={{ base: "100%", md: "20%" }}>
      <Select bg="white" color="black" borderRadius="15px" placeholder="Property">
        <option>Apartment</option>
        <option>Duplex</option>
        <option>Bungalow</option>
        <option>Studio</option>
      </Select>
    </Box>

    {/* Budget */}
    <Box w={{ base: "100%", md: "20%" }}>
      <Select bg="white" color="black" borderRadius="15px" placeholder="Budget">
        <option>₦100k - ₦500k</option>
        <option>₦500k - ₦1M</option>
        <option>₦1M - ₦5M</option>
        <option>₦5M+</option>
      </Select>
    </Box>

    {/* Bedrooms */}
    <Box w={{ base: "100%", md: "15%" }}>
      <Select bg="white" color="black" borderRadius="15px" placeholder="Bedrooms">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4+</option>
      </Select>
    </Box>

    {/* Search Button */}
    <Button 
      bg="grey"
      color="black"
      fontWeight="bold"
      borderRadius="15px"
      boxShadow="0 4px 0 rgba(0,0,0,1)"
      _hover={{ bg: "yellow.400" }}
    >
      <FaSearch/>
    </Button>
  </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
    </>
  );
};

export default Hero;

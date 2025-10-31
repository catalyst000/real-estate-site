import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Partners = () => {
  return (
  <Box p="1rem" align="center" justify="center">
        <Text>Partners with </Text>
    <Flex  h="80px" maxW="100%" align="center" justify="center"  gap={3} >
        <Image src="/brand.png" alt="partner logos"  h="60px" w="60px"/>
        <Image src="/brand2.png" alt="partner logos" h="60px" w="60px"/>
        <Image src="/brand3.png" alt="partner logos" h="60px" w="60px"/>
        <Image src="/brand4.png" alt="partner logos" h="60px" w="60px"/>
    </Flex>
  </Box>
  )
}

export default Partners

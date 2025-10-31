import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Partners = () => {
  return (
    <Flex  h="80px" w="100%" align="center" justify="center"  gap={4} >
        <Text>Partners with </Text>
        <Image src="/brand.png" alt="partner logos"  h="60px" w="60px"/>
        <Image src="/brand2.png" alt="partner logos" h="60px" w="60px"/>
        <Image src="/brand3.png" alt="partner logos" h="60px" w="60px"/>
        <Image src="/brand4.png" alt="partner logos" h="60px" w="60px"/>
    </Flex>
  )
}

export default Partners

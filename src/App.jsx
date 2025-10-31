import { Box } from '@chakra-ui/react'
import Hero from './Components/Hero'
import Popular from './Components/Popular'
import Partners from './Components/Partners'
import About from './Components/About'
import Footer from './Components/Footer'
import Allproperties from './Components/Allproperties'


const App = () => {
  return (
    <>
    <Box h="fit-content" w="100%" ><Hero/></Box>
    <Partners/>
    <Box h="fit-content" w="100%"  bg="red"><Popular/></Box>
    <Box h="fit-content" w="100%" ><About/></Box>
    <Box h="fit-content" w="100%" ><Footer/></Box>
    {/* <Box h="fit-content" w="100%" ><Allproperties/></Box> */}
    </>


  )
}

export default App

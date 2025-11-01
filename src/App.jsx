import { Box } from '@chakra-ui/react'
import Hero from './Components/Hero'
import Popular from './Components/Popular'
import Partners from './Components/Partners'
import ServicePage from './Components/ServicePage'
import About from './Components/About'
import Footer from './Components/Footer'
import Allproperties from './Components/Allproperties'
import "./App.css"
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Box >
      <Routes>
        <Route path="/Allproperties" element={<Allproperties />} />
        <Route path="/" element={
          <Box>
              <Box h="fit-content" w="100%" ><Hero/></Box>
              <Partners/>
              <Box h="fit-content" w="100%"  bg="red"><Popular/></Box>
              <Box h="fit-content" w="100%" ><ServicePage/></Box>
              <Box h="fit-content" w="100%" ><About/></Box>
              <Box h="fit-content" w="100%" ><Footer/></Box>
          </Box>

        } />
      </Routes>
    </Box>


  )
}

export default App

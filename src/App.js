import React from 'react';

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {FaRegAddressBook} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import {
  ChakraProvider,
  theme,
  Box,
  Text,
  Image,
  Heading,
  Button,
  Progress,
} from '@chakra-ui/react';




function App() {
  return (
    <ChakraProvider theme={theme} bg='white'>       
    <Box w="100%" h="1800px" bg= "white" display="grid" placeItems="start center" gridTemplateRows={3}>
      <Box w="100%" h="90px" bg= "white" display="grid" placeItems="start" gridTemplateRows={1} gridRow={1}>
        <Text ml="30px" mt="20px"  fontSize='xl' color="gray"  mr="100px" >PHANOX</Text>
        <Image ml="95%" mt="20px" w="40px" h="40px" src='./imgs/icons8-shopping-bag-50.png' alt='shopping-cart' />
      </Box>

      <Box gridTemplateColumns={2} gridTemplateRows={1} mt="70px" gridRow={2/3} borderRadius="20px" w="1100px" h="515px" bg= "gray.500" display="grid" placeItems="start center ">
        <Box gridColumn={1} pt="100px">
          <Text ml="650px" color="black">Beats solo</Text>
          <Heading color="black" ml="650px" as='h2' size='2xl' noOfLines={1}>
            Wireless
          </Heading>
          <Heading ml="650px" as='h1' size='4xl' fontSize="90px" noOfLines={1}>
            HEADPHONE
          </Heading>
          <Button p="30px" colorScheme='blue' variant='outline' ml="650px" mt="50px" >Shop Wireless headphone</Button>
        </Box> 
        <Box gridColumn={2}>
          <Image mt="-20px" ml="540px" w="540px" h="540px" src='./imgs/355767801_814853276556414_2776210113452371722_n-removebg-preview.png'></Image>
          <Progress mb="10px" size='md' isIndeterminate />
        </Box>
      </Box>

      <Box mt="100px" w="1100px" h="400px" display="grid"  gridTemplateColumns={5} gridTemplateRows={3} >
        <Box h="50px"  w="1000px" gridColumn={ 1/6} gridRow={1}>
          <Heading mt="90px" ml="35%" color="blue.600"  as='h2' size='2xl' noOfLines={1}>
            Best Seller Products
          </Heading>
          <Text mt="15px" ml="41%" color="gray">Speaker There are many variations passages</Text>
        </Box>
        <Box ml="-25px" mt="250px" borderRadius="20px" bg="gray.300" w="250px" h="250px" gridColumn={1} gridRow={2}>
          <Image w="250px" h="250px"  src='./imgs/earphones_b_1.png' alt='img'></Image>
          <Text color="gray.600">Boat Airdopes 281 Pro</Text>
          <Text fontSize="20px" fontWeight="bold" color="black">$69</Text>
        </Box>
        <Box ml="280px" mt="250px" borderRadius="20px" bg="gray.300" w="250px" h="250px" gridColumn={2} gridRow={2}>
          <Image w="250px" h="250px"  src='./imgs/earphones_c_1.png' alt='img'></Image>
          <Text color="gray.600">boAt Rockerz 333</Text>
          <Text fontSize="20px" fontWeight="bold" color="black">$55</Text>
        </Box>
        <Box ml="580px" mt="250px" borderRadius="20px" bg="gray.300" w="250px" h="250px" gridColumn={2} gridRow={2}>
          <Image w="250px" h="250px"  src='./imgs/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.png' alt='img'></Image>
          <Text color="gray.600">boAt Rockerz 451</Text>
          <Text fontSize="20px" fontWeight="bold" color="black">$49</Text>
        </Box>
        <Box ml="880px" mt="250px" borderRadius="20px" bg="gray.300" w="250px" h="250px" gridColumn={2} gridRow={2}>
          <Image w="250px" h="250px"  src='./imgs/headphones_a_1.png' alt='img'></Image>
          <Text color="gray.600">boAt Immortal 1000D</Text>
          <Text fontSize="20px" fontWeight="bold" color="black">$50</Text>
        </Box>

        
        <Box ml="-25px" mt="90px" borderRadius="20px" bg="gray.300" w="250px" h="250px" gridColumn={1} gridRow={3}>
          <Image w="250px" h="250px"  src='./imgs/earphones_a_1.png' alt='img'></Image>
          <Text color="gray.600">boAt BassHeads 242</Text>
          <Text fontSize="20px" fontWeight="bold" color="black">$34</Text>
        </Box>
        <Box ml="280px" mt="90px" borderRadius="20px" bg="gray.300" w="250px" h="250px" gridColumn={2} gridRow={3}>
          <Image w="250px" h="250px"  src='./imgs/speaker1.PNG' alt='img'></Image>
          <Text color="gray.600">boAt Party Pal 50</Text>
          <Text fontSize="20px" fontWeight="bold" color="black">$56</Text>
        </Box>
        <Box ml="580px" mt="90px" borderRadius="20px" bg="gray.300" w="250px" h="250px" gridColumn={2} gridRow={3}>
          <Image w="250px" h="250px"  src='./imgs/headphones_b_1.png' alt='img'></Image>
          <Text color="gray.600">Boat BassHeads 900</Text>
          <Text fontSize="20px" fontWeight="bold" color="black">$49</Text>
        </Box>
        <Box ml="880px" mt="90px" borderRadius="20px" bg="gray.300" w="250px" h="250px" gridColumn={1} gridRow={3}>
          <Image w="250px" h="250px"  src='./imgs/watch_1.png' alt='img'></Image>
          <Text color="gray.600">Watch Blaze</Text>
          <Text fontSize="20px" fontWeight="bold" color="black">$49</Text>
        </Box>
        
      </Box>
      <Box pt="100px" pl="200px"  mt="630px" w="100%" h="200px" bg="gray.200">
        <Heading color="gray.700" mt="-80px" ml="35%" as='h2' size='xl' noOfLines={1}>
          PHANOX
        </Heading>
        <Text ml="-20px" mt="-0px" color="gray.600">be2430423@gmail.com</Text>
        <Box  display="grid" placeItems="center" mt="-40px" ml="-100px" w="55px" h="55px" bg="white" borderRadius="50%">
          <FaRegEnvelope fontSize="20px" color="blue"/>
        </Box>
        <Text ml="-20px" mt="40px" color="gray.600">05 55 00 30 26</Text>
        <Box  display="grid" placeItems="center" mt="-40px" ml="-100px" w="55px" h="55px" bg="white" borderRadius="50%">
          <FaRegAddressBook fontSize="20px" color="blue"/>
        </Box>
        <Box mt="-70px" ml="400px">
          <a href='https://web.facebook.com/meriam.mimi.02'><FaFacebook fontSize="24px" color="gray" className='Fa'/></a>
        </Box>
        <Box mt="-23px" ml="450px">
          <a href='https://www.instagram.com/meriam.meriam_mimi/'><FaInstagram fontSize="24px" color="gray"  className='Fa'/></a>
        </Box>
        <Box mt="-25px" ml="500px">
          <a href='https://https://www.youtube.com/channel/UC3BcF77P6MPWOp8xjHwEjmw'><FaYoutube fontSize="26px" color="gray"  className='Fa'/></a>
        </Box>
        <Box mt="-27px" ml="550px">
          <a href=''><FaTwitter fontSize="26px" color="gray"  className='Fa'/></a>
        </Box>
        
        <Box ml="800px" mt="-90px" maxW="300px">
          <Text color="blue" fontWeight="bold">Description</Text>
          <Text color="gray">The game begins here with immortal 1000D 
            gaming headphones . don't just play the game - feel it live it , and one it. level up your audio game wiht 7.1 Channel.
          </Text>
        </Box>
        
      </Box>
    </Box>
    </ChakraProvider>
  );
}

export default App;

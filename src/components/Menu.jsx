import React from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useAuth } from './AuthContext';

const items = [
  { src: 'https://images.meesho.com/images/products/47032277/fvwq6_512.webp', name: 'Gifts For Dad' },
  { src: 'https://media.istockphoto.com/id/1431243367/vector/3d-white-gift-boxes.jpg?s=612x612&w=0&k=20&c=ikKzS3S6VR9cIJTyOfEIcwXtwFIY1W7ZqjD7CPwShUQ=', name: 'Gifts For Birthday' },
  { src: 'https://cdn-manoronhigh.b-cdn.net/wp-content/uploads/2019/03/456915-PFCMKZ-6.jpg', name: 'Gifts For Wedding' },
  { src: 'https://res.cloudinary.com/wolfandbadger/image/upload/f_auto,q_auto:best,c_pad,h_800,w_800/products/wbh9anjkqzzrretnt2wg', name: 'Gifts For Barware' },
  { src: 'https://cdn11.bigcommerce.com/s-6e1n67clqw/images/stencil/500x500/products/62045/296185/y1aoaxctrct4e5dy5mwy__34918.1712001063.jpg', name: 'Gifts For Home' },
  { src: 'https://don16obqbay2c.cloudfront.net/wp-content/uploads/19-Free-Gift-Ideas-to-Thank-Your-Customers-for-the-Purchase-1700662242.png', name: 'Gifts For Greeting Card' }
];

const Menu = () => {
  const { isLoggedIn, userData, loading } = useAuth();

  if (loading) {
    return <Text>Loading...</Text>; // Display loading message while fetching data
  }

  return (
    <Box bg="#EAE8E8" p={4} mt={0}>
      <Box maxW="1440px" mx="auto">
        {isLoggedIn && userData && (
          <Heading as="h2" size="md" textAlign="center" mb={4} bgGradient="linear(to-r, #F3803A, #8D4A22)" bgClip="text">
            Welcome back, {userData.username}!
          </Heading>
        )}
        <Heading
          as="h1"
          size="xl"
          textAlign="center"
          bgGradient="linear(to-r, #F3803A, #8D4A22)"
          bgClip="text"
          mb={6}
        >
          Small shops make every moment more special!
        </Heading>
        <Flex justifyContent="space-around" alignItems="center" flexWrap="wrap">
          {items.map((item, index) => (
            <Box
              key={index}
              textAlign="center"
              m={2}
              p={4}
              flex="1 0 100px" // Responsive width for each card
              maxW={{ base: '50%', sm: '30%', md: '20%' }} // Adjust width per row based on breakpoints
            >
              <Image
                src={item.src}
                alt={item.name}
                boxSize="100px"
                borderRadius="full"
                objectFit="cover"
                ml={8}
                transition="transform 0.3s, box-shadow 0.3s"
                _hover={{ transform: 'scale(1.15)', boxShadow: 'lg', cursor: 'pointer' }}
              />
              <Text mt={2} marginRight={5} >{item.name}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Menu;

import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Button,
  Text,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import SignUp from './SignUp'; // Import SignUp component
import { useAuth } from './AuthContext';

const categories = [
  'Jewellery',
  'Home & Living',
  'Art & Collectibles',
  'Clothing',
  'Craft Supplies & Tools',
  'Weddings',
  'Accessories',
  'Electronics & Accessories',
  'Baby',
  'Bags & Purses',
  'Bath & Beauty',
  'Pet Supplies',
  'Books, Films & Music',
  'Toys & Games',
  'Paper & Party Supplies',
];

const items = [
  { name: 'Rings', imgSrc: 'https://i.etsystatic.com/48254355/c/1600/1270/0/165/il/b59c04/6068083827/il_340x270.6068083827_4o6b.jpg' },
  { name: 'Necklaces', imgSrc: 'https://i.etsystatic.com/48254355/c/1600/1270/0/165/il/b59c04/6068083827/il_340x270.6068083827_4o6b.jpg' },
  { name: 'Earrings', imgSrc: 'https://i.etsystatic.com/48254355/c/1600/1270/0/165/il/b59c04/6068083827/il_340x270.6068083827_4o6b.jpg' },
  { name: 'Bracelets', imgSrc: 'https://i.etsystatic.com/48254355/c/1600/1270/0/165/il/b59c04/6068083827/il_340x270.6068083827_4o6b.jpg' },
  { name: 'Watches', imgSrc: 'https://i.etsystatic.com/48254355/c/1600/1270/0/165/il/b59c04/6068083827/il_340x270.6068083827_4o6b.jpg' },
  { name: 'Jewellery Sets', imgSrc: 'https://i.etsystatic.com/48254355/c/1600/1270/0/165/il/b59c04/6068083827/il_340x270.6068083827_4o6b.jpg' },
  { name: 'Cremation & Memorial...', imgSrc: 'https://i.etsystatic.com/48254355/c/1600/1270/0/165/il/b59c04/6068083827/il_340x270.6068083827_4o6b.jpg' },
  { name: 'Jewellery Storage', imgSrc: 'https://i.etsystatic.com/48254355/c/1600/1270/0/165/il/b59c04/6068083827/il_340x270.6068083827_4o6b.jpg' },
  { name: 'Body Jewellery', imgSrc: 'https://i.etsystatic.com/48254355/c/1600/1270/0/165/il/b59c04/6068083827/il_340x270.6068083827_4o6b.jpg' },
];

const Headr = () => {
  const iconStyles = {
    fill: 'black',
    stroke: 'black',
    strokeWidth: 2,
  };

  const { isLoggedIn, signIn, signOut } = useAuth();
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Jewellery');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargerThan880] = useMediaQuery("(min-width: 880px)");

  const openSignUp = () => setIsSignUpOpen(true); // Function to open SignUp modal
  const closeSignUp = () => setIsSignUpOpen(false);

  const handleSignInOut = () => {
    if (isLoggedIn) {
      signOut();
    } else {
      openSignUp(); // Open SignUp modal instead of calling signIn directly
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box bg="#EAE8E8" width="100%" >
      <Box maxW="1440px" mx="auto" p={4}>
        <Flex
          alignItems="center"
          justify="space-between"
          p={3}
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
        >
          <Flex align="center" justify={{ base: 'space-between', md: 'flex-start' }} width="100%">
            <Heading as="h1" size="lg" color="orangered" pr={4}>
              Etsy
            </Heading>


            {isLargerThan880 && (
              <Menu placement="bottom-start">
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon style={iconStyles} />}
                  variant="outline"
                  colorScheme="orange"
                  display={{ base: 'none', md: 'block' }} // Hide category menu for widths <= 880px
                >
                  Category
                </MenuButton>
                <MenuList width="md" height="10%">
                  <Flex>
                    {/* Category List */}
                    <Box width="80%" bg="#f5f5f5" p={5}>
                      {categories.map((category, index) => (
                        <Text
                          key={index}
                          mb={2}
                          fontWeight={selectedCategory === category ? 'bold' : 'normal'}
                          onClick={() => setSelectedCategory(category)}
                          cursor="pointer"
                        >
                          {category}
                        </Text>
                      ))}
                    </Box>

                    {/* Items Display */}
                    <Box width="80%" p={3}>
                      <Heading size="sm" mb={4}>All {selectedCategory} -</Heading>
                      <Flex wrap="wrap" justify="center" alignItems="center" gap={5} p={0}>
                        {items.map((item, index) => (
                          <Box
                            key={index}
                            textAlign="center"
                            mb={4}
                            p={3}
                            bg="white"
                            borderRadius="md"
                            boxShadow="md"
                            _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}
                            transition="transform 0.3s ease"
                            display={index === currentIndex ? 'block' : 'none'} // Show only the current item
                            width={{ base: '100px', sm: '120px', md: '150px' }} // Adjust width based on screen size
                            height={{ base: '120px', sm: '150px', md: '200px' }} // Adjust height based on screen size
                          >
                            <Image
                              src={item.imgSrc}
                              alt={item.name}
                              boxSize={{ base: '80px', sm: '100px', md: '150px' }} // Adjust image size based on screen size
                              objectFit="contain"
                              borderRadius="md"
                            />
                            <Text mt={2} fontSize={{ base: 'xs', sm: 'sm' }}>{item.name}</Text>
                          </Box>
                        ))}
                      </Flex>
                    </Box>
                  </Flex>
                </MenuList>
              </Menu>
            )}
          </Flex>
            {/* Search Input */}
            <Flex width={isLargerThan880 ? "100%" : "100%"} align="center" ml={4}>
              <Input
                placeholder="Enter Text"
                borderRadius="22px"
                width="100%"
                border="2px solid black"
                paddingRight="2.5rem"
                display={{ base: 'none', sm: 'block' }} // Hide search bar for widths <= 500px
              />
              <IconButton
                aria-label="Search"
                icon={<SearchIcon style={iconStyles} />}
                background="none"
                _active={{ background: 'none' }}
                _hover={{ background: 'none' }}
                display={{ base: 'none', sm: 'block' }} // Hide search bar icon for widths <= 500px
                onClick={() => {
                  // Implement search functionality if needed
                }}
              />
            </Flex>

          {/* Conditionally Render Sign In/Sign Out Buttons */}
          <Flex
            alignItems="center"
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            width={{ base: '100%', md: 'auto' }}
            mt={{ base: 4, md: 0 }}
            ml={{ base: 0, md: 4 }}
          >
            {!isLoggedIn && (
              <Button
                aria-label="Sign In"
                _hover={{ bg: '#F3803A' }}
                onClick={handleSignInOut}
                bg="#F3803A"
                variant="ghost"
                fontSize="lg"
                fontWeight="bold"
                color="black"
              >
                Sign In
              </Button>
            )}

            <IconButton
              aria-label="Wishlist"
              icon={<FaHeart style={iconStyles} />}
              variant="ghost"
              fontSize="20px"
              ml={2}
            />
            <IconButton
              aria-label="User"
              icon={<FaUser style={iconStyles} />}
              variant="ghost"
              fontSize="20px"
              ml={2}
            />
            <IconButton
              aria-label="Cart"
              icon={<FaShoppingCart style={iconStyles} />}
              variant="ghost"
              fontSize="20px"
              ml={2}
            />
          </Flex>
        </Flex>
        <Divider mt={4} borderColor="black" />

        {/* Category Links */}
        <Flex
          justifyContent="space-around"
          alignItems="center"
          mt={5}
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
        >
          {['Gift Mode', 'Father’s Day Deal', 'Home Favorites', 'Fashion Find', 'Registry'].map((text, index) => (
            <Button
              key={index}
              color="black"
              fontSize="lg"
              fontWeight="bold"
              variant="ghost"
              _hover={{ bg: 'gray.300', borderRadius: "20px" }}
              px={3} // Adding some padding for better visual effect
            >
              {text}
            </Button>
          ))}
        </Flex>

        <Divider mt={4} borderColor="black" />
      </Box>

      {/* SignUp Modal */}
      <SignUp isOpen={isSignUpOpen} onClose={closeSignUp} />
    </Box>
  );
};

export default Headr;

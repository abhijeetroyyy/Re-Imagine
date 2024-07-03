import React from 'react';
import {
  Box,
  Container,
  Text,
  Link,
  Stack,
  VStack,
  HStack,
  Button,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const hStackDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const justifyContent = useBreakpointValue({ base: 'center', md: 'space-between' });
  const alignItems = useBreakpointValue({ base: 'center', md: 'flex-start' });

  return (
    <Box bg="gray.900" color="white" py={10} px={8} mx="auto" maxWidth="1440px" mt={10} overflow="hidden">
      <Container maxW="container.xl">
        <Stack spacing={10}>
          {/* Top section with logo, social icons, and app download button */}
          <HStack justifyContent={justifyContent} direction={stackDirection} alignItems={alignItems} wrap="wrap">
            <VStack align="start" spacing={4} flex={{ base: 'none', md: '1' }}>
              <Text fontSize="2xl" fontWeight="bold" color="orange.400">
                Etsy
              </Text>
              <Text textAlign={['center', 'center', 'left']}>Etsy is powered by 100% renewable electricity.</Text>
              <HStack spacing={4} justifyContent="center">
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  bg="gray.700"
                  _hover={{ bg: 'gray.600' }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Pinterest"
                  icon={<FaPinterest />}
                  bg="gray.700"
                  _hover={{ bg: 'gray.600' }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  bg="gray.700"
                  _hover={{ bg: 'gray.600' }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  bg="gray.700"
                  _hover={{ bg: 'gray.600' }}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="YouTube"
                  icon={<FaYoutube />}
                  bg="gray.700"
                  _hover={{ bg: 'gray.600' }}
                />
              </HStack>
            </VStack>
            <Button
              bg="white"
              color="orange.400"
              _hover={{ bg: 'gray.200' }}
              leftIcon={<Box as="img" src="path_to_logo_image" alt="Etsy App Logo" boxSize="20px" />}
              flex={{ base: 'none', md: '1' }}
              mt={{ base: '4', md: '0' }}
            >
              DOWNLOAD THE APP NOW
            </Button>
          </HStack>

          {/* Main sections for Shop, Sell, About, and Help */}
          <Stack direction={stackDirection} spacing={6} justifyContent={justifyContent} alignItems={alignItems} wrap="wrap">
            {/* Shop section */}
            <VStack align="start" spacing={2} flex={{ base: 'none', md: '1' }}>
              <Text fontSize="lg" fontWeight="bold">
                Shop
              </Text>
              <Link href="#">Gift cards</Link>
              <Link href="#">Etsy Registry</Link>
              <Link href="#">Site Map</Link>
              <Link href="#">Etsy Blog</Link>
              <Link href="#">Etsy United Kingdom</Link>
              <Link href="#">Etsy Germany</Link>
              <Link href="#">Etsy Canada</Link>
            </VStack>

            {/* Sell section */}
            <VStack align="start" spacing={2} flex={{ base: 'none', md: '1' }}>
              <Text fontSize="lg" fontWeight="bold">
                Sell
              </Text>
              <Link href="#">Sell on etsy</Link>
              <Link href="#">Teams</Link>
              <Link href="#">Forums</Link>
              <Link href="#">Affiliate and Creators</Link>
            </VStack>

            {/* About section */}
            <VStack align="start" spacing={2} flex={{ base: 'none', md: '1' }}>
              <Text fontSize="lg" fontWeight="bold">
                About
              </Text>
              <Link href="#">Etsy, Inc.</Link>
              <Link href="#">Policies</Link>
              <Link href="#">Investors</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Press</Link>
              <Link href="#">Impact</Link>
              <Link href="#">Legal Imprint</Link>
            </VStack>

            {/* Help section */}
            <VStack align="start" spacing={2} flex={{ base: 'none', md: '1' }}>
              <Text fontSize="lg" fontWeight="bold">
                Help
              </Text>
              <Link href="#">Help Center</Link>
              <Link href="#">Privacy Settings</Link>
            </VStack>
          </Stack>

          {/* Bottom section with additional links and legal info */}
          <HStack justifyContent={justifyContent} direction={hStackDirection} alignItems={alignItems} wrap="wrap">
            <Text>Hongkong | English | $ (HKD)</Text>
            <HStack spacing={2} justifyContent="center">
              <Link href="#">Terms of use</Link>
              <Text>|</Text>
              <Link href="#">Privacy</Link>
              <Text>|</Text>
              <Link href="#">Interest-based ads</Link>
              <Text>|</Text>
              <Link href="#">Local shops</Link>
              <Text>|</Text>
              <Link href="#">Regions</Link>
            </HStack>
          </HStack>

          {/* Copyright text */}
          <Text textAlign="center">© 2024 Etsy, Inc.</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

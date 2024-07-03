import React from 'react';
import { Box, Center, Heading, Text, Stack, Collapse, Button, useDisclosure, useBreakpointValue } from '@chakra-ui/react';

const About = () => {
  const { isOpen: isOpen1, onToggle: onToggle1 } = useDisclosure();
  const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
  const { isOpen: isOpen3, onToggle: onToggle3 } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const renderCardContent = (title, content, isOpen, onToggle) => (
    <Box
      bg="white"
      borderWidth="2px"
      borderRadius="10px"
      w="350px"
      h={isMobile ? 'auto' : '320px'}
      textAlign="center"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
      transition="box-shadow 0.3s ease-in-out"
      _hover={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }}
    >
      {isMobile ? (
        <>
          <Button onClick={onToggle} w="100%" textAlign="left" fontSize="xl" fontWeight="bold" color="#F3803A">
            {title}
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <Box p="20px">
              <Text color="#000000" textAlign="left">
                {content}
              </Text>
            </Box>
          </Collapse>
        </>
      ) : (
        <Box p="20px">
          <Text fontSize="xl" fontWeight="bold" color="#F3803A" mb="10px">
            {title}
          </Text>
          <Text color="#000000" textAlign="left">
            {content}
          </Text>
        </Box>
      )}
    </Box>
  );

  return (
    <Box bg="#FDE7D9" maxW="1440px" mx="auto" p="20px" borderRadius={10} mt={20}>
      <Center>
        <Box textAlign="center" mb="40px">
          <Heading as="h1" color="#F3803A">
            What is Etsy?
          </Heading>
          <Text color="#000000" mt="10px">
            Read our wonderful weird story
          </Text>
        </Box>
      </Center>
      <Stack spacing={10} direction={['column', 'column', 'row']} justify="center" alignItems="center">
        {renderCardContent(
          'A community doing good',
          'Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some more details...',
          isOpen1,
          onToggle1
        )}
        {renderCardContent(
          'Support independent creators',
          'There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.',
          isOpen2,
          onToggle2
        )}
        {renderCardContent(
          'Peace of mind',
          'Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.',
          isOpen3,
          onToggle3
        )}
      </Stack>
    </Box>
  );
};

export default About;

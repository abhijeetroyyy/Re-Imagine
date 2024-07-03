import React from 'react';
import { Box, Button, Input, Text, Flex } from '@chakra-ui/react';

const SubscriptionBox = () => {
  return (
    <Box
      maxW="1440px"
      w="100%"
      p="6"
      bg="gray.200"
      borderRadius="md"
      mx="auto"
      my="4"
      mt={20}
    >
      <Text fontSize="xl" textAlign="center" mb="4">
        Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on{' '}
        <Text as="span" color="orange.500" fontWeight="bold">
          Etsy.
        </Text>
      </Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        gap="4"
      >
        <Input
          placeholder="Email address"
          size="lg"
          border="2px solid black"
          w={{ base: '100%', md: 'auto' }}
          minW="300px" // Minimum width to ensure visibility
          mb={{ base: '4', md: '0' }}
        />
        <Button
          size="lg"
          colorScheme="orange"
          flexShrink="0"
        >
          SUBSCRIBE NOW
        </Button>
      </Flex>
    </Box>
  );
};

export default SubscriptionBox;

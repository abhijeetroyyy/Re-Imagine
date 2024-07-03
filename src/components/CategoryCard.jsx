import React, { useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const CategoryCard = ({ name, src }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      boxShadow="lg"
      borderRadius="md"
      overflow="hidden"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: 'scale(0.95)', boxShadow: '2xl' }}
      bg="white"
      width="100%"
      height="100%"
    >
      <Image src={src} alt={name} boxSize="100%" objectFit="cover" />
      <Box
        position="absolute"
        bottom="0"
        width="100%"
        bg="rgba(0, 0, 0, 0.6)"
        color="white"
        p={2}
        opacity={isHovered ? 1 : 1} // Always visible on mobile
        transition="opacity 0.3s"
        textAlign="center"
      >
        <Text fontWeight="bold">{name}</Text>
      </Box>
    </Box>
  );
};

export default CategoryCard;

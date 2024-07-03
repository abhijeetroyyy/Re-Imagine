import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const LocalMakers = () => {
  const categories = [
    { id: 1, src: 'https://i.etsystatic.com/27692523/r/il/8fea47/5594941726/il_340x270.5594941726_n5hm.jpg', name: 'Terracotta' },
    { id: 2, src: 'https://i.etsystatic.com/13385248/r/il/8f0d90/2366233561/il_340x270.2366233561_l7p6.jpg', name: 'Pottery' },
    { id: 3, src: 'https://i.etsystatic.com/20790202/r/il/df39a6/5859710941/il_300x300.5859710941_5g2g.jpg', name: 'Coins' },
    { id: 4, src: 'https://i.etsystatic.com/8222404/c/1754/1754/122/0/il/22fa0a/5354668526/il_300x300.5354668526_rbgu.jpg', name: 'Clothes' },
    { id: 5, src: 'https://i.etsystatic.com/9508060/r/il/9ab8cb/1879460366/il_300x300.1879460366_qzxk.jpg', name: 'Rings' },
    { id: 6, src: 'https://i.etsystatic.com/10014539/r/il/780a46/5719552530/il_300x300.5719552530_s3b8.jpg', name: 'Hand-Made' },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      autoPlay: true, // Enable auto sliding on mobile
    },
  };

  const CustomLeftArrow = ({ onClick }) => (
    <ChevronLeftIcon
      onClick={onClick}
      fontSize="2xl"
      color="gray.400"
      position="absolute"
      left="4"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      cursor="pointer"
    />
  );

  const CustomRightArrow = ({ onClick }) => (
    <ChevronRightIcon
      onClick={onClick}
      fontSize="2xl"
      color="gray.400"
      position="absolute"
      right="4"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      cursor="pointer"
    />
  );

  return (
    <Box maxW="1440px" mx="auto" p={5} position="relative" mt={20}>
      <Heading
        fontSize="4xl"
        fontWeight="bold"
        mb={6}
        textAlign="center"
        bgGradient="linear(to-b, #F3803A, #8D4A22)"
        bgClip="text"
      >
        Shop From Local Makers
      </Heading>

      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        autoPlaySpeed={3000} // Adjust auto play speed if needed
        infinite // Enable infinite looping
        autoPlay // Enable auto play globally
      >
        {categories.map((category) => (
          <Box key={category.id} p={2} w="100%" h="320px" position="relative" maxW="300px">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              w="100%"
              h="100%"
              _hover={{
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
              }}
              style={{ position: 'relative' }}
            >
              <img
                src={category.src}
                alt={category.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="rgba(0,0,0,0.7)"
                color="white"
                p="4"
                textAlign="center"
              >
                <strong>{category.name}</strong>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default LocalMakers;

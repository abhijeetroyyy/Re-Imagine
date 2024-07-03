import React from "react";
import {
  Box,
  Image,
  Text,
  Badge,
  Flex,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RecentlyViewed = () => {
  const products = [
    {
      id: 1,
      img: "https://i.etsystatic.com/16178913/r/il/6290c8/5223323737/il_794xN.5223323737_joc3.jpg",
      title: "Viking battle hammer with carved handle",
      price: "15,994+",
      originalPrice: " 30,994+",
      discount: "50% off",
    },
    {
      id: 2,
      img: "https://i.etsystatic.com/19311499/r/il/f23956/4087397196/il_794xN.4087397196_qbwm.jpg",
      title: "Wood Watch,Personalized Watch,Engraved Watch",
      price: "4,149",
      originalPrice: "10,373",
      discount: "60% off",
    },
    {
      id: 3,
      img: "https://i.etsystatic.com/34379934/r/il/628644/4796937795/il_794xN.4796937795_qnr6.jpg",
      title: "Custom Name Necklace, 18K Gold Plated Name Necklace",
      price: "3,882",
      originalPrice: "7,765",
      discount: "50% off",
    },
    {
      id: 4,
      img: "https://i.etsystatic.com/29453266/r/il/89b3e3/3585483802/il_794xN.3585483802_huit.jpg",
      title: "Custom Photo on Wood, Engraved Photo on Wood with Watercolor Style,",
      price: "3,882",
      originalPrice: "7,765",
      discount: "50% off",
    },
    {
      id: 5,
      img: "https://i.etsystatic.com/26214445/r/il/51f596/6146402075/il_794xN.6146402075_deb9.jpg",
      title: "Stunning STS Sterling Silver Three Stone Ethiopian Opal & Diamond Ring P 1/2",
      price: "3,882",
      originalPrice: "7,765",
      discount: "50% off",
    },
    {
      id: 6,
      img: "https://i.etsystatic.com/28532188/r/il/e6908f/3339211030/il_794xN.3339211030_5e4l.jpg",
      title: "Teacher Appreciation Gift, Origami pen holder, Gift for teacher",
      price: "3,882",
      originalPrice: "7,765",
      discount: "50% off",
    },
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
    },
  };

  const CustomLeftArrow = ({ onClick }) => (
    <IconButton
      aria-label="left-arrow"
      variant="outline"
      borderRadius="full"
      position="absolute"
      left="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      onClick={onClick}
    >
      <ChevronLeftIcon />
    </IconButton>
  );

  const CustomRightArrow = ({ onClick }) => (
    <IconButton
      aria-label="right-arrow"
      variant="outline"
      borderRadius="full"
      position="absolute"
      right="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      onClick={onClick}
    >
      <ChevronRightIcon />
    </IconButton>
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
        Our Most Popular
      </Heading>

      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {products.map((product) => (
          <Box key={product.id} p={2} w="300px" h="320px">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              w="100%"
              h="100%"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <Image
                src={product.img}
                alt={product.title}
                w="100%"
                h="150px"
                objectFit="cover"
                transition="transform 0.3s ease-in-out"
                _groupHover={{ transform: "scale(1.1)" }}
              />
              <Box p="8">
                

                <Text
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {product.title}
                </Text>

                <Box>
                  <Text as="span" fontWeight="bold">
                    ₹ {product.price}
                  </Text>
                  <Text
                    as="span"
                    color="gray.600"
                    textDecoration="line-through"
                    ml={2}
                  >
                    ₹ {product.originalPrice}
                  </Text>
                  <Text as="span" ml={2} color="green.500">
                    {product.discount}
                  </Text>
                </Box>

                <Text mt={2} color="gray.500">
                  FREE Delivery
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default RecentlyViewed;

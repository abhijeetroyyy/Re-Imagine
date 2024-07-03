import React, { useState, useEffect } from 'react';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import CategoryCard from './CategoryCard';

const categories = [
  { src: 'https://images.meesho.com/images/products/47032277/fvwq6_512.webp', name: 'Gifts For Dad', path: '/products/dad' },
  { src: 'https://media.istockphoto.com/id/1431243367/vector/3d-white-gift-boxes.jpg?s=612x612&w=0&k=20&c=ikKzS3S6VR9cIJTyOfEIcwXtwFIY1W7ZqjD7CPwShUQ=', name: 'Gifts For Birthday', path: '/products/birthday' },
  { src: 'https://cdn-manoronhigh.b-cdn.net/wp-content/uploads/2019/03/456915-PFCMKZ-6.jpg', name: 'Gifts For Wedding', path: '/products/wedding' },
  { src: 'https://res.cloudinary.com/wolfandbadger/image/upload/f_auto,q_auto:best,c_pad,h_800,w_800/products/wbh9anjkqzzrretnt2wg', name: 'Gifts For Barware', path: '/products/barware' },
  { src: 'https://cdn11.bigcommerce.com/s-6e1n67clqw/images/stencil/500x500/products/62045/296185/y1aoaxctrct4e5dy5mwy__34918.1712001063.jpg', name: 'Gifts For Home', path: '/products/home' },
];

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxW="1440px" p={6} mt={20}>
      <Heading
        fontSize="4xl"
        fontWeight="bold"
        mb={6}
        textAlign="center"
        bgGradient="linear(to-b, #F3803A, #8D4A22)"
        bgClip="text"
      >
        Shop our popular gift categories
      </Heading>
      <SimpleGrid columns={[1, null, 3, 5]} spacing={6} w="100%">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            name={category.name}
            src={category.src}
            currentIndex={currentIndex}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Categories;

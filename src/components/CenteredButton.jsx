import React from "react";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";

const CenteredButton = () => {
  return (
    <Flex
      maxW="1440px" // Set maximum width to 1440px
      mx="auto" // Center align horizontally
      mt={20}
      borderRadius={10}
      justifyContent="center"
      alignItems="center"
      paddingTop={20}
      padding={50}
      bg="#EAE8E8" // Adjust background color here
    >
      <Box textAlign="center">
        <Heading as="h1" mb={4}>
          Have a question? Well, we’ve got some answers.
        </Heading>
        <Button
          size="lg"
          bg="#F3803A" // Adjust button background color here
          color="white"
          borderRadius="20px"
          _hover={{ bg: "#DD6B2F" }} // Adjust hover background color if needed
        >
          Help Center
        </Button>
      </Box>
    </Flex>
  );
};

export default CenteredButton;

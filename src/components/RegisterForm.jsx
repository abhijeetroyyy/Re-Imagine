import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Stack,
  Link,
  useToast,
} from '@chakra-ui/react';
import { useAuth } from './AuthContext';

const RegisterForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const { signIn } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users', {
        email,
        name,
        password,
      });
      toast({
        title: 'Registration successful.',
        description: 'You can now sign in with your new account.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      console.log('Registration successful:', response.data);
      onClose(); // Close the modal on successful registration
      signIn(); // Trigger sign-in in AuthContext
    } catch (error) {
      toast({
        title: 'Registration failed.',
        description:
          error.message || 'Unable to register. Please try again later.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.error('Error registering user:', error);
    }
  };

  return (
    <Box
      maxW={{ base: '90%', sm: '80%', md: '60%', lg: '40%' }} // Adjusting max width for better responsiveness
      mx="auto"
      p={{ base: '5', md: '8' }}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
    >
      <Heading as="h2" textAlign="center" mb="4" color="orange.500">
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="orange" variant="solid" width="full">
            Register
          </Button>
        </Stack>
      </form>
      <Text mt="4" textAlign="center">
        Already have an account?{' '}
        <Link color="orange.500" onClick={onClose}>
          Sign In
        </Link>
      </Text>
    </Box>
  );
};

export default RegisterForm;

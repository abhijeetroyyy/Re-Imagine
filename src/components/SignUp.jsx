import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useToast,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import { useAuth } from './AuthContext';

const SignUp = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
  const toast = useToast();
  const { signIn } = useAuth();

  const handleShowClick = () => setShowPassword(!showPassword);

  const openRegisterForm = () => {
    setIsRegisterFormOpen(true);
    onClose(); // Close the sign-in modal when opening register form
  };

  const closeRegisterForm = () => setIsRegisterFormOpen(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await axios.get('http://localhost:5000/users', {
        params: { email, password },
      });

      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        toast({
          title: 'Login successful.',
          description: 'You have successfully logged in.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        console.log('Login successful:', user);
        onClose(); // Close the sign-in modal on successful login
        signIn(); // Trigger sign-in in AuthContext
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      toast({
        title: 'Login failed.',
        description:
          error.message ||
          'Unable to login. Please check your credentials and try again.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          borderRadius="10px"
          maxW={{ base: '90%', sm: '70%', md: '50%', lg: '40%' }}
          border="2px solid black"
          p={5}
        >
          <ModalHeader textAlign="center" color="orange.500">
            Sign In
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack spacing={4} as="form" onSubmit={handleLogin} alignItems="center">
              <FormControl id="email" isRequired>
                <FormLabel>
                  <HStack>
                    <EmailIcon color="orange.500" />
                    <Text>Email Address</Text>
                  </HStack>
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your Email Address"
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>
                  <HStack>
                    <LockIcon color="orange.500" />
                    <Text>Password</Text>
                  </HStack>
                </FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your Password"
                  />
                  <InputRightElement h="full">
                    <Button
                      variant="ghost"
                      onClick={handleShowClick}
                      _focus={{ boxShadow: 'none' }}
                    >
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button type="submit" colorScheme="orange" variant="solid" width="full">
                Sign In
              </Button>
            </Stack>
            <Text mt={4} textAlign="center">
              Don't have an account?{' '}
              <Link color="orange.500" onClick={openRegisterForm}>
                Register Now!
              </Link>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Register Form Modal */}
      {isRegisterFormOpen && (
        <Modal isOpen={isRegisterFormOpen} onClose={closeRegisterForm}>
          <ModalOverlay />
          <ModalContent
            borderRadius="10px"
            maxW={{ base: '100%', sm: '70%', md: '50%', lg: '40%' }}
            border="2px solid black"
            p={4}
          >
            <ModalHeader textAlign="center" color="orange.500">
              Register
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <RegisterForm isOpen={isRegisterFormOpen} onClose={closeRegisterForm} />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default SignUp;

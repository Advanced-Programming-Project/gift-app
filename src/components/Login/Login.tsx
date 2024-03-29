import React, {ChangeEvent, FormEvent, useState} from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  InputRightElement,
  Image, Alert, AlertIcon, AlertTitle, AlertDescription,
} from '@chakra-ui/react';
import {FaUserAlt, FaLock} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import { AuthenticationResponse } from "../../types/AuthenticationResponse";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(false)
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setError(false)
  };

  const checkLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if (response.ok) {
      await (async () => {
        const authResponse: AuthenticationResponse = await response.json();
        localStorage.setItem('token', authResponse.token);
        navigate("/students");
      })();
    } else {
      setError(true)
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={process.env.PUBLIC_URL + 'efrei-logo.svg'}
          alt={'Logo Efrei'}
        />
        <Box minW={{base: '90%', md: '468px'}}>
          <form onSubmit={checkLogin}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <Heading color={'blue.500'}>Authentication</Heading>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents={'none'}>
                    <CFaUserAlt color={'gray.300'}/>
                  </InputLeftElement>
                  <Input
                    type={'email'}
                    placeholder={'Email'}
                    value={email}
                    onChange={handleUsernameChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents={'none'} color={'gray.300'}>
                    <CFaLock color={'gray.300'}/>
                  </InputLeftElement>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={'Password'}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <InputRightElement width={'4.5rem'}>
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              {error && (
                <Alert status='error'>
                  <AlertIcon/>
                  <AlertTitle>Error !</AlertTitle>
                  <AlertDescription>Wrong username or password.</AlertDescription>
                </Alert>
              )}
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
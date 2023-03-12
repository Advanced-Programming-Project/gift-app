import React, { ChangeEvent, useState } from 'react';
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
import { FaUserAlt, FaLock } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

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
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={(event) => {
            event.preventDefault()
            if(password == "1234" && email == "admin@efrei.net"){
              navigate("/students");
            }else{
              setError(true)
            }
          }}>
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
                    <CFaUserAlt color={'gray.300'} />
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
                    <CFaLock color={'gray.300'} />
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
              { error && (
                <Alert status='error'>
                  <AlertIcon />
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

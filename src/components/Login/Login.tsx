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
  Image,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
          <form>
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
                    value={username}
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

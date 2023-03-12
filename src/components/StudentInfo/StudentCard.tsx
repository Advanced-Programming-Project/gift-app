import React from "react";
import { Box, Card, CardBody, CardHeader, Heading, Text, Image, Center, Divider, Stack } from "@chakra-ui/react";

export const StudentCard = () => {
  return (
    <Box w={'600px'} h={'430px'}>
      <Card>
        <CardHeader
          bg={'lightgrey'}
        >
          <Heading as={'h4'} size={'sm'}>Student&apos;s detail: </Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={4} direction={'column'}>
            <Center>
              <Image
                borderRadius={'full'}
                boxSize={'150px'}
                src='gibbresh.png'
                fallbackSrc='https://via.placeholder.com/150'
              />
            </Center>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Student ID: </Text>
              <Text fontSize={'md'}>1</Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Last Name: </Text>
              <Text fontSize={'md'}>Test</Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>First Name: </Text>
              <Text fontSize={'md'}>Test</Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Group: </Text>
              <Text fontSize={'md'}>M2</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
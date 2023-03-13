import React from "react";
import { Box, Card, CardBody, CardHeader, Heading, Text, Image, Center, Divider, Stack } from "@chakra-ui/react";
import {Student} from "../../types/Student";

export const StudentCard = (props: { student: Student | null }) => {
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
              <Text fontSize={'md'}>{props.student?.id}</Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Last Name: </Text>
              <Text fontSize={'md'}>{props.student?.lastname}</Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>First Name: </Text>
              <Text fontSize={'md'}>{props.student?.firstname}</Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Group: </Text>
              <Text fontSize={'md'}>{props.student?.promotion}</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
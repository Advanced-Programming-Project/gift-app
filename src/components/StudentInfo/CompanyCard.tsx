import React from "react";
import { Box, Card, CardBody, CardHeader, Heading, Text, Divider, Stack } from "@chakra-ui/react";
import { Student } from "../../types/Student";

export const CompanyCard = (props: { student: Student | null }) => {
  return (
    <Box w={'700px'} h={'430px'}>
      <Card>
        <CardHeader
          bg={'lightgrey'}
        >
          <Heading as={'h4'} size={'sm'}>Company&apos;s detail: </Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={3.5} direction={'column'}>
            <Heading as={'h3'} size={'lg'} color={'blue.400'}></Heading>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Name: </Text>
              <Text fontSize={'md'}>{props.student?.studentInternship[0].companyName}</Text>
            </Box>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Address: </Text>
              <Box bg={'whitesmoke'} maxHeight={'50px'} wordBreak={'break-word'}>
                <Text fontSize={'md'}>{props.student?.studentInternship[0].companyAddress}</Text>
              </Box>
            </Box>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Tutor: </Text>
              <Text fontSize={'md'}>{props.student?.studentInternship[0].companyTutorName}</Text>
            </Box>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Start Date: </Text>
              <Text fontSize={'md'}>{props.student?.studentInternship[0].startingDate}</Text>
            </Box>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>End Date: </Text>
              <Text fontSize={'md'}>{props.student?.studentInternship[0].endingDate}</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
import React from "react";
import { Box, Card, CardBody, CardHeader, Heading, Text, Divider, Stack } from "@chakra-ui/react";

export const CompanyCard = () => {
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
            <Heading as={'h3'} size={'lg'} color={'blue.400'}>a</Heading>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Name: </Text>
              <Text fontSize={'md'}>1</Text>
            </Box>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Address: </Text>
              <Box bg={'whitesmoke'} maxHeight={'50px'} wordBreak={'break-word'}>
                <Text fontSize={'md'} >Lorem industry since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty</Text>
              </Box>
            </Box>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Tutor: </Text>
              <Text fontSize={'md'}>Test</Text>
            </Box>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>Start Date: </Text>
              <Text fontSize={'md'}>M2</Text>
            </Box>
            <Divider/>
            <Box
              display={'flex'}
              flexDirection={'row'}
            >
              <Text fontSize='md' as={'b'} width={'50%'}>End Date: </Text>
              <Text fontSize={'md'}>M2</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
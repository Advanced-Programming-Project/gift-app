import React from "react";
import { Box, Card, CardHeader, Divider, Heading, Text, Input } from "@chakra-ui/react";
import { Student } from "../../types/Student";

export const InternshipCard = (props: { student: Student | null }) => {
  return (
    <Box h={'430px'} w={'1400px'} paddingTop={4}>
      <Card>
        <CardHeader
          bg={'lightgrey'}
        >
          <Heading as={'h4'} size={'sm'}>Internship Info: </Heading>
        </CardHeader>
        <Divider />
        <Box
          p={2}
          display={'flex'}
          flexDirection={'row'}
        >
          <Text fontSize='md' p={4} as={'b'} width={'30%'}>Description: </Text>
          <Box bg={'whitesmoke'} maxHeight={'300px'} w={'800px'} wordBreak={'break-word'}>
            <Text fontSize={'md'} >{props.student?.studentInternship[0].mission}</Text>
          </Box>
        </Box>
        <Divider />
        <Box
          p={2}
          display={'flex'}
          flexDirection={'row'}
        >
          <Text fontSize='md' p={4} as={'b'} width={'30%'}>Comments: </Text>
          <Box bg={'whitesmoke'} maxHeight={'300px'} w={'800px'} wordBreak={'break-word'}>
            <Text fontSize={'md'} >{props.student?.studentInternship[0].comment}</Text>
          </Box>
        </Box>
        <Divider/>
        <Box
          p={2}
          display={'flex'}
          flexDirection={'row'}
        >
          <Text fontSize='md' p={4} as={'b'} width={'30%'}>Address: </Text>
          <Box bg={'whitesmoke'} maxHeight={'300px'} w={'800px'} wordBreak={'break-word'}>
            <Text fontSize={'md'} >{props.student?.studentInternship[0].companyAddress}</Text>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
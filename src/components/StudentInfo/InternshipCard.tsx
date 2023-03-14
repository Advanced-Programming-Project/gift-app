import React from "react";
import { Box, Card, CardHeader, Heading } from "@chakra-ui/react";

export const InternshipCard = () => {
  return (
    <Box h={'430px'} w={'1400px'} bg={'blue'} paddingTop={4}>
      <Card>
        <CardHeader>
          <Heading as={'h4'} size={'sm'}>Internship Info: </Heading>
        </CardHeader>
      </Card>
    </Box>
  );
}
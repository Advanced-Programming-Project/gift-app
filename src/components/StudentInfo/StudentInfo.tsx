import React from "react";
import { Flex, Image, Stack } from "@chakra-ui/react";
import { StudentCard } from "./StudentCard";
import { CompanyCard } from "./CompanyCard";

export type TypeStudentInfoProps = {
  studentId: number,
}
export const StudentInfo = ({}) => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      alignItems={'center'}
      justifyContent="center"
    >
      <Image
        src={'%PUBLIC_URL%/efrei-logo.svg'}
        alt={'Logo Efrei'}
        boxSize={'200px'}
      />
      <Stack
        width={'100em'}
        spacing={4}
        p="1rem"
        backgroundColor="whiteAlpha.50"
        boxShadow="md"
      >
        <Flex
          flexDirection={'row'}
          justifyContent={'space-evenly'}
        >
          <StudentCard></StudentCard>
          <CompanyCard/>
        </Flex>
      </Stack>
  </Flex>
  );
};
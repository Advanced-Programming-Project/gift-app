import React, {useEffect, useState} from "react";
import {Flex, Image, Stack} from "@chakra-ui/react";
import {StudentCard} from "./StudentCard";
import {CompanyCard} from "./CompanyCard";
import { InternshipCard } from "./InternshipCard";
import { useNavigate, useParams } from "react-router-dom";

export const StudentInfo = () => {
  const [student, setStudent] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/students/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    })
      .then(async (res) => {
          setStudent(await res.json())
        }
      )
  }, []);

  console.log(student);
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      alignItems={'center'}
      justifyContent="center"
    >
      <Image
        src={'/efrei-logo.svg'}
        alt={'Logo Efrei'}
        boxSize={'200px'}
        onClick={() => navigate('/students')}
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
          wrap={'wrap'}
          justifyContent={'space-evenly'}
        >
          <StudentCard student={student}></StudentCard>
          <CompanyCard student={student}/>
          <InternshipCard student={student}></InternshipCard>
        </Flex>
      </Stack>
    </Flex>
  );
};

import React, {useCallback, useEffect, useState} from "react";
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Button, IconButton,
} from "@chakra-ui/react";
import {CheckCircleIcon, SearchIcon} from '@chakra-ui/icons';
import {data as initialData} from "../../examples/data";
import {TypeEditInfo} from "@inovua/reactdatagrid-community/types";
import {Student} from "../../types/Student";
import {useNavigate} from "react-router-dom";


export const InternsTable = () => {
  const navigate = useNavigate();

  const showStudentInfo = (id: number) => {
    if (id) {
      navigate(`/students/${id}`)
    }
  }

  const boolRender = {
    render: (edit: TypeEditInfo) => {
      return edit.value ? (
        <CheckCircleIcon id={'cell'} color={'green'}/>
      ) : (
        <CheckCircleIcon id={'cell'} color={'red'}/>
      )
    }
  };

  const showStudentButtonRender = {
    render: (event: TypeEditInfo) => {
      return (
        <Center>
          <IconButton size={'xs'} colorScheme={'blue'} onClick={() => showStudentInfo(event.value)}
                      icon={<SearchIcon/>} aria-label={"Show student infos"}/>
        </Center>
      );
    }
  }

  const columns = React.useMemo(
    () => [
      {
        header: 'Show Student',
        name: 'id',
        draggable: false,
        editable: false,
        ...showStudentButtonRender,
      },
      {
        header: 'Group',
        name: 'promotion',
        draggable: false,
        width: 100,
      },
      {
        header: 'Last Name',
        name: 'lastname',
        draggable: false,
      },
      {
        header: 'First Name',
        name: 'firstname',
        draggable: false,
      },
      {
        header: 'Specifications',
        name: 'specifications',
        draggable: false,
        ...boolRender,
      },
      {
        header: 'Visit Form',
        name: 'visitForm',
        draggable: false,
        ...boolRender,
      },
      {
        header: 'Evaluation Form',
        name: 'evaluationForm',
        draggable: false,
        ...boolRender,
      },
      {
        header: 'Web Survey',
        name: 'webSurvey',
        draggable: false,
        ...boolRender,
      },
      {
        header: 'Report sent',
        name: 'reportSent',
        draggable: false,
        ...boolRender,
      },
      {
        header: 'Oral Presentation',
        name: 'oralPresentation',
        draggable: false,
        ...boolRender,
      },
      {
        group: 'visit',
        header: 'Planned',
        draggable: false,
        name: 'visitPlanned',
        ...boolRender,
      },
      {
        group: 'visit',
        header: 'Done',
        draggable: false,
        name: 'visitDone',
        ...boolRender,
      },
      {
        header: 'Start Date',
        name: 'startDate',
        draggable: false,
      },
      {
        header: 'End Date',
        name: 'endDate',
        draggable: false,
      },
      {
        header: 'Company',
        name: 'company',
        draggable: false,
      },
      {
        header: 'Tutor',
        name: 'tutor',
        draggable: false,
      },
      {
        header: 'Address',
        name: 'address',
        draggable: false,
      },
      {
        group: 'grade',
        header: 'Technical',
        name: 'technicalGrade',
        draggable: false,
      },
      {
        group: 'grade',
        header: 'Communication',
        name: 'communicationGrade',
        draggable: false,
      },
    ],
    []
  );

  const groups = React.useMemo(
    () => [
      {
        name: 'visit',
        header: 'Visit',
      },
      {
        name: 'grade',
        header: 'Grade',
      },
    ],
    []
  );

  const gridStyle = {maxWidth: 1400, minHeight: 500};

  const [dataSource, setDataSource] = useState(initialData)

  const onEditComplete = useCallback(() => {
    const data = [...dataSource];
    setDataSource(data);
  }, [dataSource])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/tutors/students/1`).then(
      async (res) => {
        setDataSource([...initialData, ...(await res.json() as Student[])])
      }
    );

  }, [])

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      alignItems={'center'}
      justifyContent="center"
    >
      <Image
        src={'./efrei-logo.svg'}
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
        <Heading as='h2' size={'lg'}>Welcome back Tutor</Heading>
        <Center>
          <ReactDataGrid
            idProperty="id"
            columns={columns}
            groups={groups}
            dataSource={dataSource}
            style={gridStyle}
            editable={true}
            onEditComplete={onEditComplete}
          />{' '}
        </Center>
        <Center>
          <Stack
            alignItems={'center'}
            direction={'row'}
            spacing={'40'}
          >
            <Button>Add</Button>
          </Stack>
        </Center>
      </Stack>
    </Flex>
  );
};

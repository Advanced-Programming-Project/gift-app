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
import {TypeEditInfo} from "@inovua/reactdatagrid-community/types";
import {Student} from "../../types/Student";
import {useNavigate} from "react-router-dom";
import {StudentInternship} from "../../types/StudentInternship";


export const InternsTable = () => {
  const navigate = useNavigate();

  const showStudentInfo = (id: number) => {
    if (id) {
      navigate(`/students/${id}`)
    }
  }

  const boolRender = {
    render: (edit: any) => {
      return renderInternship(edit.data, edit.cellProps.name) ? (
        <CheckCircleIcon id={'cell'} color={'green'}/>
      ) : (
        <CheckCircleIcon id={'cell'} color={'red'}/>
      )
    }
  };

  const showStudentButtonRender = {
    render: (event: any) => {
      return (
        <Center>
          <IconButton size={'xs'} colorScheme={'blue'} onClick={() => showStudentInfo(event.data.id)}
                      icon={<SearchIcon/>} aria-label={"Show student infos"}/>
        </Center>
      );
    }
  }

  const renderInternship = (student: Student, field: string) => {
    if (student.studentInternship[0]) {
      const fieldName = field as keyof StudentInternship;

      return (student.studentInternship[0] as StudentInternship)[fieldName]
    } else {
      return null
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
        ...boolRender
      },
      {
        header: 'Visit Form',
        name: 'visitForm',
        draggable: false,
        ...boolRender
      },
      {
        header: 'Evaluation Form',
        name: 'evaluationForm',
        draggable: false,
        ...boolRender
      },
      {
        header: 'Web Survey',
        name: 'webSurvey',
        draggable: false,
        ...boolRender
      },
      {
        header: 'Report sent',
        name: 'reportSent',
        draggable: false,
        ...boolRender
      },
      {
        header: 'Oral Presentation',
        name: 'oralPresentation',
        draggable: false,
        ...boolRender
      },
      {
        group: 'visit',
        header: 'Planned',
        draggable: false,
        name: 'visitPlanned',
        ...boolRender
      },
      {
        group: 'visit',
        header: 'Done',
        draggable: false,
        name: 'visitDone',
        ...boolRender
      },
      {
        header: 'Start Date',
        name: 'startingDate',
        draggable: false,
        render: (data: any) => renderInternship(data.data, data.cellProps.name)
      },
      {
        header: 'End Date',
        name: 'endingDate',
        draggable: false,
        render: (data: any) => renderInternship(data.data, data.cellProps.name)
      },
      {
        header: 'Company',
        name: 'companyName',
        draggable: false,
        render: (data: any) => renderInternship(data.data, data.cellProps.name)
      },
      {
        header: 'Tutor',
        name: 'companyTutorName',
        draggable: false,
        render: (data: any) => renderInternship(data.data, data.cellProps.name)
      },
      {
        header: 'Address',
        name: 'companyAddress',
        draggable: false,
        render: (data: any) => renderInternship(data.data, data.cellProps.name)
      },
      {
        group: 'grade',
        header: 'Technical',
        name: 'technicalGrade',
        draggable: false,
        render: (data: any) => renderInternship(data.data, data.cellProps.name)
      },
      {
        group: 'grade',
        header: 'Communication',
        name: 'communicationGrade',
        draggable: false,
        render: (data: any) => renderInternship(data.data, data.cellProps.name)
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

  const [dataSource, setDataSource] = useState([] as Student[])

  const onEditComplete = useCallback(({value, columnId, rowIndex}: TypeEditInfo) => {
    const data = [...dataSource] as Student[];

    if(Object.keys(data[0].studentInternship[0]).includes(columnId)) {
      const fieldName = columnId as keyof StudentInternship;

      if (typeof ((data[rowIndex] as Student).studentInternship[0] as StudentInternship)[fieldName] == "boolean"){
        value = value === 'false' ? false : !!value;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ((data[rowIndex] as Student).studentInternship[0] as StudentInternship)[fieldName] = value
    } else {
      data[rowIndex][columnId] = value;
    }

    setDataSource(data);
  }, [dataSource])

  useEffect(() => {
    (async () => {
      try {
        const responseGet = await fetch(`${process.env.REACT_APP_API_URL}/students`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const students: Student[] = await responseGet.json();
        setDataSource(students);
      } catch (e) {
        console.dir(e);
      }
    })();
  }, [])

  const updateStudents = async () => {
    if (!dataSource.length) {
      const responsePost = await fetch(`${process.env.REACT_APP_API_URL}/students/all`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(dataSource)
      });
      const students = await responsePost.json();
      console.dir(students);
    }
  }

  const handleAddRow = () => {
    setDataSource(prevData => [
      ...prevData,
      { firstname: '', lastname: '', email:'', promotion:'', studentInternship: [
          {
            specifications: false,
            visitForm: false,
            evaluationForm: false,
            webSurvey: false,
            reportSent: false,
            oralPresentation: false,
            visitPlanned: false,
            visitDone: false,
            technicalGrade: 0,
            communicationGrade: 0,
            mission: '',
            startingDate: '',
            endingDate: '',
            companyName: '',
            companyTutorName: '',
            companyAddress: '',
            comment: '',
          }]}
    ]);
  };

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
            <Button onClick={handleAddRow}>Add</Button>
            <Button onClick={updateStudents}>Update</Button>
          </Stack>
        </Center>
      </Stack>
    </Flex>
  );
};
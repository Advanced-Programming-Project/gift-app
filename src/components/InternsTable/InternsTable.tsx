import React, { useCallback, useState } from "react";
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { data as initialData } from "../../examples/data";
import { TypeEditInfo } from "@inovua/reactdatagrid-community/types";

const boolRender = {
  render: (edit: TypeEditInfo) =>{
    return edit.value ? (
      <CheckCircleIcon id={'cell'} color={'green'} />
    ) : (
      <CheckCircleIcon id={'cell'} color={'red'} />
    )
  },
  renderEditor: (editorProps: any) => {
    return (
      <div
        tabIndex={0}
        onClick={() => {
          editorProps.onChange(!editorProps.value);
        }}
        onBlur={editorProps.onComplete}
      >
        {editorProps.value ? (
          <CheckCircleIcon id={'cell'} color={'green'} />
        ) : (
          <CheckCircleIcon id={'cell'} color={'red'} />
        )}
      </div>
    );
  },
};

export const InternsTable = () => {
  const columns = React.useMemo(
    () => [
      {
        header: 'Group',
        name: 'group',
        draggable: false,
        width: 100,
      },
      {
        header: 'Last Name',
        name: 'lastName',
        draggable: false,
      },
      {
        header: 'First Name',
        name: 'firstName',
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

  const onEditComplete = useCallback(({ value, columnId, rowIndex }: TypeEditInfo) => {
    const data = [...dataSource];
    setDataSource(data);
  }, [dataSource])

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      alignItems={'center'}
      justifyContent="center"
    >
      <Image
        src={process.env.PUBLIC_URL + 'efrei-logo.svg'}
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
            <Button>Add</Button>
          </Stack>
        </Center>
      </Stack>
    </Flex>
  );
};

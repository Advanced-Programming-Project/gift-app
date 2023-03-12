import React, { useState } from "react";
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import { Flex } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { data } from "../../examples/data";

const boolRender = {
  render: (value: boolean) =>
    value ? (
      <CheckCircleIcon color={'green'} />
    ) : (
      <CheckCircleIcon color={'red'} />
    ),
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
          <CheckCircleIcon color={'green'} />
        ) : (
          <CheckCircleIcon color={'red'} />
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

  const gridStyle = {};

  const [dataSource, setDataSource] = useState(data)


  return (
    <Flex>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        groups={groups}
        dataSource={dataSource}
        style={gridStyle}
        editable={true}
      />{' '}
    </Flex>
  );
};

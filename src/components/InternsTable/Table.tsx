import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Box,
  Button,
  IconButton,
  Flex,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuOptionGroup,
  MenuList,
} from '@chakra-ui/react';

import { useTable, UseTableOptions } from 'react-table';

export const DataTable = ({ columns, data }: UseTableOptions<any>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <Box>
      <Table {...getTableProps()}>
        <Thead
          p={'0'}
          position={'sticky'}
          zIndex={'1'}
          top={'0px'}
          style={{ overflow: 'scroll' }}
          bg={'gray.100'}
        >
          {headerGroups.map((headerGroup, index) => (
            // eslint-disable-next-line react/jsx-key
            <Tr p={'0'} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line react/jsx-key
                <Th
                  borderColor="gray.200"
                  p="1em"
                  className="th1"
                  color={'gray.800'}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody className={'body1'} p={'1em'} {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <Tr className={'tr1'} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <Td
                      className="td1"
                      color={'gray.600'}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}{' '}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

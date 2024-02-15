/**
 * @file TableFooter.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import type { Meta, StoryObj } from '@storybook/react';

import { Table, TableBody } from '@mui/material';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { TableFooter } from './TableFooter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title     : 'components/Table/TableFooter',
  component : TableFooter,
  parameters: {

    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof TableFooter>;
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    numOfLines: 12,
    rowsPerPage: 10,
    page: 0,
    onPageChange: () => console.log("change page"),
    onRowsPerPageChange: () => console.log("change rows per page"),
  },
  decorators: [Story => (
    <Paper>
      <TableContainer>
        <Table>
          <TableBody>
            {[...Array(10)].map((m, i) => (
            <TableRow key={i}>
              <TableCell>Value1</TableCell>
              <TableCell>Value2</TableCell>
              <TableCell>Value3</TableCell>
              <TableCell>Value4</TableCell>
              <TableCell>Value5</TableCell>
              <TableCell>Value6</TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Story />
    </Paper>
  )]
};

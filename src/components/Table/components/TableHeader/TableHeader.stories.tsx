/**
 * @file TableHeader.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import type { Meta, StoryObj } from '@storybook/react';

import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { TableHeader } from '../TableHeader/TableHeader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title     : 'components/TableHeader',
  component : TableHeader,
  parameters: {

    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    headers: ['Header1', 'Header2', 'Header3'],
    isCollapse: false
  },
  decorators: [Story => (
    <TableContainer component={Paper}>
      <Story />
      <TableRow>
        <TableCell>Value1</TableCell>
        <TableCell>Value2</TableCell>
        <TableCell>Value3</TableCell>
      </TableRow>
    </TableContainer>
  )]
};

export const CollapseHeader: Story = {
  args: {
    headers: ['Header1', 'Header2', 'Header3'],
    isCollapse: true
  },
  decorators: [Story => (
    <TableContainer component={Paper}>
      <Story />
      <TableRow>
        <TableCell></TableCell>
        <TableCell>Value1</TableCell>
        <TableCell>Value2</TableCell>
        <TableCell>Value3</TableCell>
      </TableRow>
    </TableContainer>
  )]
};

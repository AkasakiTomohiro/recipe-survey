/**
 * @file TableRow.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import type { Meta, StoryObj } from '@storybook/react';

import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

import { TableRow } from './TableRow';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title     : 'components/Table/TableRow',
  component : TableRow,
  parameters: {

    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

const decorators = [(Story: any) => (
  <TableContainer component={Paper}>
    <Story />
  </TableContainer>
)];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    index: 0,
    row: ['Value1', 'Value2', 'Value3']
  },
  decorators: decorators
};

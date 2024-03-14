/**
 * @file TableCollapseRow.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TableBody } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { userEvent, within } from '@storybook/testing-library';

import { TableCollapseRow } from './TableCollapseRow';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title     : 'components/Table/TableCollapseRow',
  component : TableCollapseRow,
  parameters: {

    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof TableCollapseRow>;

export default meta;
type Story = StoryObj<typeof meta>;

const decorators = [(Story: any) => (
  <TableContainer component={Paper}>
    <Table>
      <TableBody>
        <Story />
      </TableBody>
    </Table>
  </TableContainer>
)];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    index: 0,
    row: ['Value1', 'Value2', 'Value3'],
    Collapse: (props) => (<>{props.index}</>)
  },
  decorators: decorators
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CollapseOpen: Story = {
  args: {
    index: 0,
    row: ['Value1', 'Value2', 'Value3'],
    Collapse: (props) => (<>{props.index}</>)
  },
  decorators: decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const collapseButton = canvas.getByRole('button', {});
    console.log(collapseButton)
    await userEvent.click(collapseButton);
  }
};

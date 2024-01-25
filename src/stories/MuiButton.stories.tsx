import type { Meta, StoryObj } from '@storybook/react';

import { MuiButton } from './MuiButton';

const meta = {
  title: 'Example/MuiButton',
  component: MuiButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof MuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'contained'
  },
};

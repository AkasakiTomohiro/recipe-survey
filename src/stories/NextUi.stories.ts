import type { Meta, StoryObj } from '@storybook/react';

import { NextUi } from './NextUi';

const meta = {
  title     : 'Example/NextUi',
  component : NextUi,
  parameters: {
    layout: 'centered'
  },
  tags    : ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof NextUi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label  : 'Button'
  }
};

export const Secondary: Story = {
  args: {
    label    : 'Loading',
    isLoading: true,
    size     : 'md'
  }
};

/**
 * @file GridFormControl.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { GridFormControl } from './GridFormControl';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GridFormControl> = {
  title : 'components/ControllerForm/GridFormControl',
  render: (args): JSX.Element => <GridFormControl {...args} />
};

export default meta;

type Story = StoryObj<typeof GridFormControl>;

export const Primary: Story = {
  args: {
    children: <div>aaa</div>
  }
};

export const AllGrid: Story = {
  args: {
    children : <div>aaa</div>,
    isAllGird: true
  }
};

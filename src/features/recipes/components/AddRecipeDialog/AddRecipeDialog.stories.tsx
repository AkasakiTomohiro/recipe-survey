/**
 * @file AddRecipeDialog.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { AddRecipeDialog } from './AddRecipeDialog';

const meta: Meta<typeof AddRecipeDialog> = {
  title : 'features/Recipe/AddRecipeDialog',
  render: (args): JSX.Element => <AddRecipeDialog {...args} />
};

export default meta;

type Story = StoryObj<typeof AddRecipeDialog>;

export const Primary: Story = {
  args: {
    open   : true,
    onClose: () => console.log('close')
  }
};

/**
 * @file Dialog.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { Dialog } from './Dialog';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialog> = {
  title : 'RecipeSurvey/components/Dialog',
  render: (args): JSX.Element => <Dialog {...args} />
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Primary: Story = {
  args: {
    open       : true,
    title      : 'タイトル',
    submitLabel: 'ボタン名',
    children   : (<>コンテンツ</>),
    onClose    : () => console.log('cancel'),
    onSubmit   : async () => console.log('submit')
  }
};

export const Cancel: Story = {
  args: {
    open       : true,
    title      : 'タイトル',
    submitLabel: 'ボタン名',
    cancelLabel: 'キャンセル',
    children   : (<>コンテンツ</>),
    onClose    : () => console.log('cancel'),
    onSubmit   : async () => console.log('submit')
  }
};

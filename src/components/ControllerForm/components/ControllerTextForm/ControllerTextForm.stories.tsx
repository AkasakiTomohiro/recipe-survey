/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @file ControllerTextForm.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { FormProvider, useForm } from 'react-hook-form';

import { ControllerTextForm } from './ControllerTextForm';

import type { Meta, StoryObj } from '@storybook/react';

type Test = {
  name: string
}

const meta: Meta<typeof ControllerTextForm> = {
  title : 'RecipeSurvey/components/ControllerForm/ControllerTextForm',
  render: (args: any) => {
    const methods = useForm<Test>();
    return (
      <FormProvider {...methods} >
        <ControllerTextForm {...args} />
      </FormProvider>
    );
  }
};

export default meta;

type Story = StoryObj<typeof ControllerTextForm>;

export const Primary: Story = {
  args: {
    label: 'テキスト',
    name : 'name'
  }
};

export const ReadOnly: Story = {
  args: {
    label   : 'テキスト',
    name    : 'name',
    readOnly: true
  }
};

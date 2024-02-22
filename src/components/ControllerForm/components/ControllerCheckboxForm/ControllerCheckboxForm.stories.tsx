/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @file ControllerCheckboxForm.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { FormProvider, useForm } from 'react-hook-form';

import { ControllerCheckboxForm } from './ControllerCheckboxForm';

import type { Meta, StoryObj } from '@storybook/react';

type Test = {
  name: boolean
}

const meta: Meta<typeof ControllerCheckboxForm> = {
  title : 'RecipeSurvey/components/ControllerForm/ControllerCheckboxForm',
  render: (args) => {
    const methods = useForm<Test>({
      defaultValues: {
        name: true
      }
    });

    return (
      <FormProvider {...methods} >
        <ControllerCheckboxForm {...args} />
      </FormProvider>
    );
  }
};

export default meta;

type Story = StoryObj<typeof ControllerCheckboxForm>;

export const Primary: Story = {
  args: {
    label: 'チェックボックス',
    name : 'name'
  }
};

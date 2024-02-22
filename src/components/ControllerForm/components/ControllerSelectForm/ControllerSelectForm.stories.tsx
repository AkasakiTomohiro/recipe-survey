/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @file ControllerSelectForm.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { FormProvider, useForm } from 'react-hook-form';

import { ControllerSelectForm } from './ControllerSelectForm';

import type { Meta, StoryObj } from '@storybook/react';

type Test = {
  name: 'GW' | 'MW'
}

const meta: Meta<typeof ControllerSelectForm> = {
  title : 'RecipeSurvey/components/ControllerForm/ControllerSelectForm',
  render: (args) => {
    const methods = useForm<Test>({
      defaultValues: {
        name: 'MW'
      }
    });

    return (
      <FormProvider {...methods} >
        <ControllerSelectForm {...args} />
      </FormProvider>
    );
  }
};

export default meta;

type Story = StoryObj<typeof ControllerSelectForm>;

export const Primary: Story = {
  args: {
    label: 'セレクト',
    name : 'name',
    list : ['MW', 'GW']
  }
};

/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @file ControllerTextForm.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, 'test');
    await expect(input).toHaveValue('test');
  }
};

export const ReadOnly: Story = {
  args: {
    label   : 'テキスト',
    name    : 'name',
    isReadOnly: true
  }
};

export const NumberForm: Story = {
  render: (args: any) => {
    const methods = useForm<{num: number}>();
    return (
      <FormProvider {...methods} >
        <ControllerTextForm {...args} />
      </FormProvider>
    );
  },
  args: {
    label   : 'テキスト',
    name    : 'num',
    type    : 'number',
    onChange: () => {/** */}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('spinbutton');
    await userEvent.type(input, '123');
    await expect(input).toHaveValue(123);
  }
};

const validator = z.object({
  text: z.string().max(1)
}).strict();
export const ErrorTextForm: Story = {
  render: (args: any) => {
    const methods = useForm<z.infer<typeof validator>>({
      mode: 'onChange',
      defaultValues: {
        text: ''
      },
      resolver: zodResolver(validator)
    });
    return (
      <FormProvider {...methods} >
        <ControllerTextForm {...args} />
      </FormProvider>
    );
  },
  args: {
    label               : 'テキスト',
    name                : 'text',
    inputErrorHelperText: "2文字以内で入力してください",
    onChange            : () => {/** */},
    inputProps          : {}
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.type(input, 'te');
    await expect(input).toHaveValue("te");
    await expect(canvas.getByText("2文字以内で入力してください")).toBeInTheDocument();
  }
};



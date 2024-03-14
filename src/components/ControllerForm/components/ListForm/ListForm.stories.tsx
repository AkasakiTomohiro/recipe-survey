/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @file ListForm.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import exp from 'constants';
import { ComponentProps } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { MaterialTypes, Units } from '@/lib/ProfileValidator';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { ControllerTextForm } from '../ControllerTextForm';
import { ListForm } from './ListForm';

import type { Meta, StoryObj } from '@storybook/react';
type CustomProfile = MaterialTypes & Units

const meta: Meta<typeof ListForm> = {
  title : 'RecipeSurvey/components/ControllerForm/ListForm',
  render: (args) => {
    const methods = useForm<CustomProfile>({
      mode         : 'onChange',
      defaultValues: {
        units: [{
          unit       : '',
          description: ''
        }],
        materialTypes: [{
          materialType: ''
        }]
      }
    });
    return (
      <FormProvider {...methods} >
        <ListForm {...args} />
      </FormProvider>
    );
  }
};

export default meta;

type Story = StoryObj<typeof ListForm>;

export const Unit: Story = {
  args: {
    name : 'units',
    forms: (index: number): JSX.Element[] => {
      return [
        <ControllerTextForm label="エネルギー単位" name={`units.${index}.energyUnit`} key="energy_unit"/>,
        <ControllerTextForm label="説明" name={`units.${index}.description`} key="description" />
      ];
    },
    maxLength   : 4,
    initialValue: {
      energyUnit : '',
      description: ''
    }
  }
};

export const MaterialType: Story = {
  args: {
    name : 'materialTypes',
    forms: (index: number): JSX.Element[] => {
      return [
        <ControllerTextForm label="アイテム種別" name={`materialTypes.${index}.materialType`} key="material_type" />
      ];
    },
    maxLength   : 4,
    initialValue: {
      materialType: ''
    }
  }
};

export const ReadOnly: Story = {
  args: {
    name : 'materialTypes',
    forms: (index: number): JSX.Element[] => {
      return [
        <ControllerTextForm label="アイテム種別" name={`materialTypes.${index}.materialType`} key="material_type" />
      ];
    },
    maxLength   : 4,
    initialValue: {
      materialType: ''
    },
    editable: false
  }
};

const Template2 = (args: ComponentProps<typeof ListForm>) => {
  const methods = useForm<CustomProfile>({
    mode         : 'onChange',
    defaultValues: {
      units: [{
        unit       : '',
        description: ''
      }],
      materialTypes: [{
        materialType: 'M1'
      }]
    }
  });
  return (
    <FormProvider {...methods} >
      <ListForm {...args} />
    </FormProvider>
  );
}

export const AddRow: Story = {
  render: args => <Template2 {...args} />,
  args: {
    name : 'materialTypes',
    forms: (index: number): JSX.Element[] => {
      return [
        <ControllerTextForm label="アイテム種別" name={`materialTypes.${index}.materialType`} key="material_type" />
      ];
    },
    maxLength   : 4,
    initialValue: {
      materialType: ''
    },
    editable: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 初期値確認
    const button = canvas.getByRole('button', { name: /追加/i });
    await expect(button).toBeInTheDocument();
    const input1 = canvas.getByRole('textbox', { value: "M1" } as any);
    await expect(input1).toBeInTheDocument();

    // 追加ボタンを押下
    await userEvent.click(button);

    // フォームが増えているか確認
    const inputList = canvas.getAllByRole('textbox');
    expect(inputList).toHaveLength(2);
    const input2 = inputList[1];
    await expect(input2).toBeInTheDocument();
    await expect(input2).toHaveValue('');
    await userEvent.type(input2, 'M2');
    await expect(input2).toHaveValue('M2');
  }
}

export const DeleteRow: Story = {
  render: args => <Template2 {...args} />,
  args: {
    name : 'materialTypes',
    forms: (index: number): JSX.Element[] => {
      return [
        <ControllerTextForm label="アイテム種別" name={`materialTypes.${index}.materialType`} key="material_type" />
      ];
    },
    maxLength   : 4,
    initialValue: {
      materialType: ''
    },
    editable: true
  },
  play: async (context) => {
    const canvas = within(context.canvasElement);

    // 追加ボタンを押下のplayを実行
    await (AddRow as any).play(context);

    // M1の削除ボタンを押下
    const buttons = canvas.getAllByRole('button', {});
    expect(buttons).toHaveLength(3);
    const deleteButton = buttons[1];
    await expect(deleteButton).toBeInTheDocument();
    await userEvent.click(deleteButton);

    // M1が削除されているか確認
    const inputList = canvas.getAllByRole('textbox');
    expect(inputList).toHaveLength(1);
    const input1 = inputList[0];
    await expect(input1).toHaveValue('M2');
  }
}

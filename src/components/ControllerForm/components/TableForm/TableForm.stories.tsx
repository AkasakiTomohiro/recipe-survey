/* eslint-disable react-hooks/rules-of-hooks */
/**
 * @file TableForm.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { FormProvider, useForm } from 'react-hook-form';

import { MaterialTypes, Units } from '@/lib/ProfileValidator';

import { ControllerTextForm } from '../ControllerTextForm';
import { ListForm } from '../ListForm';

import type { Meta, StoryObj } from '@storybook/react';
type CustomProfile = MaterialTypes & Units

const meta: Meta<typeof ListForm> = {
  title : 'RecipeSurvey/components/ControllerForm/TableForm',
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
        <ControllerTextForm label="エネルギー単位" name={`units.${index}.energyUnit`} key='energy_unit'/>,
        <ControllerTextForm label="説明" name={`units.${index}.description`} key='description' />
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
        <ControllerTextForm label="アイテム種別" name={`materialTypes.${index}.materialType`} key='material_type' />
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
        <ControllerTextForm label="アイテム種別" name={`materialTypes.${index}.materialType`} key='material_type' />
      ];
    },
    maxLength   : 4,
    initialValue: {
      materialType: ''
    },
    editable: false
  }
};

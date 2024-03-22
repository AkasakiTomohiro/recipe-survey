/**
 * @file RecipeBasicInfo.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { RecipeBasicInfo } from '~/lib/RecipeValidator';

import { RecipeBasicInfoContents } from './RecipeBasicInfo';

const meta: Meta<typeof RecipeBasicInfoContents> = {
  title : 'features/Recipe/AddRecipeDialog/RecipeBasicInfo',
  render: (args) => {
    const methods = useForm<RecipeBasicInfo>({
      defaultValues: {
        recipeName           : '',
        recipeAlternativeName: '',
        energy               : 0,
        progressTime         : 0,
        machine              : '',
        energyUnit           : ''
      }
    });

    return (
      <FormProvider {...methods} >
        <RecipeBasicInfoContents {...args} />
      </FormProvider>
    );
  }};

export default meta;

type Story = StoryObj<typeof RecipeBasicInfoContents>;

export const Primary: Story = {
  args: {
    machineList: ['製作機', '組立機', '製造機', '精製施設', '混合機', '充填機', '粒子加速器', '製錬炉', '鋳造炉'],
    unitList: ['MW', 'GW'],
  }
};

export const ReadOnly: Story = {
  args: {
    machineList: ['製作機', '組立機', '製造機', '精製施設', '混合機', '充填機', '粒子加速器', '製錬炉', '鋳造炉'],
    unitList: ['MW', 'GW'],
    isReadOnly: true,
  }
};

/**
 * @file RecipeMaterialAndProduct.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import { RecipeMaterialAndProduct } from '~/lib/RecipeValidator';

import { RecipeMaterialAndProductContents } from './RecipeMaterialAndProduct';

const meta: Meta<typeof RecipeMaterialAndProductContents> = {
  title : 'features/Recipe/AddRecipeDialog/RecipeMaterialAndProduct',
  render: (args) => {
    const methods = useForm<RecipeMaterialAndProduct>({
      defaultValues: {
        materials: [materialInitialValue],
        products : [productInitialValue]
      }
    });

    return (
      <FormProvider {...methods} >
        <RecipeMaterialAndProductContents {...args} />
      </FormProvider>
    );
  }
};

export default meta;

type Story = StoryObj<typeof RecipeMaterialAndProductContents>;

const materialInitialValue = {
  material: '硫酸',
  amount  : 5,
  type    : '液体'
};

const productInitialValue = {
  product  : 'バッテリー',
  byProduct: true,
  type     : 'アイテム',
  amount   : 2
};

export const Primary: Story = {
  args: {}
};

export const ReadOnly: Story = {
  args: {
    isReadOnly: true
  }
};
/**
 * @file SearchField.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import type { Meta, StoryObj } from '@storybook/react';

import { SearchField } from './SearchField';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title     : 'features/Recipe/RecipeList/SearchField',
  component : SearchField,
  parameters: {
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    searchWord: 'バッテリー',
    searchFilter: (word: string) => {
      console.log(word);
    }
  }
};

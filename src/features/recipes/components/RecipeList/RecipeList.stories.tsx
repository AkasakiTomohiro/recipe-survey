/**
 * @file RecipeList.stories.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import type { Meta, StoryObj } from '@storybook/react';

import { RecipeList } from './RecipeList';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title     : 'features/Recipe/RecipeList',
  component : RecipeList,
  parameters: {
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof RecipeList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    recipes: [
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "バッテリー",
        recipeAlternateName: "",
        machine: "混合機",
        progressTime: 2,
        energy: 10,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "バッテリー",
        recipeAlternateName: "",
        machine: "混合機",
        progressTime: 2,
        energy: 10,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "バッテリー",
        recipeAlternateName: "",
        machine: "混合機",
        progressTime: 2,
        energy: 10,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "バッテリー",
        recipeAlternateName: "",
        machine: "混合機",
        progressTime: 2,
        energy: 10,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "バッテリー",
        recipeAlternateName: "",
        machine: "混合機",
        progressTime: 2,
        energy: 10,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "バッテリー",
        recipeAlternateName: "",
        machine: "混合機",
        progressTime: 2,
        energy: 10,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "鉄インゴット",
        recipeAlternateName: "",
        machine: "製錬炉",
        progressTime: 2,
        energy: 4,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "鉄インゴット",
        recipeAlternateName: "",
        machine: "製錬炉",
        progressTime: 2,
        energy: 4,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "鉄インゴット",
        recipeAlternateName: "",
        machine: "製錬炉",
        progressTime: 2,
        energy: 4,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "鉄インゴット",
        recipeAlternateName: "",
        machine: "製錬炉",
        progressTime: 2,
        energy: 4,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "鉄インゴット",
        recipeAlternateName: "",
        machine: "製錬炉",
        progressTime: 2,
        energy: 4,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
      {
        id: "929CA595-6112-4488-BA79-812712C9BB1F",
        recipeName: "鉄インゴット",
        recipeAlternateName: "",
        machine: "製錬炉",
        progressTime: 2,
        energy: 4,
        energyUnit: "MW",
        materials: [
          { material: "硫酸", type: "液体", amount: 5 },
          { material: "アルミナ溶液", type: "液体", amount: 4 },
          { material: "アルミ筐体", type: "アイテム", amount: 2 },
        ],
        result: [
          { product: "バッテリー", type: "アイテム", byProduct: false, amount: 2 },
          { product: "水", type: "液体", byProduct: true, amount: 3 }
        ]
      },
    ]
  }
};

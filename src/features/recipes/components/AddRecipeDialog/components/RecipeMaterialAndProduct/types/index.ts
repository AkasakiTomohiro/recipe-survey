/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { RecipeMaterial, RecipeResult } from '@/lib/RecipeValidator';

export interface IRecipeMaterialAndProductContentsProps {

  /**
   * レシピの素材の初期値
   */
  materialInitialValue: RecipeMaterial;

  /**
   * レシピの生産物の初期値
   */
  productInitialValue: RecipeResult;
}
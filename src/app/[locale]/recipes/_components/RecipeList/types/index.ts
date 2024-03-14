/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import type { Recipe } from "@/providers/profile/hooks/UseRecipe/types";

export interface IRecipeListProps {

  /**
   * レシピリスト
   */
  recipes: Recipe[];
}

export interface ISearchFieldProps {

  /**
   * 検索ワード
   */
  searchWord: string;

  /**
   * 検索関数
   */
  searchFilter: (word: string) => void;
}
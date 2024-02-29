/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

export type Recipe = {

  /**
   * レシピID
   */
  id: string;

  /**
   * レシピ名
   */
  recipeName: string;

  /**
   * レシピ代替名
   */
  recipeAlternateName: string;

  /**
   * 作成機
   */
  machine: string;

  /**
   * 作成時間
   */
  progressTime: number;

  /**
     * 消費エネルギー
     */
  energy: number;

  /**
   * エネルギー単位
   */
  energyUnit: string;

  /**
   * 素材一覧
   */
  materials: RecipeMaterial[];

  /**
   * 生産物一覧
   */
  result: RecipeResult[];
}

export type RecipeMaterial = {

  /**
   * 素材
   */
  material: string;

  /**
   * 素材種別
   */
  type: string;

  /**
   * 消費量
   */
  amount: number;
}

export type RecipeResult = {
  
  /**
   * 生産物
   */
  product: string;

  /**
   * 副産物
   */
  byProduct: boolean;

  /**
   * 生産物種別
   */
  type: string;

  /**
   * 生産量
   */
  amount: number;
}

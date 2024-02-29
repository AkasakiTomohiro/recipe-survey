/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { Recipe } from '../hooks';

export type ProfileProviderProps = {
  
  /**
  * 子要素
  */
  children: React.ReactNode;
}

export type ProfileContextType = {

  /**
   * レシピ一覧を取得する
   */
  getRecipes: () => Recipe[];
}

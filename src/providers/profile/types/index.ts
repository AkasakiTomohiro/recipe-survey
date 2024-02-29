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
   * 選択しているプロファイルIDを取得
   */
  getSelectedProfileId: () => string;

  /**
   * レシピ一覧を取得
   */
  getRecipes: () => Recipe[];
}

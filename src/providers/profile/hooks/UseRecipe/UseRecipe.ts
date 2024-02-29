/**
 * @file UseRecipe.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useCallback } from 'react';

import { setLocalStorage, useLocalStorage, UseLocalStorageResult } from '@/hooks';

import { Recipe } from './types';
import { createRecipeId, createRecipeIdListId } from './utils';

/**
 * 指定したプロファイルに属するレシピIDのリストを管理するカスタムフック
 * 
 * @param profileId プロファイルID
 */
export function useRecipeIds(profileId: string): UseLocalStorageResult<string[]> {
  return useLocalStorage<string[]>(createRecipeIdListId(profileId), []);
}

/**
 * レシピを追加するカスタムフックの戻り値
 */
export type UseAddRecipeResult = (recipe: Recipe) => void;

/**
 * レシピを追加するカスタムフック
 * 
 * @param profileId プロファイルID
 */
export function useAddRecipe(profileId: string): UseAddRecipeResult {
  const [recipeIds, setRecipeIds] = useRecipeIds(profileId);

  const addRecipe = useCallback((recipe: Recipe) => {
    const recipeId = createRecipeId(recipe.id);

    // ローカルストレージにレシピを保存
    setLocalStorage(recipeId, JSON.stringify(recipe), false);

    // レシピIDリストに追加
    setRecipeIds(prev => {
      return [...prev, recipeId];
    });

  }, [setRecipeIds]);

  return addRecipe;
}

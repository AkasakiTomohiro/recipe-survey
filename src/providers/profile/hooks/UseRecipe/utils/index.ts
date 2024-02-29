/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

/**
 * レシピIDリストを管理するKeyのPrefix
 */
const RecipesPrefix = "recipes";

/**
 * レシピを管理するKeyのPrefix
 */
const RecipePrefix = "recipe";

/**
 * レシピIDリストの管理IDを生成する
 */
export function createRecipeIdListId(profileId: string): string {
  return `${RecipesPrefix}-${profileId}`;
}

/**
 * レシピの管理IDを生成する
 */
export function createRecipeId(recipeId: string): string {
  return `${RecipePrefix}-${recipeId}`;
}

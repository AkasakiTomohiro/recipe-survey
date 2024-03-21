/**
 * @file RecipeValidator.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import * as z from 'zod';

export const RecipeResultValidator = z
  .object({

    /**
     * 生産物
     */
    product: z.string().min(1).max(20),

    /**
     * 副産物
     */
    byProduct: z.boolean(),

    /**
     * 生産物種別
     */
    type: z.string().min(1).max(20),

    /**
     * 生産量
     */
    amount: z.number().min(1).max(10000)
  })
  .required();

/**
 * レシピの生産物
 */
export type RecipeResult = z.infer<typeof RecipeResultValidator>;

export const RecipeMaterialValidator = z
  .object({

    /**
     * 素材
     */
    material: z.string().min(1).max(20),

    /**
     * 素材種別
     */
    type: z.string().min(1).max(20),

    /**
     * 消費量
     */
    amount: z.number().min(1).max(10000)
  })
  .required();

/**
 * レシピの素材
 */
export type RecipeMaterial = z.infer<typeof RecipeMaterialValidator>;

export const RecipeValidator = z
  .object({

    /**
     * レシピID
     */
    id: z.string().uuid(),

    /**
     * レシピ名
     */
    recipeName: z.string().min(1).max(20),

    /**
     * レシピ代替名
     */
    recipeAlternativeName: z.string().min(0).max(20),

    /**
     * 作成機
     */
    machine: z.string().min(1).max(20),

    /**
     * 作成時間
     */
    progressTime: z.number().min(1).max(10000),

    /**
     * 消費エネルギー
     */
    energy: z.number().min(0).max(10000),

    /**
     * エネルギー単位
     */
    energyUnit: z.string().min(1).max(20),

    /**
     * 生産物一覧
     */
    products: z.array(RecipeResultValidator).min(1).max(4),

    /**
     * 素材一覧
     */
    materials: z.array(RecipeMaterialValidator).min(1).max(4)
  })
  .required();

/**
 * レシピ
 */
export type Recipe = z.infer<typeof RecipeValidator>

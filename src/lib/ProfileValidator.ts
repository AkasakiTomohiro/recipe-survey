/**
 * @file ProfileValidator.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import * as z from 'zod';

export const ProfileValidator = z.object({
  profileInfo: z.object({

    /**
     * プロファイルID
     */
    id: z.string().uuid(),

    /**
     * プロファイル名
     */
    name: z.string().min(1).max(20)
  })
});
export type Profile = z.infer<typeof ProfileValidator>;

export const MaterialTypesValidator = z
  .object({

    /**
     * 素材種別
     */
    materialTypes: z.array(z.object({
      materialType: z.string().min(1).max(10)
    })).min(1).max(10)
  });
export type MaterialTypes = z.infer<typeof MaterialTypesValidator>;

export const UnitsValidator = z
  .object({
    units: z.array(z.object({

      /**
       * 単位
       */
      unit: z.string().min(1).max(20),

      /**
       * 説明
       */
      description: z.string().min(1).max(128)

    })).min(1).max(10)
  });

export type Units = z.infer<typeof UnitsValidator>;

export type ProfileSet = MaterialTypes & Profile & Units;

export const profileSetValidator = ProfileValidator.and(MaterialTypesValidator).and(UnitsValidator);

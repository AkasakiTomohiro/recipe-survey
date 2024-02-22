/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { FieldPath } from 'react-hook-form';

import { RequiredFilterType } from '@/types';

export interface IControllerSelectFormProps<T extends Record<string, any> = Record<string, any>> {

  /**
   * フォームの名前
   */
  label: string;

  /**
   * controlで管理しているオブジェクトのキーを指定
   */
  name: FieldPath<RequiredFilterType<T, string>>;

  /**
   * 選択肢
   */
  list: string[];

  /**
   * Grid幅を横全体にするか
   */
  allGird?: boolean;
}
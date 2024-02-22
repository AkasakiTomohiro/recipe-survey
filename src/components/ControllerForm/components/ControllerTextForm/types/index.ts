/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { FieldPath } from 'react-hook-form';

import { RequiredFilterType } from '@/types';

export type IControllerTextFormProps<T extends Record<string, any> = Record<string, any>> = {

  /**
   * フォームの名前
   */
   label: string;

   /**
    * controlで管理しているオブジェクトのキーを指定
    */
   name: FieldPath<RequiredFilterType<T, number | string>>;

   /**
    * フォームの種類を定義
    */
   type?: string;

   /**
    * 制御を無効化するか
    */
   disabled?: boolean;

   /**
    * デフォルトで表示したいヘルパーテキスト
    *
    * @details バリデーションエラーがある場合は表示されない
    */
   inputHelperText?: string;

   /**
    * OnChangeハンドル
    */
   onChange?: (value: any) => void;

   /**
    * Grid幅を横全体にするか
    */
   allGird?: boolean;

   /**
    * 編集可能かどうか
    */
   readOnly?: boolean;
}
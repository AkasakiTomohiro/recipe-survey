/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { FieldPath } from 'react-hook-form';

import { IGridFormControlProps } from '@/components/ControllerForm';
import { RequiredFilterType } from '@/types';
import { TextFieldProps } from '@mui/material/TextField';

export type IControllerTextFormProps<T extends Record<string, any> = Record<string, any>> = IGridFormControlProps & Omit<TextFieldProps, "variant" | "error"> & {

  /**
   * フォームの名前
   */
   label: string;

   /**
    * controlで管理しているオブジェクトのキーを指定
    */
   name: FieldPath<RequiredFilterType<T, number | string>>;

   /**
    * デフォルトで表示したいヘルパーテキスト
    *
    * @details バリデーションエラーがある場合は表示されない
    */
   inputErrorHelperText?: string;

   /**
    * 編集可能かどうか
    */
   isReadOnly?: boolean;
}
/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { FieldPath } from 'react-hook-form';
import { IGridFormControlProps } from '~/components/ControllerForm';
import { RequiredFilterType } from '~/types';

import { SelectProps } from '@mui/material/Select';

export type IControllerSelectFormProps<T extends Record<string, any> = Record<string, any>> = SelectProps<any> & IGridFormControlProps & {

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
}
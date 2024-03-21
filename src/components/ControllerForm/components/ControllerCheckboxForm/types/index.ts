/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { FieldPath } from 'react-hook-form';
import { IGridFormControlProps } from '~/components/ControllerForm';
import { RequiredFilterType } from '~/types';

import { CheckboxProps } from '@mui/material/Checkbox';

export type IControllerCheckboxFormProps<T extends Record<string, any> = Record<string, any>> = CheckboxProps & IGridFormControlProps & {

  /**
   * フォームの名前
   */
  label?: string;

  /**
   * controlで管理しているオブジェクトのキーを指定
   */
  name: FieldPath<RequiredFilterType<T, boolean>>;
}
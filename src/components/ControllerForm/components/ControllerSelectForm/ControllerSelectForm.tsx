/**
 * @file ControllerSelectForm.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useController, useFormContext } from 'react-hook-form';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { GridFormControl } from '../GridFormControl';
import { IControllerSelectFormProps } from './types';

/**
 * Primary UI component for user interaction
 *
 * @example
 *
 * 利用したいコンポーネントでジェネリックに型を定義する形でラップして利用すること
 *
 * const SelectForm = (props: IControllerSelectFormProps<XXXType>) => {
 *   return (<ControllerSelectForm {...props}/>);
 * };
 */
export const ControllerSelectForm = (props: IControllerSelectFormProps): JSX.Element => {
  const { control } = useFormContext();
  const { field } = useController({ name: props.name, control });
  return (
    <GridFormControl allGird={props.allGird}>
      <InputLabel id={props.name}>{props.label}</InputLabel>
      <Select
        {...field}
        labelId={props.name}
      >
        {
          props.list.map((m, i) => <MenuItem key={i} value={m}>{m}</MenuItem>)
        }
      </Select>
    </GridFormControl>
  );
};

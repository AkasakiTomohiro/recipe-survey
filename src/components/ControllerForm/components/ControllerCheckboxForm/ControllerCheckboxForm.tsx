/**
 * @file ControllerCheckboxForm.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { ControllerRenderProps, FieldValues, useController, useFormContext } from 'react-hook-form';

import { Checkbox, FormControlLabel } from '@mui/material';

import { GridFormControl } from '../GridFormControl/GridFormControl';
import { IControllerCheckboxFormProps } from './types';

/**
 * Primary UI component for user interaction
 *
 * @example
 *
 * 利用したいコンポーネントでジェネリックに型を定義する形でラップして利用すること
 *
 * const CheckboxForm = (props: IControllerCheckboxFormProps<XXXType>) => {
 *   return (<ControllerCheckboxForm {...props}/>);
 * };
 */
export const ControllerCheckboxForm = (props: IControllerCheckboxFormProps): JSX.Element => {
  const { control, getValues } = useFormContext();
  const { field } = useController({ name: props.name, control });
  const defaultValues = getValues();
  const checkbox = (field: ControllerRenderProps<FieldValues, string>): JSX.Element => {

    // ラベルなし
    if(props.label === undefined) {
      return (<Checkbox {...field} defaultChecked={defaultValues[props.name]} />);
    }

    // ラベルあり
    return (
      <FormControlLabel control={
        <Checkbox
          {...field}
          defaultChecked={defaultValues[props.name]}
        />
      }
      label={props.label}
      />
    );
  };

  return (
    <GridFormControl allGird={props.allGird}>
      {checkbox(field)}
    </GridFormControl>
  );
};

/**
 * @file ControllerCheckboxForm.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useController, useFormContext } from 'react-hook-form';

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
export const ControllerCheckboxForm = ({
  label,
  name,
  isAllGird,
  ...otherProps
}: IControllerCheckboxFormProps): JSX.Element => {
  const { control, getValues } = useFormContext();
  const { field } = useController({ name: name, control });
  const defaultValues = getValues();

  const CheckBoxWrap = () => <Checkbox {...otherProps} {...field} defaultChecked={defaultValues[name]} />
  
  if(label === undefined) {
    return (
      <GridFormControl isAllGird={isAllGird}>
        <CheckBoxWrap />
      </GridFormControl>
    );
  }

  return (
    <GridFormControl isAllGird={isAllGird}>
      <FormControlLabel 
        control={<CheckBoxWrap />}
        label={label}
      />
    </GridFormControl>
  );
};

/**
 * @file ControllerTextForm.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useCallback } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { getZodErrorMessage } from '@/utils/ZodErrorParse';
import TextField from '@mui/material/TextField';

import { GridFormControl } from '../GridFormControl';
import { IControllerTextFormProps } from './types';

/**
 * Primary UI component for user interaction
 *
 * @example
 *
 * 利用したいコンポーネントでジェネリックに型を定義する形でラップして利用すること
 *
 * const TextForm = (props: IControllerTextFormProps<XXXType>) => {
 *   return (<ControllerTextForm {...props}/>);
 * };
 */
export const ControllerTextForm = (props: IControllerTextFormProps): JSX.Element => {
  const { control, formState: { errors }} = useFormContext();
  const { field } = useController({ name: props.name, control });

  const errorMessage = getZodErrorMessage(props.name, errors);

  const onChange = useCallback((data: React.ChangeEvent<HTMLInputElement>): void => {
    let result: any = data.target.value;
    if(props.type === 'number') {
      result = Number(data.target.value);
    }
    field.onChange({ target: { value: result }});
    if(props.onChange) {
      props.onChange(result);
    }
  }, [props, field]);

  return (
    <GridFormControl allGird={props.allGird}>
      <TextField
        {...field}
        onChange={onChange}
        label={props.label}
        type={props.type}
        error={Boolean(errorMessage)}
        helperText={Boolean(errorMessage) ? errorMessage : props.inputHelperText}
        disabled={props.disabled}
        variant="standard"
        inputProps={{ readOnly: props.readOnly }}
      />
    </GridFormControl>
  );
};

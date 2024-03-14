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
export const ControllerTextForm = ({
  name,
  isAllGird,
  onChange,
  inputErrorHelperText,
  isReadOnly,
  ...otherProps
}: IControllerTextFormProps): JSX.Element => {
  const { control, formState: { errors }} = useFormContext();
  const { field } = useController({ name: name, control });

  const errorMessage = getZodErrorMessage(name, errors);

  const onChangeWarp = useCallback((data: React.ChangeEvent<HTMLInputElement>): void => {
    let result: any = data.target.value;
    if(otherProps.type === 'number') {
      result = Number(data.target.value);
    }
    field.onChange({ target: { value: result }});
    if(onChange) {
      onChange(result);
    }
  }, [otherProps.type, field, onChange]);

  return (
    <GridFormControl isAllGird={isAllGird}>
      <TextField
        {...otherProps}
        {...field}
        onChange={onChangeWarp}
        error={Boolean(errorMessage)}
        helperText={Boolean(errorMessage) ? inputErrorHelperText : otherProps.helperText}
        variant="standard"
        inputProps={{ ...(otherProps.inputProps ?? {}), readOnly: isReadOnly }}
      />
    </GridFormControl>
  );
};

/**
 * @file ListForm.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useTranslations } from 'next-intl';
import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { DeleteIcon } from '@/components/Icon/Icon';
import { Box, Button, IconButton } from '@mui/material';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { FormRowProps, IListFormProps } from './types';

const FormRow = (props: FormRowProps): JSX.Element => {

  return (
    <TableRow hover key={`table-row-${props.index}`}>
      {props.forms(props.index).map((m, i) => <TableCell key={`table-row-${props.index}-cell-${i}`}>{m}</TableCell>)}
      {props.editable !== false &&
        <TableCell key={`table-row-${props.index}-delete-button`} sx={{ width: '16px' }}>
          <IconButton
            aria-label="delete"
            onClick={() => props.onClickDelete(props.index)}
            disabled={props.length === 1}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      }
    </TableRow>
  );
};

/**
 * Primary UI component for user interaction
 */
export const ListForm = (props: IListFormProps): JSX.Element => {
  const { control } = useFormContext();
  const t = useTranslations();

  const { fields, append, remove } = useFieldArray({
    control,
    name: props.name
  });

  const addRow = useCallback(() => {
    append(props.initialValue);
  }, [append, props.initialValue]);

  return (
    <>
      {
        props.editable && <Box sx={{
          width         : '100%',
          display       : 'flex',
          justifyContent: 'flex-end'
        }}>
          <Button
            variant="contained"
            onClick={addRow}
            disabled={fields.length >= props.maxLength}
          >{t('common.add')}</Button>
        </Box>
      }
      <TableContainer>
        <MuiTable sx={{ minWidth: 700 }} aria-label="list form">
          <TableBody>
            {fields.map((field, i) =>
              <FormRow
                key={field.id}
                index={i}
                forms={props.forms}
                onClickDelete={() => remove(i)}
                length={fields.length}
                editable={props.editable}
              />
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </>
  );
};

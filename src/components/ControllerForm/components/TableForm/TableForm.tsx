/**
 * @file TableForm.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useFieldArray, useFormContext } from 'react-hook-form';
import { useInternationalization } from '~/hooks/UseInternationalization/UseInternationalization';

import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { ITableFormProps } from './types';

const HeaderCell = styled(TableCell)({
  backgroundColor: 'white'
});

const Header = (props: { headers: string[], editable: boolean }): JSX.Element => {
  const {t} = useInternationalization();

  return (
    <TableHead>
      <TableRow>
        {props.headers.map((m, i) => (<HeaderCell align="left" key={`table-header-${i}`}>{m}</HeaderCell>))}
        {props.editable && <HeaderCell align="left" key={'table-header-delete'}>{t('common.delete')}</HeaderCell>}
      </TableRow>
    </TableHead>
  );
};

type FormRowProps = {
  index: number;
  length: number;
  forms: (index: number) => JSX.Element[];
  onClickDelete: (index: number) => void;
  editable: boolean;
}
const FormRow = (props: FormRowProps): JSX.Element => {

  return (
    <TableRow hover key={`table-row-${props.index}`}>
      {props.forms(props.index).map((m, i) => <TableCell key={`table-row-${props.index}-cell-${i}`}>{m}</TableCell>)}
      {props.editable &&
        <TableCell key={`table-row-${props.index}-delete-button`}>
          <IconButton
            aria-label="delete"
            onClick={() => props.onClickDelete(props.index)}
            disabled={props.length === 1}
            data-testid={`delete-button-${props.index}`}
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
export const TableForm = (props: ITableFormProps): JSX.Element => {
  const {t} = useInternationalization();
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: props.name
  });

  const addRow = (): void => {
    append(props.initialValue);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
        <Typography variant="h6">
          {props.title}
        </Typography>
        {
          props.editable && <Button
            variant="contained"
            onClick={addRow}
            disabled={fields.length >= props.maxLength}
            data-testid={`form-button-${props.name}`}
          >
            {t('common.add')}
          </Button>
        }
      </Box>
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 700 }} stickyHeader aria-label="table form">
          <Header headers={props.headers} editable={props.editable === false ? false : true}/>
          <TableBody>
            {fields.map((field, i) =>
              <FormRow
                key={field.id}
                index={i}
                forms={props.forms}
                onClickDelete={() => remove(i)}
                length={fields.length}
                editable={props.editable === false ? false : true}
              />
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </>
  );
};

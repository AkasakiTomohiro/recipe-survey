/**
 * @file TableRow.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import TableCell from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';

import { ITableRowProps } from './types';

export const TableRow = ({ row, index }: ITableRowProps): JSX.Element => {
  return (
    <MuiTableRow hover>
      {row.map((m, i) => (<TableCell key={`table-row-${index}-cell-${i}`}>{m}</TableCell>))}
    </MuiTableRow>
  );
};

/**
 * @file TableHeader.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { ITableHeaderProps } from './types';

export const TableHeader = (props: ITableHeaderProps): JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        {props.isCollapse && <TableCell />}
        {props.headers.map((m, i) => (<TableCell align="left" key={`table-header-${i}`}>{m}</TableCell>))}
      </TableRow>
    </TableHead>
  );
};

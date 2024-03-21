/**
 * @file TableCollapseRow.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useState } from 'react';
import { KeyboardArrowDownIcon, KeyboardArrowUpIcon } from '~/components/Icon';

import MuiCollapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';

import { ITableCollapseRowProps } from './types';

export const TableCollapseRow = ({ row, index, Collapse }: ITableCollapseRowProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MuiTableRow hover>
      <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {row.map((m, i) => (<TableCell key={`table-row-${index}-cell-${i}`}>{m}</TableCell>))}
      </MuiTableRow>
      <MuiTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, borderBottom: 'unset' }} colSpan={row.length + 1}>
          <MuiCollapse in={open} timeout="auto" unmountOnExit>
            <Collapse index={index} />
          </MuiCollapse>
        </TableCell>
      </MuiTableRow>
    </>
  );
};

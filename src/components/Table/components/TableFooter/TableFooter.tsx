/**
 * @file TableFooter.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
*/
import { TablePagination } from '@mui/material';

import { ITableFooterProps } from './types';

export const TableFooter = (props: ITableFooterProps): JSX.Element => {
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={props.numOfLines}
      rowsPerPage={props.rowsPerPage}
      page={props.page}
      onPageChange={props.onPageChange}
      onRowsPerPageChange={props.onRowsPerPageChange}
    />
  );
};

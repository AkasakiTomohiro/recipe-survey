/**
 * @file GridFormControl.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import FormControl from '@mui/material/FormControl';
import Grid, { GridProps } from '@mui/material/Grid';

import { IGridFormControlProps } from './types';

/**
 * Primary UI component for user interaction
 */
export const GridFormControl = ({ children, isAllGird, ...other }: GridProps & IGridFormControlProps): JSX.Element => {
  return (
    <Grid item xs={12} sm={isAllGird ? 12 : 6} {...other}>
      {children && <FormControl fullWidth variant="standard">{children}</FormControl>}
    </Grid>
  );
};

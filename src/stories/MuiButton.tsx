import React from 'react';

import { Button } from '@mui/material';

export interface MuiButtonProps {
  label: string;
  variant: 'contained' | 'outlined' | 'text';
}

export const MuiButton = ({ label, variant, ...rest }: MuiButtonProps) => 
  <Button variant={variant} {...rest}>
    {label}
  </Button>;
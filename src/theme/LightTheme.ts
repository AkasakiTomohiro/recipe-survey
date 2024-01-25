'use client';
import { blue, blueGrey, green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import { BackgroundColor } from './ColorPalette';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: green[500]
    },
    secondary: {
      main: blue[500]
    },
    text: {
      primary  : blueGrey['900'],
      secondary: blueGrey['500']
    },
    background: {
      default: BackgroundColor
    }
  }
});

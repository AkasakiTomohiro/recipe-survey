/**
 * @file Dialog.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled, Theme } from '@mui/material/styles';

import { CloseIcon } from '../Icon';
import { IDialogProps } from './types';

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right   : theme.spacing(1),
  top     : theme.spacing(1),
  color   : theme.palette.grey[500]
}));

export const Dialog = (props: IDialogProps): JSX.Element => {
  return (
    <MuiDialog
      sx={props.sx}
      open={props.open}
      fullWidth={true}
      maxWidth={props.maxWidth}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
    <DialogTitle>
      {props.title}
      <CustomIconButton aria-label="close" onClick={props.onClose}>
        <CloseIcon />
      </CustomIconButton>
    </DialogTitle>
    <DialogContent dividers>
      {props.children}
    </DialogContent>
    <DialogActions sx={{ justifyContent: props.cancelLabel && 'space-between' }}>
      <Button variant="contained" color="secondary" onClick={props.onSubmit}>
        {props.submitLabel}
      </Button>
      {props.cancelLabel &&
      <Button variant="contained" color="secondary" onClick={props.onClose}>
        {props.cancelLabel}
      </Button>
      }
    </DialogActions>
  </MuiDialog>
  );
}
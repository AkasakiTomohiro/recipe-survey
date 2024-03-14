/**
 * @file AddRecipeDialog.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

// import { FormProvider, useForm } from 'react-hook-form';

import { useState } from 'react';

import {
    ControllerCheckboxForm, ControllerSelectForm, ControllerTextForm, IControllerCheckboxFormProps, IControllerSelectFormProps,
    IControllerTextFormProps
} from '@/components/ControllerForm';
import { CloseIcon } from '@/components/Icon';
import { useTransLocations } from '@/i18n';
import { Recipe, useAddRecipe, useSelectedProfileId } from '@/providers/profile/hooks';
import { DialogTitle, Grid, IconButton, Step, StepLabel } from '@mui/material';
import MuiDialog from '@mui/material/Dialog';
import MuiStepper from '@mui/material/Stepper';

import { IAddRecipeDialogProps } from './types';

const TextForm = (props: IControllerTextFormProps<Recipe>): JSX.Element => {
  return (<ControllerTextForm {...props}/>);
};
const SelectForm = (props: IControllerSelectFormProps<Recipe>): JSX.Element => {
  return (<ControllerSelectForm {...props}/>);
};
const CheckboxForm = (props: IControllerCheckboxFormProps<Recipe>): JSX.Element => {
  return (<ControllerCheckboxForm {...props}/>);
};

type IStepperProps = {
  /**
   * ステッパーのタイトル一覧
   */
  steps: string[];

  /**
   * 選択中のステップ
   */
  activeStep: number;

  /**
   * 
   */
  skipped: Set<number>;
}

/**
 * Stepper
 */
const Stepper = (props: IStepperProps): JSX.Element => {
  return (
    <MuiStepper activeStep={props.activeStep} sx={{ marginRight: '32px' }}>
      {props.steps.map((label, index) => {
        const stepProps: { completed?: boolean } = {};
        const labelProps: {
            optional?: React.ReactNode;
          } = {};
        if(props.skipped.has(index)) {
          stepProps.completed = false;
        }
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>
              {label}
            </StepLabel>
          </Step>
        );
      })}
    </MuiStepper>
  );
}
export const AddRecipeDialog = (props: IAddRecipeDialogProps): JSX.Element => {
  const t = useTransLocations();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [profileId] = useSelectedProfileId();
  const addRecipe = useAddRecipe(profileId);
  const steps = [t('recipes.registerRecipe.basicInfo'), t('recipes.registerRecipe.materialAndProduct'), t('recipes.registerRecipe.confirm')];
  
  const onClose = (): void => {
    props.onClose();
  };

  const onSubmit = (): void => {
  };

  return (
    <MuiDialog
      open={props.open}
      fullWidth={true}
      maxWidth="md"
      scroll="paper"
      aria-labelledby="select-preset"
      aria-describedby="select-preset"
    >
      <DialogTitle>
        {t('recipes.registerRecipe.title')}
        <Stepper steps={steps} activeStep={activeStep} skipped={skipped} />
        {props.onClose && (
          <IconButton
            aria-label="close"
            onClick={props.onClose}
            sx={{
              position: 'absolute',
              right   : 8,
              top     : 8,
              color   : (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <>
        {/* <Grid container spacing={3}>
          <TextForm label={t('recipes.headers.recipeName')} name="recipeName" />
          <TextForm label={t('recipes.headers.recipeAlternativeName')} name="recipeAlternativeName" />
          <SelectForm label={t('recipes.headers.machine')} name="machine" list={[]}/>
          <TextForm label={t('recipes.headers.progressTime')} name="progressTime" type="number" />
          <TextForm label={t('recipes.headers.energy')} name="energy" type="number" />
          <SelectForm label={t('recipes.headers.energyUnit')} name="energyUnit" list={[]} />
        </Grid> */}
      </>
    </MuiDialog>
  );
}

/**
 * @file AddRecipeDialog.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useInternationalization } from '~/hooks/UseInternationalization';
import {
    Recipe, RecipeBasicInfo, RecipeBasicInfoValidator, RecipeMaterialAndProduct, RecipeMaterialAndProductValidator, RecipeValidator
} from '~/lib/RecipeValidator';
import { useAddRecipe, useSelectedProfileId } from '~/providers/profile/hooks';
import { zodErrorMaps } from '~/utils/ZodErrorMap';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, DialogActions, DialogContent, DialogTitle, Step, StepLabel } from '@mui/material';
import MuiDialog from '@mui/material/Dialog';
import MuiStepper from '@mui/material/Stepper';

import { RecipeBasicInfoContents } from './components/RecipeBasicInfo/RecipeBasicInfo';
import { RecipeMaterialAndProductContents } from './components/RecipeMaterialAndProduct/RecipeMaterialAndProduct';
import { IAddRecipeDialogProps } from './types';

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
  const { t } = useInternationalization();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [profileId] = useSelectedProfileId();
  const addRecipe = useAddRecipe(profileId);
  const steps = [t('recipes.registerRecipe.basicInfo'), t('recipes.registerRecipe.materialAndProduct'), t('common.confirm')];

  const productInitialValue = {
    product  : '',
    byProduct: false,
    type     : '',
    amount   : 0
  };

  const materialInitialValue = {
    material: '',
    amount  : 0,
    type    : ''
  };
  const unitList: string[] = ['testUnit'];
  const machineList: string[] = ['製作機', '組立機', '製造機', '精製施設', '混合機', '充填機', '粒子加速器', '製錬炉', '鋳造炉'];

  /**
   * 基本情報ページのバリデータ
   */
  const methodsPage1 = useForm<RecipeBasicInfo>({
    mode         : 'onChange',
    defaultValues: {
      recipeName           : '',
      recipeAlternativeName: '',
      energy               : 0,
      progressTime         : 0,
      machine              : '',
      energyUnit           : ''
    },
    resolver: zodResolver(RecipeBasicInfoValidator, { errorMap: zodErrorMaps })
  });
  const handleSubmitPage1 = useCallback((func: () => Promise<void>) => methodsPage1.handleSubmit(func), [methodsPage1]);

  /**
   * 素材と成果物ページのバリデータ
   */
  const methodsPage2 = useForm<RecipeMaterialAndProduct>({
    mode         : 'onChange',
    defaultValues: {
      materials            : [materialInitialValue],
      products               : [productInitialValue]
    },
    resolver: zodResolver(RecipeMaterialAndProductValidator, { errorMap: zodErrorMaps })
  });
  const handleSubmitPage2 = useCallback((func: () => Promise<void>) => methodsPage2.handleSubmit(func), [methodsPage2]);

  /**
   * 確認ページのバリデータ
   * TODO:
   */
  const methodsPage3 = useForm<Recipe>({
    mode         : 'onChange',
    defaultValues: {
      id                   : 'new_recipeId',
      recipeName           : '',
      recipeAlternativeName: '',
      energy               : 0,
      progressTime         : 0,
      machine              : '',
      energyUnit           : '',
      materials            : [materialInitialValue],
      products             : [productInitialValue]
    },
    resolver: zodResolver(RecipeValidator, { errorMap: zodErrorMaps })
  });
  const handleSubmitPage3 = useCallback((func: () => Promise<void>) => methodsPage3.handleSubmit(func), [methodsPage3]);

  /**
   * activeStepをひとつ次に進める関数
   */
  const handleNext = useCallback(async () => {
    let newSkipped = skipped;
    if(skipped.has(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  }, [activeStep, skipped]);

  /**
   * activeStepをひとつ前に戻す関数
   */
  const handleBack = useCallback((): void => {
    if(activeStep === 0) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, [activeStep]);

  /**
   * 完了ボタン押下時の関数
   */
    const handleComplete = useCallback(async () => {
    }, []);

  /**
   * 「次へ」or「完了」ボタン押下時の関数
   */
  const handleSubmit = (() => {
    // if(activeStep === 0) {
    //   return handleSubmitPage1(handleNext);
    // }
    // if(activeStep === 1) {
    //   return handleSubmitPage2(handleNext);
    // }
    // return handleSubmitPage3(handleComplete);
    handleNext();
  });

  return (
    <MuiDialog
      open={props.open}
      fullWidth={true}
      maxWidth="lg"
      scroll="paper"
      aria-labelledby="select-preset"
      aria-describedby="select-preset"
    >
      <DialogTitle>
        {t('recipes.registerRecipe.title')}
      </DialogTitle>
      <DialogTitle>
        <Stepper steps={steps} activeStep={activeStep} skipped={skipped} />
      </DialogTitle>

      <DialogContent>
        {activeStep === 0 && 
          <FormProvider {...methodsPage1}>
            <RecipeBasicInfoContents machineList={machineList} unitList={unitList}/>
          </FormProvider>
        }

        {activeStep === 1 && 
          <FormProvider {...methodsPage1}>
            <RecipeMaterialAndProductContents materialInitialValue={materialInitialValue} productInitialValue={productInitialValue}/>
          </FormProvider>
        }
         
        {activeStep === 2 && <div>{t('common.confirm')}</div>}
      </DialogContent>

      <DialogActions sx={{ justifyContent: activeStep === 0 ? 'end' : 'space-between' }}>
        {activeStep !== 0 && 
          <Button variant="text" color="secondary" onClick={handleBack}>
            {t('common.back')}
          </Button>
        }
        <Button variant="text" color="secondary" onClick={handleSubmit}>
          {activeStep === 0 && t('common.next')}
          {activeStep === 1 && t('common.confirm')}
          {activeStep === 2 && t('common.register')}
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}

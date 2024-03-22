/**
 * @file AddRecipeDialog.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useCallback, useMemo, useState } from 'react';
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
import {
    materialInitialValue, productInitialValue, RecipeMaterialAndProductContents
} from './components/RecipeMaterialAndProduct/RecipeMaterialAndProduct';
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
   * セットオブジェクト
   */
  skipped: Set<number>;
}

/**
 * Stepper
 */
const Stepper = (props: IStepperProps): JSX.Element => {
  return (
    <MuiStepper activeStep={props.activeStep}>
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

  const unitList: string[] = ['MW', 'GW'];
  const machineList: string[] = ['製作機', '組立機', '製造機', '精製施設', '混合機', '充填機', '粒子加速器', '製錬炉', '鋳造炉'];

  /**
   * 基本情報ページのバリデータ
   */
  const methodsBasicInfo = useForm<RecipeBasicInfo>({
    mode         : 'onChange',
    defaultValues: {
      recipeName           : '',
      recipeAlternativeName: '',
      energy               : 0,
      progressTime         : 0,
      machine              : machineList[0],
      energyUnit           : unitList[0]
    },
    resolver: zodResolver(RecipeBasicInfoValidator, { errorMap: zodErrorMaps })
  });

  /**
   * 素材と成果物ページのバリデータ
   */
  const methodsMaterialAndProduct = useForm<RecipeMaterialAndProduct>({
    mode         : 'onChange',
    defaultValues: {
      materials: [materialInitialValue],
      products : [productInitialValue]
    },
    resolver: zodResolver(RecipeMaterialAndProductValidator, { errorMap: zodErrorMaps })
  });

  /**
   * 確認ページのバリデータ
   */
  const methodsConfirm = useForm<Recipe>({
    mode         : 'onChange',
    defaultValues: {
      id                   : '',
      recipeName           : '',
      recipeAlternativeName: '',
      energy               : 0,
      progressTime         : 0,
      machine              : '',
      energyUnit           : '',
      materials            : [],
      products             : []
    },
    resolver: zodResolver(RecipeValidator, { errorMap: zodErrorMaps })
  });

  /**
   * activeStepをひとつ次に進める関数
   */
  const handleNext = useCallback(async () => {
    let newSkipped = skipped;
    if(skipped.has(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    // 確認ページ用のuseFormをセット
    if(activeStep === 0) {
      methodsConfirm.setValue('recipeName', methodsBasicInfo.getValues('recipeName'));
      methodsConfirm.setValue('recipeAlternativeName', methodsBasicInfo.getValues('recipeAlternativeName'));
      methodsConfirm.setValue('energy', methodsBasicInfo.getValues('energy'));
      methodsConfirm.setValue('progressTime', methodsBasicInfo.getValues('progressTime'));
      methodsConfirm.setValue('machine', methodsBasicInfo.getValues('machine'));
      methodsConfirm.setValue('energyUnit', methodsBasicInfo.getValues('energyUnit'));
    }
    if(activeStep === 1) {
      methodsConfirm.setValue('materials', methodsMaterialAndProduct.getValues('materials'));
      methodsConfirm.setValue('products', methodsMaterialAndProduct.getValues('products'));
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  }, [activeStep, methodsBasicInfo, methodsMaterialAndProduct, methodsConfirm, skipped]);

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
   * ダイアログを閉じる関数
   */
  const onClose = useCallback((): void => {
    // useFormをリセット
    methodsBasicInfo.reset();
    methodsMaterialAndProduct.reset();
    methodsConfirm.reset();
    // Stepperを1ページ目に戻す
    setActiveStep(0);
    setSkipped(new Set<number>());
    // ダイアログを閉じる
    props.onClose();
  }, [methodsBasicInfo, methodsMaterialAndProduct, methodsConfirm, props]);

  /**
   * 完了ボタン押下時の関数
   */
    const handleComplete = useCallback(async (recipe: Recipe) => {
      addRecipe(recipe);
      onClose();
    }, [addRecipe, onClose]);

  /**
   * 「次へ」or「完了」ボタン押下時の関数
   */
  const handleSubmit = useMemo(() => {
    if(activeStep === 0) {
      return methodsBasicInfo.handleSubmit(handleNext);
    }
    if(activeStep === 1) {
      return methodsMaterialAndProduct.handleSubmit(handleNext);
    }
    return methodsConfirm.handleSubmit(handleComplete);
  }, [activeStep, handleComplete, handleNext, methodsBasicInfo, methodsMaterialAndProduct, methodsConfirm]);

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
          <FormProvider {...methodsBasicInfo}>
            <RecipeBasicInfoContents machineList={machineList} unitList={unitList}/>
          </FormProvider>
        }

        {activeStep === 1 && 
          <FormProvider {...methodsMaterialAndProduct}>
            <RecipeMaterialAndProductContents/>
          </FormProvider>
        }
         
        {activeStep === 2 && 
          <FormProvider {...methodsConfirm}>
            <RecipeBasicInfoContents machineList={machineList} unitList={unitList} isReadOnly/>
            <RecipeMaterialAndProductContents isReadOnly/>
          </FormProvider>
        }
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

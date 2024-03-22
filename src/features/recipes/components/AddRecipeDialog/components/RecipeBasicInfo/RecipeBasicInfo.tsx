/**
 * @file RecipeBasicInfo.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import {
    ControllerSelectForm, ControllerTextForm, IControllerSelectFormProps, IControllerTextFormProps
} from '~/components/ControllerForm';
import { useInternationalization } from '~/hooks/UseInternationalization';
import { RecipeBasicInfo } from '~/lib/RecipeValidator';

import { Grid } from '@mui/material';

import { IRecipeBasicInfoContentsProps } from './types';

const TextForm = (props: IControllerTextFormProps<RecipeBasicInfo>): JSX.Element => {
  return (<ControllerTextForm {...props}/>);
};
const SelectForm = (props: IControllerSelectFormProps<RecipeBasicInfo>): JSX.Element => {
  return (<ControllerSelectForm {...props}/>);
};

/**
 * レシピ登録 基本情報
 */
export const RecipeBasicInfoContents = (props: IRecipeBasicInfoContentsProps): JSX.Element => {
 const { t } = useInternationalization();

 return (
    <Grid container spacing={3}>
      <TextForm label={t('recipes.headers.recipeName')} name="recipeName" isReadOnly={props.isReadOnly} />
      <TextForm label={t('recipes.headers.recipeAlternativeName')} name="recipeAlternativeName" isReadOnly={props.isReadOnly} />
      <SelectForm label={t('recipes.headers.machine')} name="machine" list={props.machineList} variant="standard" readOnly={props.isReadOnly} />
      <TextForm label={t('recipes.headers.progressTime')} name="progressTime" type="number" isReadOnly={props.isReadOnly} />
      <TextForm label={t('recipes.headers.energy')} name="energy" type="number" isReadOnly={props.isReadOnly} />
      <SelectForm label={t('recipes.headers.energyUnit')} name="energyUnit" list={props.unitList} variant="standard" readOnly={props.isReadOnly} />
    </Grid>
 )
}
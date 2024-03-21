/**
 * @file RecipeBasicInfo.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import {
    ControllerSelectForm, ControllerTextForm, IControllerSelectFormProps, IControllerTextFormProps
} from '~/components/ControllerForm';
import { useTransLocations } from '~/i18n';
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
 const t = useTransLocations();

 return (
    <Grid container spacing={3}>
      <TextForm label={t('recipes.headers.recipeName')} name="recipeName" />
      <TextForm label={t('recipes.headers.recipeAlternativeName')} name="recipeAlternativeName" />
      <SelectForm label={t('recipes.headers.machine')} name="machine" list={props.machineList}/>
      <TextForm label={t('recipes.headers.progressTime')} name="progressTime" type="number" />
      <TextForm label={t('recipes.headers.energy')} name="energy" type="number" />
      <SelectForm label={t('recipes.headers.energyUnit')} name="energyUnit" list={props.unitList} />
    </Grid>
 )
}
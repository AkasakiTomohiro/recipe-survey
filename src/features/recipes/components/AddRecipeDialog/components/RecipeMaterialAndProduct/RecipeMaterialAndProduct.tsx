/**
 * @file RecipeMaterialAndProduct.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useMemo } from 'react';
import {
    ControllerCheckboxForm, ControllerTextForm, IControllerCheckboxFormProps, IControllerTextFormProps
} from '~/components/ControllerForm';
import { TableForm } from '~/components/ControllerForm/components/TableForm';
import { useTransLocations } from '~/i18n';
import { RecipeMaterialAndProduct } from '~/lib/RecipeValidator';

import { Box, Typography } from '@mui/material';

import { IRecipeMaterialAndProductContentsProps } from './types';

const TextForm = (props: IControllerTextFormProps<RecipeMaterialAndProduct>): JSX.Element => {
  return (<ControllerTextForm {...props}/>);
};
const CheckboxForm = (props: IControllerCheckboxFormProps<RecipeMaterialAndProduct>): JSX.Element => {
  return (<ControllerCheckboxForm {...props}/>);
};

/**
 * レシピ登録 素材と成果物
 */
export const RecipeMaterialAndProductContents = (props: IRecipeMaterialAndProductContentsProps): JSX.Element => {
  const t = useTransLocations();

  const [materialsHeaders, productsHeaders] = useMemo(() => {
    return [
      [
        'No.',
        t('recipes.headers.material'),
        t('recipes.headers.type'),
        t('recipes.headers.materialConsumption')
      ],
      [
        'No.',
        t('recipes.headers.product'),
        t('recipes.headers.type'),
        t('recipes.headers.byproduct'),
        t('recipes.headers.productionVolume')
      ]
    ];
  }, [t]);

  const getMaterialForms = (index: number): JSX.Element[] => {
    return [
      <Typography variant="body1" key=''>{index + 1}</Typography>,
      <TextForm label="" name={`materials.${index}.material`} key="" />,
      <TextForm label="" name={`materials.${index}.type`} key="" />,
      <TextForm label="" name={`materials.${index}.amount`} type="number" key="" />
    ];
  };

  const getProductForms = (index: number): JSX.Element[] => {
    return [
      <Typography variant="body1" key=''>{index + 1}</Typography>,
      <TextForm label="" name={`products.${index}.product`} key="" />,
      <TextForm label="" name={`products.${index}.type`} key="" />,
      <CheckboxForm name={`products.${index}.byProduct`} key="" />,
      <TextForm label="" name={`products.${index}.amount`} type="number" key="" />
    ];
  };

  return (
    <>
      <Box sx={{ marginTop: (theme) => theme.spacing(2) }}>
        <TableForm
          title={t('recipes.headers.material')}
          headers={materialsHeaders}
          forms={getMaterialForms}
          name="materials"
          initialValue={props.materialInitialValue}
          maxLength={4}
          editable
        />
      </Box>
      <Box sx={{ marginTop: (theme) => theme.spacing(2) }}>
        <TableForm
          title={t('recipes.headers.deliverables')}
          headers={productsHeaders}
          forms={getProductForms}
          name="products"
          initialValue={props.productInitialValue}
          maxLength={4}
          editable
        />
      </Box>
    </>
  )
}
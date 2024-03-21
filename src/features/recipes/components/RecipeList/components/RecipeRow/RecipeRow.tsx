/**
 * @file RecipeRow.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useMemo } from 'react';
import { TableCollapseRow, TableHeader, TableRow } from '~/components/Table';
import { useInternationalization } from '~/hooks/UseInternationalization';

import { Box, Table, TableBody, Typography } from '@mui/material';

import { IRecipeRowProps } from './types';

export function RecipeRow(props: IRecipeRowProps): JSX.Element {
  const { t } = useInternationalization();
  
  const [productsHeaders, materialsHeaders] = useMemo(() => {
    return [
      [
        t('recipes.headers.product'),
        t('recipes.headers.type'),
        t('recipes.headers.byproduct'),
        t('recipes.headers.productionVolume')
      ],
      [
        t('recipes.headers.material'),
        t('recipes.headers.type'),
        t('recipes.headers.materialConsumption')
      ]
    ];
  }, [t]);

  return (
    <TableCollapseRow 
      index={props.index} 
      row={[props.recipe.recipeName, props.recipe.recipeAlternateName, props.recipe.machine, props.recipe.progressTime, props.recipe.energy]} 
      Collapse={() => (
        <>
        <Box sx={{ margin: 2 }}>
          <Typography variant="h6">{ t("recipes.headers.material")}</Typography>
          <Table size='small'>
            <TableHeader headers={materialsHeaders} />
            <TableBody>{ props.recipe.materials.map((m, ii) => <TableRow index={ii} row={[m.material, m.type, m.amount]} key={ii} />) }</TableBody>
          </Table>
        </Box>
        <Box sx={{ margin: 2 }}>
          <Typography variant="h6">{ t("recipes.headers.deliverables")}</Typography>
          <Table size='small'>
            <TableHeader headers={productsHeaders} />
            <TableBody>{ props.recipe.result.map((m, ii) => <TableRow index={ii} row={[m.product, m.type, m.byProduct ? '〇' : '', m.amount]} key={ii} />) }</TableBody>
          </Table>
        </Box>
        </>
      )} 
    />
  );
}
/**
 * @file RecipeList.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */
import { useCallback, useMemo, useState } from 'react';

import { SearchIcon } from '@/components/Icon';
import { TableCollapseRow } from '@/components/Table/components/TableCollapseRow';
import { TableFooter } from '@/components/Table/components/TableFooter';
import { TableHeader } from '@/components/Table/components/TableHeader';
import { TableRow } from '@/components/Table/components/TableRow';
import { useTransLocations } from '@/i18n';
import { Table, TableBody } from '@mui/material';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { IRecipeListProps, ISearchFieldProps } from './types';

export function RecipeList(props: IRecipeListProps): JSX.Element {
  const t = useTransLocations();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [searchWord, setSearchWord] = useState<string>('');
  const [rows, setRows] = useState(props.recipes);

  const [parentsHeaders, productsHeaders, materialsHeaders] = useMemo(() => {
    return [
      [
        t('recipes.headers.recipeName'),
        t('recipes.headers.recipeAlternativeName'),
        t('recipes.headers.machine'),
        t('recipes.headers.progressTime'),
        t('recipes.headers.energy')
      ],
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

  /**
   * 表示ページを変更
   */
  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  /**
   * 一ページ当たりの行数を変更
   */
  const handleRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0)
  }

  /**
   * 検索ワードでフィルタリング
   */
  const searchFilter = (word: string) => {
    const filtered = props.recipes.filter(f => Object.values(f).map(m => m.toString().includes(word)).includes(true));
    setRows(filtered);
    setSearchWord(word);
    setPage(0);
  }

  return (
  <>
  <Typography variant="h5">{t('recipes.title')}</Typography>
  <Box marginBottom={2}><SearchField searchWord={searchWord} searchFilter={searchFilter} /></Box>
  <Paper sx={{ width: '100%' }}>
    <TableContainer>
      <Table>
        <TableHeader headers={parentsHeaders} isCollapse />
        <TableBody>
        { 
          rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((m, i) => (
            <TableCollapseRow key={i} index={i} row={[m.recipeName, m.recipeAlternateName, m.machine, m.progressTime, m.energy]} 
              Collapse={() => (
                <>
                <Box sx={{ margin: 2 }}>
                  <Typography variant="h6">{ t("recipes.headers.material")}</Typography>
                  <Table size='small'>
                    <TableHeader headers={materialsHeaders} />
                    <TableBody>{ m.materials.map((mm, ii) => <TableRow index={ii} row={[mm.material, mm.type, mm.amount]} key={ii} />) }</TableBody>
                  </Table>
                </Box>
                <Box sx={{ margin: 2 }}>
                  <Typography variant="h6">{ t("recipes.headers.deliverables")}</Typography>
                  <Table size='small'>
                    <TableHeader headers={productsHeaders} />
                    <TableBody>{ m.result.map((mm, ii) => <TableRow index={ii} row={[mm.product, mm.type, mm.byProduct ? '○' : '', mm.amount]} key={ii} />) }</TableBody>
                  </Table>
                </Box>
                </>
              )} 
            />
          ))
        }
        </TableBody>
      </Table>
    </TableContainer>
    <TableFooter rowsPerPage={rowsPerPage} numOfLines={props.recipes.length} page={page} onPageChange={handlePageChange} onRowsPerPageChange={handleRowsPerPage} />
  </Paper>
  </>
  );
}

const SearchField = (props: ISearchFieldProps): JSX.Element => {
  const t = useTransLocations();

  /**
   * 検索する関数
   */
  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    props.searchFilter(event.target.value);
  }, [props]);

  return (
    <TextField
      label={t('common.search')}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        )
      }}
      fullWidth
      variant="standard"
      value={props.searchWord}
      onChange={handleSearch}
      margin="normal"
      inputProps={{ 'data-testid': 'search-field' }}
    />
    );
}
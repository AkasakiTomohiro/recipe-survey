/**
 * @file RecipeList.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */
import { useMemo, useState } from 'react';

import { TableFooter } from '@/components/Table/components/TableFooter';
import { TableHeader } from '@/components/Table/components/TableHeader';
import { useTransLocations } from '@/i18n';
import { Table, TableBody } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';

import { RecipeRow } from './components/RecipeRow/RecipeRow';
import { SearchField } from './components/SearchField/SearchField';
import { IRecipeListProps } from './types';

export function RecipeList(props: IRecipeListProps): JSX.Element {
  const t = useTransLocations();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [numOfLines, setNumOfLines] = useState<number>(props.recipes.length);
  const [searchWord, setSearchWord] = useState<string>('');
  const [rows, setRows] = useState(props.recipes);

  const parentsHeaders = useMemo(() => {
    return [t('recipes.headers.recipeName'), t('recipes.headers.recipeAlternativeName'), t('recipes.headers.machine'), t('recipes.headers.progressTime'), t('recipes.headers.energy')];
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
    setNumOfLines(filtered.length);
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
          { rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((m, i) => <RecipeRow key={i} index={i} recipe={m} />) }
        </TableBody>
      </Table>
    </TableContainer>
    <TableFooter rowsPerPage={rowsPerPage} numOfLines={numOfLines} page={page} onPageChange={handlePageChange} onRowsPerPageChange={handleRowsPerPage} />
  </Paper>
  </>
  );
}

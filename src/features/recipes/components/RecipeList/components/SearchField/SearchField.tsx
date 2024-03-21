/**
 * @file SearchField.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useCallback } from 'react';
import { SearchIcon } from '~/components/Icon';
import { useTransLocations } from '~/i18n';

import { InputAdornment, TextField } from '@mui/material';

import { ISearchFieldProps } from './types';

export function SearchField(props: ISearchFieldProps): JSX.Element {
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
    />
  );
}
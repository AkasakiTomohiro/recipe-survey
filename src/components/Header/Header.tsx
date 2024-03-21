/**
 * @file Header.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import * as React from 'react';
import { useInternationalization } from '~/hooks/UseInternationalization/UseInternationalization';

import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import { AppBar, Box, IconButton, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';

// 設定した言語は引数で取得できるように変更する
// TODO: Drawerをつける
export const Header = (): JSX.Element => {
  const {t} = useInternationalization();

  return (
    <Box height={50} sx={{ display: 'flex' }}>
      <AppBar position='static' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <IconButton size='medium' sx={{mx: 2}}>
            <DensityMediumOutlinedIcon style={{color: 'black'}}/>
          </IconButton>
        <Typography component="div" sx={{flexGrow: 1, m: 'auto 0'}}>
          {t('appTitle')}
        </Typography>
        <LanguageSelectBox />
        {/* 実装後に解禁 */}
        {/* <GameSelectBox /> */}
      </AppBar>
    </Box>
  );
};

const LanguageSelectBox = (): JSX.Element => {

  const [language, setLanguage] = React.useState<string>('日本語');

  const languageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value)
  }

  return (
    <Select
      labelId='languageSelectLabel'
      value={language}
      onChange={languageChange}
      label='Language'
    >
      <MenuItem value={0}>
        English
      </MenuItem>
      <MenuItem value={10}>
        日本語
      </MenuItem>
    </Select>
  )
}
/*
const GameSelectBox = (): JSX.Element => {

  const [game, setGame] = React.useState<string>('Satisfactory');

  const gameChange = (event: SelectChangeEvent) => {
    setGame(event.target.value);
  }

  return (
    <Select
    labelId='gameSelectLabel'
    id='gameSelect'
    value={game}
    onChange={gameChange}
    label='Satisfactory'
    >
      <MenuItem value={0}>
        Satisfactory
      </MenuItem>
    </Select>
  )

}

const SideBar = (): JSX.Element => {

  const [ displaySideBar, setDisplaySideBar ] = React.useState<boolean>(false);

  const SideBar: JSX.Element = (
    <Box sx={{width: 150}}>
      <List>
        <ListItemButton>
          <ListItemText>
            レシピ一覧
          </ListItemText>
        </ListItemButton>
      </List>
    </Box>
  )

  return (
    <></>
  )

}
*/


import * as React from 'react';

import { HelpCenter, Language } from '@mui/icons-material';
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export const Header = (): JSX.Element => {

  const [language, setLanguage] = React.useState<string>('');
  const [game, setGame] = React.useState<string>('Satisfactory');

  const languageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value)
  }
  const gameChange = (event: SelectChangeEvent) => {
    setGame(event.target.value);
  }

  return (
    <>
      <div style={{background: "#4CAF50", display: 'flex', alignItems: 'center', padding: '0 4px', width: 'full'}}>
        <Button variant='outlined'>
          <DensityMediumOutlinedIcon style={{color: 'black'}}/>
        </Button>
        <div className='roboto-bold' style={{paddingLeft: '8px'}}>
          Recipe Survey
        </div>
        <div style={{flexGrow: 1}}></div>
        <FormControl variant='standard' sx={{minWidth: '220px', m: '0 0px'}}>
          <InputLabel id='languageSelectLabel'>Language</InputLabel>
          <Select
            labelId='languageSelectLabel'
            id='languageSelect'
            value={language}
            onChange={languageChange}
            label='Language'
          >
            <MenuItem value={0}>
              English
            </MenuItem>
            <MenuItem value={10}>
              Japanese
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl variant='standard' sx={{minWidth: '220px', m: '0 0px'}}>
          <InputLabel id='gameSelectLabel'></InputLabel>
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
        </FormControl>
      </div>
    </>
  );
};

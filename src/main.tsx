import './i18n';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@emotion/react';

import App from './App.tsx';
import { lightTheme } from './theme/LightTheme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

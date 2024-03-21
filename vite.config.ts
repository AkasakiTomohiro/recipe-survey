import { parse } from 'comment-json';
import { readFileSync } from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

const tsconfig = parse(readFileSync("tsconfig.json").toString()) as any;
const alias = Object.keys(tsconfig.compilerOptions.paths).map(key => {
  const value = (tsconfig.compilerOptions.paths as Record<string, string[]>)[key][0]
  return {
    [key.replace("*", "")]: path.resolve(__dirname, value.replace("*", ""))
  }
}).reduce((p, c) => ({...p, ...c}), {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: alias
  }
})

/**
 * @file UseTable.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useState } from 'react';

import { UseTableProps, UseTableResult } from './types';

/**
 * テーブル表示に必要なデータを提供するカスタムフック
 */
export function useTable<
  TRow extends Record<string, any>
>(props: UseTableProps<TRow>): UseTableResult<TRow> {
  const [rows, setRows] = useState<TRow[]>(props.rows);
  return { rows };
}

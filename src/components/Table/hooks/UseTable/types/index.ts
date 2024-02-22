/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

export type UseTableProps<
  TRow extends Record<string, any>
> = {

  /**
   * 表示したい行データ
   */
  rows: TRow[];
}

export type UseTableResult<
  TRow extends Record<string, any>
> = {

  /**
   * 表示したい行データ
   */
  rows: TRow[];
}

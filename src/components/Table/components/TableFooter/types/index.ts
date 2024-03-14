/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

export interface ITableFooterProps {

  /**
   * 行数
   */
  numOfLines: number;

  /**
   * 1ページの行数
   */
  rowsPerPage: number;

  /**
   * ページ数
   */
  page: number;

  /**
   * ページネーション関数
   */
  onPageChange: (event: unknown, newPage: number) => void;

  /**
   * 1ページの行数を変更する関数
   */
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}


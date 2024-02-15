/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

export interface ITableRowProps {

  /**
   * 行番号
   */
  index: number;

  /**
   * 1行のデータ
   */
  row: (number | string)[];
}

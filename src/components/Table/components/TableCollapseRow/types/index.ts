/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

export interface ITableCollapseRowProps {

  /**
   * 行番号
   */
  index: number;

  /**
   * 1行のデータ
   */
  row: (number | string)[];

  /**
   * Collapseで表示するコンポーネント
   */
  Collapse: (props: ICollapseProps) => JSX.Element;
}

export interface ICollapseProps {

  /**
   * 行番号
   */
  index: number
}
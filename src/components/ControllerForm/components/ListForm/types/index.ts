/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

export interface IListFormProps {

  /**
   * フォーム
   */
  forms: (index: number) => JSX.Element[];

  /**
   * controlで管理しているオブジェクトのキーを指定
   */
  name: string;

  /**
   * 配列の要素を増やすときの初期値
   */
  initialValue: object;

  /**
   * 最大要素数
   */
  maxLength: number;

  /**
   * 編集可能かどうか
   * @default
   */
  editable?: boolean;
}

export type FormRowProps = {
  index: number;
  length: number;
  forms: (index: number) => JSX.Element[];
  onClickDelete: (index: number) => void;
  editable?: boolean;
}
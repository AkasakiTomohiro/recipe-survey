export interface ITableFormProps {

  /**
   * テーブル名
   */
  title: string;

  /**
   * テーブルカラムの一覧
   */
  headers: string[];

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
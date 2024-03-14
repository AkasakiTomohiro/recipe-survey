/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

export interface ISearchFieldProps {

  /**
   * 検索ワード
   */
  searchWord: string;

  /**
   * 検索関数
   */
  searchFilter: (word: string) => void;
}
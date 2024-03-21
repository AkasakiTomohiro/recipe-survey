/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { Prev } from '~/types';

/**
 * デフォルト言語
 */
export const defaultLanguage = "en"

/**
 * 言語種別リスト
 */
export const languageList = [defaultLanguage, "ja"] as const;

/**
 * 言語種別
 */
export type Language = typeof languageList[number];

/**
 * 翻訳JSONファイルのフォーマット
 */
export type LangFile<T extends number = 5> = [T] extends [never] ? string : Record<ScrollSetting, LangFile<Prev[T]> | string>;

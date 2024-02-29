/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

/**
 * ローカルストレージの変更イベント名
 * @see https://developer.mozilla.org/ja/docs/Web/API/Window/storage_event
 */
export const LocalStorageEventName = 'storage';

/**
 * ローカルストレージに値を保存
 */
export function setLocalStorage(key: string, value: string, dispatch: boolean = true): string {
  localStorage.setItem(key, value);
  if(dispatch) {
    window.dispatchEvent(new Event(LocalStorageEventName));
  }
  return value;
}

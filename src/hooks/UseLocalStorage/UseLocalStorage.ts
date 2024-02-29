/**
 * @file UseLocalStorage.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { LocalStorageEventName, setLocalStorage } from './utils';

/**
 * ローカルストレージを使用するカスタムフックの戻り値
 */
export type UseLocalStorageResult<T extends Record<string, any>> = [T, Dispatch<SetStateAction<T>>];

/**
 * ローカルストレージを使用するカスタムフック
 */
export function useLocalStorage<T extends Record<string, any> | any[]>(
  key: string,
  initialValue: T
): UseLocalStorageResult<T> {

  // ローカルストレージの値を取得しuseStateの初期値を設定
  const [state, setState] = useState<T>(() => getLocalStorage(key, initialValue));

  // stateが変更されたらローカルストレージに保存
  useEffect(() => {
    setLocalStorage(key, JSON.stringify(state));
  }, [key, state]);

  // マウント時にローカルストレージの値を監視するイベントリスナーを設定
  useEffect(() => {

    // ローカルストレージの値が変更されたらstateを更新
    const listenStorageChangeEvent = () => setState(() => getLocalStorage(key, initialValue));

    // ローカルストレージの変更イベントを監視
    window.addEventListener(LocalStorageEventName, listenStorageChangeEvent);
    return () => {

      // コンポーネントがアンマウントされたらイベントリスナーを削除
      window.removeEventListener(LocalStorageEventName, listenStorageChangeEvent);
    };
  }, []); // 初回マウント時のみ実行するため空の配列を指定

  return [state, setState];
}

/**
 * ローカルストレージから値を取得
 */
function getLocalStorage<T extends Record<string, any>>(key: string, initialValue: T): T {
  try {
    const value = localStorage.getItem(key);
    if(value) {
      return JSON.parse(value);
    }
    
    // ローカルストレージに値が存在しない場合は初期値を設定
    setLocalStorage(key, JSON.stringify(initialValue));
    return initialValue;
  } catch {

    // ローカルストレージの値が不正な場合は初期値を設定
    setLocalStorage(key, JSON.stringify(initialValue));
    return initialValue;
  }
}
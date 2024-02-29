/**
 * @file UseLocalStorageStr.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { LocalStorageEventName, setLocalStorage } from './utils';

/**
 * ローカルストレージを使用するカスタムフックの戻り値
 */
export type UseLocalStorageStrResult = [string, Dispatch<SetStateAction<string>>];

/**
 * ローカルストレージを使用するカスタムフック
 */
export function useLocalStorageStr(
  key: string,
  initialValue: string
): UseLocalStorageStrResult {

  // ローカルストレージの値を取得しuseStateの初期値を設定
  const [state, setState] = useState(() => getLocalStorageStr(key, initialValue));

  // stateが変更されたらローカルストレージに保存
  useEffect(() => {
    setLocalStorage(key, state);
  }, [key, state]);

  // マウント時にローカルストレージの値を監視するイベントリスナーを設定
  useEffect(() => {

    // ローカルストレージの値が変更されたらstateを更新
    const listenStorageChangeEvent = () => setState(() => getLocalStorageStr(key, initialValue));

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
function getLocalStorageStr(key: string, initialValue: string): string {
  const value = localStorage.getItem(key);
  if(value) {
    return value;
  }
  
  // ローカルストレージに値が存在しない場合は初期値を設定
  return setLocalStorage(key, initialValue);
}

/**
 * @file UseProfile.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { useLocalStorageStr, UseLocalStorageStrResult } from '@/hooks';

import { Profile } from './types';

/**
 * 選択されたプロファイルIDを管理するカスタムフック
 */
export function useSelectedProfileId(): UseLocalStorageStrResult {
  return useLocalStorageStr("selectedProfileId", "35761829-d57d-42b0-afc0-9750ed7f0487");
}

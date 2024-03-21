/**
 * @file ProfileProvider.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

"use client";

import { createContext, useCallback, useContext } from 'react';

import { useSelectedProfileId } from './hooks/UseProfile/UseProfile';
import { ProfileContextType, ProfileProviderProps } from './types';

const ProfileContext = createContext<ProfileContextType>({
  getSelectedProfileId: () => {
    throw new Error('ProfileContext is not implemented');
  },
  getRecipes: () => {
    throw new Error('ProfileContext is not implemented');
  }
});

/**
 * プロファイルコンテキストを取得
 */
export function useProfile(): ProfileContextType {
  return useContext(ProfileContext);
}

export const ProfileProvider = ({ children }: ProfileProviderProps): JSX.Element => {
  const [selectedProfileId] = useSelectedProfileId();
  const getRecipes = useCallback(() => [], []);
  return (
    <ProfileContext.Provider value={{
      getSelectedProfileId: () => selectedProfileId,
      getRecipes: getRecipes
    }}>
      {children}
    </ProfileContext.Provider>
  );
}

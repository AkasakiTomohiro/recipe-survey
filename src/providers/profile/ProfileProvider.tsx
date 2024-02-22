/**
 * @file ProfileProvider.tsx
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

"use client";

import { createContext, useCallback, useContext } from 'react';

import { ProfileContextType, ProfileProviderProps, Recipe } from './types';

const ProfileContext = createContext<ProfileContextType>({
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
  const getRecipes = useCallback(() => [], []);
  return (
    <ProfileContext.Provider value={{ 
      getRecipes: getRecipes
    }}>
      {children}
    </ProfileContext.Provider>
  );
}

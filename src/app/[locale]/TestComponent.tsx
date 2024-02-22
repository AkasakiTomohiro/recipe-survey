"use client";

import { useProfile } from '@/providers';

export const TestComponent = () => {
  const { getRecipes } = useProfile();
  return <div>{JSON.stringify(getRecipes())}</div>;
}

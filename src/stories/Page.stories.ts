import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { Page } from './Page';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  play: async ({ canvasElement }) => {
    // 初期（ログアウト）状態
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    
    await userEvent.click(loginButton); // ログイン
    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(loginButton).not.toBeInTheDocument();
    await expect(logoutButton).toBeInTheDocument();

    await userEvent.click(logoutButton); // ログアウト
    const signUpButton = canvas.getByRole('button', { name: /Sign up/i });
    await expect(signUpButton).toBeInTheDocument();
    await expect(loginButton).not.toBeInTheDocument();
  }
};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

export const SignUp: Story = {
  play: async ({ canvasElement }) => {
    // 初期（ログアウト）状態
    const canvas = within(canvasElement);
    const signUpButton = canvas.getByRole('button', { name: /Sign up/i });
    await expect(signUpButton).toBeInTheDocument();

    await userEvent.click(signUpButton); // サインアップ
    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(canvas.queryByRole("button", { name: /Sign up/i })).not.toBeInTheDocument();
    await expect(logoutButton).toBeInTheDocument();
  },
};
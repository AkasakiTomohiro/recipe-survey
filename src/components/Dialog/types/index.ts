/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';

export interface IDialogProps {

  /**
   * タイトル
   */
  title: string;

  /**
   * 確定ボタンのラベル
   */
  submitLabel: string;

  /**
   * キャンセルボタンのラベル
   */
  cancelLabel?: string;

  /**
   * モーダルの表示／非表示制御
   */
  open: boolean;

  /**
   * モーダルのcloseイベント
   */
  onClose: () => void;

  /**
   * 確定ボタン押下イベント
   */
  onSubmit: () => void;

  /**
   * DialogContentの中の要素
   */
  children: React.ReactNode;

  /**
  * ダイアログの最大幅
  */
  maxWidth?: Breakpoint | false;

  /**
   * CSS
   */
  sx?: SxProps<Theme>;
}
/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */
export interface IAddRecipeDialogProps {

  /**
   * ダイアログの表示・非表示
   */
  open: boolean;

  /**
   * ダイアログのcloseイベント
   */
  onClose: () => void;
}
import * as z from 'zod';

/**
 * Zodのエラーメッセージの変換
 */
export const zodErrorMaps: z.ZodErrorMap = (issue, ctx) => {
  if(issue.code === z.ZodIssueCode.too_small) {
    if(issue.type === 'string') {
      return { message: `${issue.minimum}文字以上で入力してください` };
    }
    if(issue.type === 'number') {
      return { message: `${issue.minimum}以上で入力してください` };
    }
    if(issue.type === 'array') {
      return { message: `${issue.minimum}個以上で入力してください` };
    }
  }
  if(issue.code === z.ZodIssueCode.too_big) {
    if(issue.type === 'string') {
      return { message: `${issue.maximum}文字以下で入力してください` };
    }
    if(issue.type === 'number') {
      return { message: `${issue.maximum}以下で入力してください` };
    }
    if(issue.type === 'array') {
      return { message: `${issue.maximum}個以下で入力してください` };
    }
  }
  return { message: ctx.defaultError };
};


/**
 * @file ZodErrorParse.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
*/

/**
 * ZodResolverのエラーメッセージから指定したIDのエラーメッセージを取得
 */
export function getZodErrorMessage(id: string, errors: any): string | undefined {
  const result = id.split('.')
    .map(m => Number.isNaN(parseInt(m, 10)) ? m : parseInt(m, 10))
    .reduce((p, c) => {
      if(p === undefined || p[c] === undefined) {
        return undefined;
      }
      return p[c];
    }, errors);
  return result?.message;
}

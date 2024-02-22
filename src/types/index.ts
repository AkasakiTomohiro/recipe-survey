/**
 * @file index.ts
 * @author Artan's Projects
 * @copyright © 2024 Artan's Projects. All rights reserved.
 */

export type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]];

export type Join<K, P> =
  K extends number | string
    ?
    P extends number | string
      ? `${K}${'' extends P ? '' : '.'}${P}`
      : `${K}`
    : never;

export type AttributeList<T, U extends number = 3> = [U] extends [never] ? never : T extends object ?
  { [K in keyof T]-?: Join<K, T[K] extends (infer R)[] ? (R extends object ? AttributeList<R[], Prev[U]> : AttributeList<T[K], Prev[U]>) : AttributeList<T[K], Prev[U]>> }[keyof T] : '';

export type RequiredFilterType<T extends Record<string, any>, U> = {
  [K in keyof T]: T[K] extends object ? RequiredFilterType<T[K], U>: T[K] extends U ? T[K] : never;
}
  
import type en from './en.json'

export type Language = 'pt' | 'en'

export type Dictionary = typeof en

type Paths<T> = {
  [K in keyof T & string]: T[K] extends string ? K : `${K}.${Paths<T[K]>}`
}[keyof T & string]

export type TranslationKey = Paths<Dictionary>

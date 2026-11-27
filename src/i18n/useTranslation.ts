import { use } from 'react'
import { LanguageContext } from './LanguageContext'
import { dictionaries } from './dictionaries'
import type { TranslationKey } from './types'

export function useTranslation() {
  const context = use(LanguageContext)
  if (!context) {
    throw new Error('useTranslation precisa estar dentro de <LanguageProvider>')
  }

  const { language, setLanguage } = context
  const dictionary = dictionaries[language]

  function t(key: TranslationKey): string {
    const value = key
      .split('.')
      .reduce<unknown>((node, part) => (node as Record<string, unknown>)?.[part], dictionary)
    return typeof value === 'string' ? value : key
  }

  return { language, setLanguage, t }
}

import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext } from './LanguageContext'
import type { Language } from './types'

const STORAGE_KEY = 'war-language'

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    // localStorage bloqueado (modo privado, etc.): segue sem a preferência salva
  }
  return navigator.language.startsWith('pt') ? 'pt' : 'en'
}

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // sem persistência, mas o idioma continua funcionando na sessão
    }
  }, [language])

  return <LanguageContext value={{ language, setLanguage }}>{children}</LanguageContext>
}

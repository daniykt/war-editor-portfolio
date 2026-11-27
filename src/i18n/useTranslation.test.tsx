import { act, renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import { beforeEach, describe, expect, it } from 'vitest'
import { LanguageProvider } from './LanguageProvider'
import { useTranslation } from './useTranslation'

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
)

describe('useTranslation', () => {
  beforeEach(() => localStorage.clear())

  it('troca o texto e o lang do <html> ao mudar de idioma', () => {
    const { result } = renderHook(() => useTranslation(), { wrapper })

    act(() => result.current.setLanguage('en'))
    expect(result.current.t('hero.cta')).toBe("Let's talk")

    act(() => result.current.setLanguage('pt'))
    expect(result.current.t('hero.cta')).toBe('Vamos conversar')
    expect(document.documentElement.lang).toBe('pt-BR')
  })

  it('lança erro se usado fora do Provider', () => {
    expect(() => renderHook(() => useTranslation())).toThrow()
  })
})

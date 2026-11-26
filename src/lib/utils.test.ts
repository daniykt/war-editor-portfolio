// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn', () => {
  it('junta classes e ignora valores falsos', () => {
    const fontReady = true
    expect(cn('flex', !fontReady && 'invisible', undefined, null, 'gap-4')).toBe('flex gap-4')
  })

  it('resolve conflito do Tailwind mantendo a última classe', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('trata tipografias do Custom Editing Kit como tamanho, não como cor', () => {
    expect(cn('text-display', 'text-accent')).toBe('text-display text-accent')
  })

  it('substitui uma tipografia do kit por outra', () => {
    expect(cn('text-body', 'text-display')).toBe('text-display')
  })
})

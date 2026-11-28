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

  it('papel tipográfico remove peso, entrelinha e espaçamento anteriores', () => {
    expect(cn('font-medium', 'text-caption')).toBe('text-caption')
    expect(cn('leading-none', 'tracking-wide', 'text-body')).toBe('text-body')
  })

  it('só o text-label remove um uppercase anterior', () => {
    expect(cn('uppercase', 'text-label')).toBe('text-label')
    expect(cn('uppercase', 'text-caption')).toBe('uppercase text-caption')
  })

  it('tamanho do Tailwind não apaga o peso', () => {
    expect(cn('font-bold', 'text-sm')).toBe('font-bold text-sm')
  })

  it('tamanho do Tailwind substitui um papel do kit', () => {
    expect(cn('text-caption', 'text-sm')).toBe('text-sm')
  })

  it('troca entre papel comum e text-label nos dois sentidos', () => {
    expect(cn('text-body', 'text-label')).toBe('text-label')
    expect(cn('text-label', 'text-caption')).toBe('text-caption')
  })
})

import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useFontReady } from '@/hooks/useFontReady'

const FONT = '400 72px "Jersey 25"'

// O jsdom não implementa document.fonts: criamos um falso com load() controlável
function mockFontsLoad(result: Promise<FontFace[]>) {
  const load = vi.fn<(font: string) => Promise<FontFace[]>>().mockReturnValue(result)
  Object.defineProperty(document, 'fonts', { value: { load }, configurable: true })
  return load
}

describe('useFontReady', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('começa como false e pede a fonte certa', () => {
    const load = mockFontsLoad(new Promise(() => {}))
    const { result } = renderHook(() => useFontReady(FONT))

    expect(result.current).toBe(false)
    expect(load).toHaveBeenCalledWith(FONT)
  })

  it('fica true quando a fonte carrega', async () => {
    mockFontsLoad(Promise.resolve([]))
    const { result } = renderHook(() => useFontReady(FONT))

    await act(async () => {})

    expect(result.current).toBe(true)
  })

  it('fica true mesmo se a fonte falhar', async () => {
    mockFontsLoad(Promise.reject(new Error('falha de rede')))
    const { result } = renderHook(() => useFontReady(FONT))

    await act(async () => {})

    expect(result.current).toBe(true)
  })

  it('libera o texto pelo timeout em rede lenta', () => {
    mockFontsLoad(new Promise(() => {}))
    const { result } = renderHook(() => useFontReady(FONT, 1500))

    act(() => {
      vi.advanceTimersByTime(1499)
    })
    expect(result.current).toBe(false)

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current).toBe(true)
  })

  it('limpa o timer ao desmontar', () => {
    mockFontsLoad(new Promise(() => {}))
    const { unmount } = renderHook(() => useFontReady(FONT))

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })
})

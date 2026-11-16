import { useEffect, useState } from 'react'

// Devolve true quando a fonte está pronta para uso, ou quando o tempo de espera acaba
// (em rede muito lenta, o texto aparece com o fallback mesmo)
export function useFontReady(font: string, timeoutMs = 1500): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const done = () => {
      if (!cancelled) setReady(true)
    }
    // load() pede a fonte na hora e resolve quando ela está pronta para uso
    document.fonts.load(font).then(done, done)
    const timer = setTimeout(done, timeoutMs)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [font, timeoutMs])

  return ready
}

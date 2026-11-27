import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { LanguageProvider } from '@/i18n/LanguageProvider'
import { VideoModal } from './VideoModal'

function setup() {
  localStorage.setItem('war-language', 'pt')
  const user = userEvent.setup()
  render(
    <LanguageProvider>
      <VideoModal
        videoId="abc123"
        title="Showreel"
        meta="War Editor · Showreel"
        trigger={<button type="button">Abrir</button>}
      />
    </LanguageProvider>,
  )
  return { user, trigger: screen.getByRole('button', { name: 'Abrir' }) }
}

describe('VideoModal', () => {
  beforeEach(() => localStorage.clear())

  it('abre com o vídeo, o título e o foco no Fechar', async () => {
    const { user, trigger } = setup()
    await user.click(trigger)

    expect(await screen.findByRole('dialog', { name: 'Showreel' })).toBeInTheDocument()
    expect(screen.getByTitle('Showreel')).toHaveAttribute(
      'src',
      expect.stringContaining('youtube-nocookie.com/embed/abc123'),
    )
    expect(screen.getByRole('button', { name: /fechar/i })).toHaveFocus()
  })

  it('fecha com Esc, remove o iframe e devolve o foco ao gatilho', async () => {
    const { user, trigger } = setup()
    await user.click(trigger)
    await screen.findByRole('dialog')

    await user.keyboard('{Escape}')

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
    expect(screen.queryByTitle('Showreel')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('ambiente de testes', () => {
  it('renderiza um componente no jsdom', () => {
    render(<button type="button">Ver portfólio</button>)

    expect(screen.getByRole('button', { name: 'Ver portfólio' })).toBeInTheDocument()
  })
})

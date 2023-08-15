import React from 'react'
import { render, screen } from '@testing-library/react'
import HelloWorld from 'src/components/HelloWorld'

test('initial test', () => {
  render(<HelloWorld />)
  expect(screen.queryByText('Hello World')).toBeInTheDocument()
})

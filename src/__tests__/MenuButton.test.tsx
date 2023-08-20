import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TonicProvider, Text, Icon } from '@tonic-ui/react'
import MenuButton from 'src/components/MenuButton'

function renderTonicProvider(comp: React.JSX.Element) {
  return render(<TonicProvider>{comp}</TonicProvider>)
}

describe('menu button test', () => {
  test('menu button popup', async () => {
    renderTonicProvider(<MenuButton />)
    await userEvent.click(screen.getByRole('button'))
    await screen.findByRole('menu')

    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  test('menu item', async () => {
    renderTonicProvider(
      <MenuButton>
        <MenuButton.Item>
          <Icon icon='settings' mr='2x' />
          <Text>Settings</Text>
        </MenuButton.Item>
        <MenuButton.Item>
          <Icon icon='user-team' mr='2x' />
          <Text>Accounts</Text>
        </MenuButton.Item>
      </MenuButton>
    )
    await userEvent.click(screen.getByRole('button'))
    await screen.findByRole('menu')

    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  test('menu toggle icon', async () => {
    renderTonicProvider(
      <MenuButton toggleIcon={<Icon data-testid='face-smile-o' icon='face-smile-o' size='8x' color='yellow:50' />}>
        <MenuButton.Item>
          <Icon icon='user-team' mr='2x' />
          <Text>Accounts</Text>
        </MenuButton.Item>
      </MenuButton>
    )
    await userEvent.click(screen.getByRole('button'))
    await screen.findByRole('menu')

    expect(screen.getByTestId('face-smile-o')).toBeInTheDocument()
  })
})

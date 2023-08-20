import React from 'react'
import { Text, Icon } from '@tonic-ui/react'
import MenuButton from 'components/MenuButton'
import styled from './Home.module.scss'

const Home = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.square}>
        <MenuButton toggleIcon={<Icon data-testid='face-smile-o' icon='face-smile-o' size='8x' color='yellow:50' />}>
          <MenuButton.Item>
            <Icon icon='settings' mr='2x' />
            <Text>Settings</Text>
          </MenuButton.Item>
          <MenuButton.Item>
            <Icon icon='user-team' mr='2x' />
            <Text>Accounts</Text>
          </MenuButton.Item>
          <MenuButton.Item>
            <Icon icon='lock' mr='2x' />
            <Text>Privacy control</Text>
          </MenuButton.Item>
        </MenuButton>
      </div>
      <div className={styled.square}>
        <MenuButton style={{ position: 'absolute', right: 0, bottom: 0 }}>
          <MenuButton.Item>
            <Icon icon='settings' mr='2x' />
            <Text>Settings</Text>
          </MenuButton.Item>
          <MenuButton.Item>
            <Icon icon='user-team' mr='2x' />
            <Text>Accounts</Text>
          </MenuButton.Item>
          <MenuButton.Item>
            <Icon icon='lock' mr='2x' />
            <Text>Privacy control</Text>
          </MenuButton.Item>
        </MenuButton>
      </div>
      <div className={styled.square}>
        <MenuButton>
          <MenuButton.Item>
            <Icon icon='settings' mr='2x' />
            <Text>Settings</Text>
          </MenuButton.Item>
          <MenuButton.Item>
            <Icon icon='user-team' mr='2x' />
            <Text>Accounts</Text>
          </MenuButton.Item>
          <MenuButton.Item>
            <Icon icon='lock' mr='2x' />
            <Text>Privacy control</Text>
          </MenuButton.Item>
        </MenuButton>
      </div>
      <div className={styled.square}>
        <MenuButton>
          <MenuButton.Item>
            <Icon icon='settings' mr='2x' />
            <Text>Settings</Text>
          </MenuButton.Item>
          <MenuButton.Item>
            <Icon icon='user-team' mr='2x' />
            <Text>Accounts</Text>
          </MenuButton.Item>
          <MenuButton.Item>
            <Icon icon='lock' mr='2x' />
            <Text>Privacy control</Text>
          </MenuButton.Item>
        </MenuButton>
      </div>
    </div>
  )
}

export default Home

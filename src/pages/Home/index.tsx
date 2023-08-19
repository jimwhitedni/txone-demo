import React from 'react'
import { Text, MenuItem, Icon } from '@tonic-ui/react'
import MenuButton from 'components/MenuButton'
import styled from './Home.module.scss'

const Home = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.square}>
        <MenuButton toggleIcon={<Icon icon='face-smile-o' size='8x' color='yellow:50' />}>
          <MenuItem>
            <Icon icon='settings' mr='2x' />
            <Text>Settings</Text>
          </MenuItem>
          <MenuItem>
            <Icon icon='user-team' mr='2x' />
            <Text>Accounts</Text>
          </MenuItem>
          <MenuItem>
            <Icon icon='lock' mr='2x' />
            <Text>Privacy control</Text>
          </MenuItem>
        </MenuButton>
      </div>
      <div className={styled.square}>
        <MenuButton style={{ position: 'absolute', right: 0, bottom: 0 }}>
          <MenuItem>
            <Icon icon='settings' mr='2x' />
            <Text>Settings</Text>
          </MenuItem>
          <MenuItem>
            <Icon icon='user-team' mr='2x' />
            <Text>Accounts</Text>
          </MenuItem>
          <MenuItem>
            <Icon icon='lock' mr='2x' />
            <Text>Privacy control</Text>
          </MenuItem>
        </MenuButton>
      </div>
      <div className={styled.square}>
        <MenuButton>
          <MenuItem>
            <Icon icon='settings' mr='2x' />
            <Text>Settings</Text>
          </MenuItem>
          <MenuItem>
            <Icon icon='user-team' mr='2x' />
            <Text>Accounts</Text>
          </MenuItem>
          <MenuItem>
            <Icon icon='lock' mr='2x' />
            <Text>Privacy control</Text>
          </MenuItem>
        </MenuButton>
      </div>
      <div className={styled.square}>
        <MenuButton>
          <MenuItem>
            <Icon icon='settings' mr='2x' />
            <Text>Settings</Text>
          </MenuItem>
          <MenuItem>
            <Icon icon='user-team' mr='2x' />
            <Text>Accounts</Text>
          </MenuItem>
          <MenuItem>
            <Icon icon='lock' mr='2x' />
            <Text>Privacy control</Text>
          </MenuItem>
        </MenuButton>
      </div>
    </div>
  )
}

export default Home

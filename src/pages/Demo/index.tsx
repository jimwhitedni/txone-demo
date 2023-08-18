import React from 'react'
import {
  Menu,
  MenuToggle,
  Text,
  Icon,
  MenuList,
  MenuItem,
} from '@tonic-ui/react'
import styled from './Demo.module.scss'

const Demo = () => {
  return (
    <div className={styled.wrapper}>
      <Menu offset={[, 4]}>
        <MenuToggle variant="secondary" className={styled.icon}>
          <Icon icon='user-team' mr='2x' />
        </MenuToggle>
        <MenuList width="max-content" className={styled.menu}>
          <MenuItem className={styled.item}>
            <Icon icon='settings' mr='2x' />
            <Text>Settings</Text>
          </MenuItem>
          <MenuItem className={styled.item}>
            <Icon icon='user-team' mr='2x' />
            <Text>Accounts</Text>
          </MenuItem>
          <MenuItem className={styled.item}>
            <Icon icon='lock' mr='2x' />
            <Text>Privacy control</Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default Demo

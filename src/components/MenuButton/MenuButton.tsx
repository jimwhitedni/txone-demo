import React from 'react'
import { Menu, MenuToggle, Icon, MenuList, MenuItem } from '@tonic-ui/react'
import styled from './MenuButton.module.scss'

type MenuButtonProps = {
  style?: React.CSSProperties
  toggleIcon?: React.ReactElement
} & ReactProps.WithChildren

const MenuButton = (props: MenuButtonProps) => {
  return (
    <Menu offset={[, 4]} className={styled.wrapper} style={props.style}>
      <MenuToggle variant='secondary' className={styled.icon}>
        {props.toggleIcon ? props.toggleIcon : <Icon icon='user-team' mr='2x' />}
      </MenuToggle>
      <MenuList
        width='max-content'
        className={styled.menu}
        PopperProps={{
          usePortal: true,
          modifiers: [
            {
              name: 'flip',
              enabled: true,
            },
          ],
        }}
      >
        {React.Children.map(props.children, (child) => {
          if (!React.isValidElement(child)) return
          if (child.type === MenuItem) {
            return React.cloneElement(child as React.ReactElement, {
              className: styled.item,
            })
          }
          return child
        })}
      </MenuList>
    </Menu>
  )
}

export default MenuButton

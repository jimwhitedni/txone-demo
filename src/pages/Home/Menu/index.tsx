import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from './Menu.module.scss'
import { useTranslation } from 'react-i18next'
import cx from 'classnames'

export default React.memo(function Menu() {
  const { t } = useTranslation('global')

  return (
    <aside className={styled.wrapper}>
      <nav>
        <ul>
          <li>
            <NavLink end to='.' className={({ isActive }) => cx({ [styled['is-active']]: isActive })}>
              {t('menu.homepage')}
            </NavLink>
          </li>
          <li>
            <NavLink end to='a' className={({ isActive }) => cx({ [styled['is-active']]: isActive })}>
              {t('menu.page1')}
            </NavLink>
          </li>
          <li>
            <NavLink end to='b' className={({ isActive }) => cx({ [styled['is-active']]: isActive })}>
              {t('menu.page2')}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
})

import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import styled from './Home.module.scss'

export default function Home() {
  return (
    <div className={styled.wrapper}>
      <Menu />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

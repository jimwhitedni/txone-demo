import React from 'react'
import Demo from 'src/pages/Demo'
import styled from './Home.module.scss'

const Home = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.square}>
        <Demo />
      </div>
      <div className={styled.square}>
        <Demo style={{ position: 'absolute', right: 0, bottom: 0 }} />
      </div>
      <div className={styled.square}>
        <Demo />
      </div>
      <div className={styled.square}>
        <Demo />
      </div>
    </div>
  )
}

export default Home

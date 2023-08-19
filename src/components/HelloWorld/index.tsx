import React from 'react'
import styled from './HelloWorld.module.scss'

const HelloWorld = () => {
  return (
    <>
      <h1 className={styled['text-primary']}>Hello World</h1>
      <hr />
      <h3>Environmental variables:</h3>
    </>
  )
}

export default HelloWorld

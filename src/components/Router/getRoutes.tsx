import React from 'react'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('src/pages/Home'))
const Demo = lazy(() => import('src/pages/Demo'))

const getRoutes = (): RouteObject[] => {
  return [
    {
      path: '/',
      element: <Home />,
      children: [
        {
          index: true,
          element: <Demo />,
        },
      ],
    },
  ]
}

export default getRoutes

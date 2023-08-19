import React from 'react'
import { Box, TonicProvider } from '@tonic-ui/react'
import Home from 'src/pages/Home'

const App = () => {
  return (
    <TonicProvider>
      <Home />
    </TonicProvider>
  )
}

export default App

import React from 'react'
import { Box, TonicProvider } from '@tonic-ui/react'
// import HelloWorld from 'src/components/HelloWorld'
import Demo from 'src/pages/Demo'

const App = () => {
  return (
    <TonicProvider>
      <Demo />
    </TonicProvider>
  )
}

export default App
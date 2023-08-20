import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { TonicProvider } from '@tonic-ui/react'
import Router from 'src/components/Router'

const App = () => {
  return (
    <HashRouter>
      <TonicProvider>
        <Suspense>
          <Router />
        </Suspense>
      </TonicProvider>
    </HashRouter>
  )
}

export default App

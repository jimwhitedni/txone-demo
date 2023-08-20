import React, { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { TonicProvider } from '@tonic-ui/react'
import Router from 'src/components/Router'
import i18n from 'src/i18n'

const App = () => {
  return (
    <HashRouter>
      <TonicProvider>
        <I18nextProvider i18n={i18n}>
          <Suspense>
            <Router />
          </Suspense>
        </I18nextProvider>
      </TonicProvider>
    </HashRouter>
  )
}

export default App

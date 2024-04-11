import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'

import { GlobalStyles } from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)

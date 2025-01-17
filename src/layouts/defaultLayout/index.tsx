import { LayoutDefaultContainer } from './styles'

import { Outlet } from 'react-router-dom'

import { Header } from '../../components/header'
import { Footer } from '../../components/footer'

export function LayoutDefault() {
  return (
    <LayoutDefaultContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutDefaultContainer>
  )
}

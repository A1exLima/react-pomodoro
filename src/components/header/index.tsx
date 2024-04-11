import { HeaderContainer } from './style'

import { PiTimerBold } from 'react-icons/pi'
import { LiaClipboardListSolid } from 'react-icons/lia'

import logo from '../../assets/icons/brand.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="logo tipo" />
      </NavLink>

      <nav>
        <NavLink to="/" title="Timer">
          <PiTimerBold fontSize={'2.6rem'} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <LiaClipboardListSolid fontSize={'2.6rem'} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

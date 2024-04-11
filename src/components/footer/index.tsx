import { FooterContainer } from './style'

import { FaLinkedin } from 'react-icons/fa6'

import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <FooterContainer>
      <p>Developed by Alex Lima - © 2024 Todos os direitos reservados.</p>
      <NavLink
        target="_blank"
        to="https://www.linkedin.com/in/a1exlima/"
        rel="noreferrer"
      >
        <FaLinkedin />
      </NavLink>
    </FooterContainer>
  )
}

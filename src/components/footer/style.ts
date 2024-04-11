import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;

  > p {
    font-size: 1.4rem;
    text-align: center;
  }

  > a {
    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme['blue-500']};
      font-size: 3rem;

      transition: color 0.4s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme['blue-600']};
      }
    }
  }
`

import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  > nav {
    display: flex;
    gap: 0.8rem;

    > a {
      width: 4.8rem;
      height: 4.8rem;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      border-bottom: 3px solid transparent;
      color: ${(props) => props.theme['gray-100']};

      transition: all 0.4s ease-in-out;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['blue-500']};
        color: ${(props) => props.theme['blue-500']};
      }

      &.active {
        color: ${(props) => props.theme['blue-500']};
      }
    }
  }
`

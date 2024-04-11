import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    --font-Roboto: "Roboto", sans-serif;
    --font-RobotoMono: "Roboto Mono", monospace;

    @media (max-width: 768px) {
      font-size: 52.5%;
    }
  }

  :focus{
    outline: none;
    box-shadow: 0 0 0 2 ${(props) => props.theme['gray-500']};
  }

  body {
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: var(--font-Roboto);
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    
    @media (max-width: 768px) {
      width: 5px;
      height: 5px;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['gray-400']};
    border-radius: 8px;
  }
`

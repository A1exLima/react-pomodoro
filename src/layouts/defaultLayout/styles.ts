import styled from 'styled-components'

export const LayoutDefaultContainer = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  max-width: 112rem;
  height: calc(100vh - 16rem);
  margin: 8rem auto;
  padding: 4rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 4rem;
  }
`

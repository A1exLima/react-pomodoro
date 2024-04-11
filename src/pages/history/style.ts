import { styled } from 'styled-components'

const statusColor = {
  concluded: 'green-300',
  progress: 'yellow-500',
  interrupted: 'red-500',
} as const

interface StatusContainerProps {
  $variant: keyof typeof statusColor
}

export const HistoryContainer = styled.main`
  flex: 1;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 160%;
    margin: 0 5.5rem 3.2rem 5.5rem;
  }
`

export const TaskListContainer = styled.div`
  height: 42.5rem;
  margin: 0 5.5rem;
  padding-right: 0.5rem;
  border-radius: 8px;
  overflow: auto;

  @media (max-width: 768px) {
    height: 59.5rem;
  }

  > table {
    min-width: 700px;
    border-collapse: collapse;

    th {
      height: 5.4rem;
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1.6rem 2.4rem;
      text-align: left;
      font-weight: bold;
      font-size: 1.4rem;

      &:first-child {
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }
    }

    tbody {
      tr {
        background-color: ${(props) => props.theme['gray-700']};

        transition: background-color 0.1s ease-in-out;
        &:hover {
          background-color: ${(props) => props.theme['gray-600']};
        }
      }

      tr:last-child {
        td:first-child {
          border-bottom-left-radius: 8px;
        }
        td:last-child {
          border-bottom-right-radius: 8px;
        }
      }
    }

    td {
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      height: 5.4rem;
      padding: 1.6rem 2.4rem;

      white-space: nowrap;
      font-size: 1.4rem;
      text-align: left;

      &:first-child {
        width: 50%;
      }

      &:last-child {
        width: 20%;
      }
    }
  }
`

export const StatusContainer = styled.span<StatusContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: -0.5rem;

  > svg {
    font-size: 2rem;
    color: ${(props) => props.theme[statusColor[props.$variant]]};
  }
`

import { HistoryContainer, StatusContainer, TaskListContainer } from './style'

import { TbPointFilled } from 'react-icons/tb'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <TaskListContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Concerto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusContainer $variant="concluded">
                  <TbPointFilled />
                  Concluído
                </StatusContainer>
              </td>
            </tr>

            <tr>
              <td>Concerto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusContainer $variant="progress">
                  <TbPointFilled />
                  Em andamento
                </StatusContainer>
              </td>
            </tr>

            <tr>
              <td>Concerto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusContainer $variant="interrupted">
                  <TbPointFilled />
                  Interrompido
                </StatusContainer>
              </td>
            </tr>

            <tr>
              <td>Concerto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusContainer $variant="concluded">
                  <TbPointFilled />
                  Concluído
                </StatusContainer>
              </td>
            </tr>

            <tr>
              <td>Concerto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusContainer $variant="progress">
                  <TbPointFilled />
                  Em andamento
                </StatusContainer>
              </td>
            </tr>

            <tr>
              <td>Concerto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusContainer $variant="interrupted">
                  <TbPointFilled />
                  Interrompido
                </StatusContainer>
              </td>
            </tr>

            <tr>
              <td>Concerto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <StatusContainer $variant="concluded">
                  <TbPointFilled />
                  Concluído
                </StatusContainer>
              </td>
            </tr>
          </tbody>
        </table>
      </TaskListContainer>
    </HistoryContainer>
  )
}

import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  margin-top: 7.2rem;
  display: flex;
  justify-content: center;

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;

  font-size: 1.8rem;
  color: ${(props) => props.theme['gray-100']};

  > label,
  span {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`

export const BaseInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  padding: 1.1rem 0.8rem;
  font-size: inherit;
  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    border-bottom: 2px solid ${(props) => props.theme['blue-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 7.2rem;
  text-align: center;
`

export const CountDownContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;

  font-family: var(--font-RobotoMono);
  font-size: 16rem;
  font-weight: bold;
  line-height: 160%;
  user-select: none;

  > span {
    background-color: ${(props) => props.theme['gray-700']};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12.8rem;
    height: 19.8rem;
    border-radius: 0.8rem;
  }

  .counter-points {
    flex-direction: column;
    font-size: 7rem;
    color: ${(props) => props.theme['blue-500']};
    width: 9.7rem;
    background-color: transparent;
    margin: 0.5rem -1.6rem 0;
  }
`

export const ButtonContainer = styled.button`
  width: 100%;
  height: 6.4rem;
  border-radius: 0.8rem;
  border: none;
  background-color: ${(props) => props.theme['blue-500']};

  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  transition: background-color 0.4s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 70%;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['blue-600']};
  }
`

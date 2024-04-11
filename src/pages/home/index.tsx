import {
  ButtonContainer,
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  TaskInput,
} from './style'

import { IoPlayOutline } from 'react-icons/io5'
import { TbPointFilled } from 'react-icons/tb'

import { useForm } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(3, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo deve ser de no mínimo 5 minutos')
    .max(60, 'O ciclo deve ser de no máximo 60 minutos'),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset, formState } =
    useForm<newCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      },
    })

  function newCycleForm(data: newCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const taskIsEmpty = !task

  console.log(formState.errors)

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(newCycleForm)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="list-suggestions"
            type="text"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="list-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <span className="counter-points">
            <TbPointFilled />
            <TbPointFilled />
          </span>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <ButtonContainer type="submit" disabled={taskIsEmpty}>
          <IoPlayOutline fontSize={'3rem'} />
          Começar
        </ButtonContainer>
      </form>
    </HomeContainer>
  )
}

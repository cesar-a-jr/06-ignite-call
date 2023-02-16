import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size={'sm'} prefix="ignite.com/" placeholder="Seu-usuario" />
      <Button size={'sm'} type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}

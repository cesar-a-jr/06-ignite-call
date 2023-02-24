import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from 'phosphor-react'
import { Container, Header } from '../styles'
import { signIn, useSession } from 'next-auth/react'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { useRouter } from 'next/router'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const isSingneIn = session.status === 'authenticated'
  const hasAuthError = !!router.query.error

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2}></MultiStep>
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Gooogle Agenda</Text>
          {isSingneIn ? (
            <Button size={'sm'} disabled>
              Conectado <Check />
            </Button>
          ) : (
            <Button
              variant={'secondary'}
              size={'sm'}
              onClick={() => signIn('google')}
            >
              Conectar <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size={'sm'}>
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso a o Google Agenda
          </AuthError>
        )}

        <Button
          type="submit"
          onClick={() => router.push('/register/time-intervals')}
          disabled={!isSingneIn}
        >
          Proximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}

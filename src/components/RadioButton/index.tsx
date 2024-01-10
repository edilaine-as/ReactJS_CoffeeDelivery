import { forwardRef, InputHTMLAttributes } from 'react'
import { Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement>

export const RadioButton = forwardRef(function RadioButton({
  children,
  ...rest
}: Props) {
  return (
    <Container>
      <input type="radio" {...rest} />
      {children}
    </Container>
  )
})

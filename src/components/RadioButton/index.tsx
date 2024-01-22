import { forwardRef, InputHTMLAttributes } from 'react'
import { Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const RadioButton = forwardRef(function RadioButton({
  children,
  isSelected,
  ...rest
}: Props) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" {...rest} />
      {children}
    </Container>
  )
})

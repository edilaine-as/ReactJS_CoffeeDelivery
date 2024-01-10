import { HTMLAttributes, InputHTMLAttributes, forwardRef } from 'react'
import { Box, Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export const TextInput = forwardRef(function TextInput({
  containerProps,
  ...rest
}: Props) {
  return (
    <Box {...containerProps}>
      <Container>
        <input type="text" {...rest} />
      </Container>
    </Box>
  )
})

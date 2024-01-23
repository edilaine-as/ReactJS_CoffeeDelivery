import { FocusEvent, HTMLAttributes, InputHTMLAttributes, forwardRef, useState, LegacyRef } from 'react'
import { FieldError } from 'react-hook-form/dist/types'
import { Box, Container, ErrorMessage } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

export const TextInput = forwardRef(function TextInput({
  containerProps,
  error,
  onFocus,
  onBlur,
  ...rest
}: Props,
  ref: LegacyRef<HTMLInputElement>) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input 
          type="text" 
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest} 
        />
      </Container>

      {error?.message ? (
        <ErrorMessage role="alert">{error.message}</ErrorMessage>
      ) : null}
    </Box>
  )
})

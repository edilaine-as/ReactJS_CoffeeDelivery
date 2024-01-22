import { FocusEvent, HTMLAttributes, InputHTMLAttributes, forwardRef, useState, LegacyRef } from 'react'
import { Box, Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  containerProps?: HTMLAttributes<HTMLDivElement>
}

export const TextInput = forwardRef(function TextInput({
  containerProps,
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
    </Box>
  )
})

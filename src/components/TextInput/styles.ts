import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Box = styled.div``

export const Container = styled.label`
  display: flex;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  &[data-state='focused'] {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  &[data-state='blurred'] {
    border-color: ${(props) => props.theme['base-button']};
  }

  input {
    color: ${(props) => props.theme['base-text']};
    width: 100%;
    background-color: transparent;
    padding: 12px;
    outline: none;
    border: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    ${mixins.fonts.textS};
    
  }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
  padding-top: 3px;
`

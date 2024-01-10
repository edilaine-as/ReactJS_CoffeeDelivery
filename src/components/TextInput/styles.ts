import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Box = styled.div``

export const Container = styled.label`
  display: flex;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  input {
    color: ${(props) => props.theme['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    ${mixins.fonts.textS}
  }
`

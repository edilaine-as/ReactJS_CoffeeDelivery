import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  padding: 1rem;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  border: 1px solid transparent;

  text-transform: uppercase;

  span {
    ${mixins.fonts.buttonM};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

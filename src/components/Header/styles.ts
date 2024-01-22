import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;

  height: 6.5rem;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      padding: 0.625rem;

      text-decoration: none;
      border-radius: 6px;
    }

    a:first-child {
      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme.purple};

      span {
        color: ${(props) => props.theme['purple-dark']};
        ${mixins.fonts.textS}
      }
    }

    a:last-child {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      position: relative;

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 20px;
        height: 20px;

        position: absolute;
        top: 0px;
        right: 0px;

        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};
        border-radius: 9999px;
        transform: translate(50%, -50%);

        ${mixins.fonts.textXS}
      }
    }
  }
`

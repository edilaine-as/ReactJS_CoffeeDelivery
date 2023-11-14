import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
        font-size: 0.875rem;
      }
    }

    a:last-child {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IntroContent = styled.div`
  max-width: 588px;
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 4.125rem;
  }
`

export const IconsContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    width: 567px;
    margin-bottom: 0.875rem;

    div {
      gap: 0.875rem;

      p {
        font-size: 1rem;
        margin: 0;
      }
    }
  }
`

export const BaseIconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  color: ${(props) => props.theme.background};

  width: 2rem;
  height: 2rem;
`

export const ShoppingCartContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme['yellow-dark']};
`

export const TimerContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme.yellow};
`

export const PackageContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme['base-text']};
`

export const CoffeeContainer = styled(BaseIconContainer)`
  background-color: ${(props) => props.theme.purple};
`

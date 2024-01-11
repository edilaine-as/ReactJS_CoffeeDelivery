import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 5rem;
  max-width: 1160px;

  img {
    margin-bottom: -75px;
  }
`

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 526px;
`

export const Heading = styled.div`
  h1 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    ${mixins.fonts.textL};
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Info = styled.div`
  width: 100%;

  border: 1px solid;
  border-color: transparent;
  border-radius: 6px 36px;
  border-color: transparent;

  background-origin: border-box;
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
`

export const InfoContent = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }
`

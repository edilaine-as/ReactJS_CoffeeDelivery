import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    text-transform: uppercase;
  }
`

export const Title = styled.h3`
  margin-top: 16px;

  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled.span`
  margin-top: 8px;
  width: 100%;

  color: ${(props) => props.theme['base-label']};
`

import styled from "styled-components";

export const Box = styled.div``

export const Container = styled.label`
    input {
        color: ${({ theme }) => theme.colors['base-text']};
        width: 100%;
        background-color: transparent;
        border: none;
        padding: 12px;
        outline: none;

        &::placeholder {
        color: ${({ theme }) => theme.colors['base-label']};
        }
    }
`
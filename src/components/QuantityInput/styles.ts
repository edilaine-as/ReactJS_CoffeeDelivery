import { styled } from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    gap: 4px;

    padding: 8px;
    background-color: ${(props) => props.theme["base-button"]} ;
    border-radius: 6px;

    span{
        ${mixins.fonts.textM}
        color: ${(props) => props.theme["base-title"]}
    }

    button{
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
    }

    button svg{
        color: ${(props) => props.theme.purple};

        &:hover{
            color: ${(props) => props.theme["purple-dark"]};
        }
    }
`
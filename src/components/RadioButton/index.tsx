import { forwardRef } from "react"
import { Container } from "./styles"
import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> 

export const RadioButton = forwardRef(function RadioButton({children, ...rest}: Props){
    return(
        <Container>
            <input type="radio" {...rest}/>
            {children}
        </Container>
    )
})
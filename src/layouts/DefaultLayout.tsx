import styled from "styled-components";
import { Header } from "../components/Header";
import { Outlet } from 'react-router-dom'

export const OutletWrapper = styled(Outlet)`
    max-width: 1160px;
    padding: 92px 20px;
    margin: 0 auto;
`

export function DefaultLayout(){
    return(
        <div>
            <Header />
            <OutletWrapper />
        </div>
    )
}
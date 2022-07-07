import React from 'react'
import * as C from './style';
import logo from '../../assets/Logo/inivision-logo.png'
import {NavLink} from 'react-router-dom'

export const Header = () => {
    return(
        <C.Container>
            <C.Logo>
                <img src={logo} alt='Logo da empresa invision contendo o mesmo nome'/>
            </C.Logo>
            <C.MenuDesktop>
                <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Sacola
                </NavLink>

                <NavLink to="/payment" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Pagamento
                </NavLink>

                <NavLink to="/confirmation" className={({ isActive }) => (isActive ? "link-active" : "link")}>
                    Confirmação
                </NavLink>
            </C.MenuDesktop>
        </C.Container>
    )
}
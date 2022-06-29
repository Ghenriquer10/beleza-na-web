import React from 'react'
import * as C from './style';
import logo from '../../assets/Logo/inivision-logo.png'

export const Header = () => {
    return(
        <C.Container>
            <img src={logo} alt='Logo da empresa invision contendo o mesmo nome'/>
        </C.Container>
    )
}
import React from 'react';
import * as C from './style';
import cell from '../../assets/cell.png'

export const Produto = () => {
    return(
        <C.Container>
            <img src={cell} alt="cell"/>
            <p>Smartphone Moto G8 Power, Preto, 64GB, Tela 6.4, Câm. 16MP</p>
            <p>R$ 1700,00</p>
        </C.Container>
    )
}
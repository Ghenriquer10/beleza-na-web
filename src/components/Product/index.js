import React from 'react';
import * as C from './style';

export const Produto = (props) => {
    return(
        <C.Container>
            <div className='image'>
                <img src={props.image} alt="cell"/>
            </div>
            <div className='about'>
                <p className='name'>{props.name}</p>
                <p className='price'>R$ {props.price}</p>
            </div>
        </C.Container>
    )
}
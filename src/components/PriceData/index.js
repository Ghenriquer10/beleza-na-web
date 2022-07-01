import React from 'react'
import * as C from './style'
import { Link } from 'react-router-dom'


export const PriceData = (props) => {
    return(
        <C.Container>
            <div className='datas'>
                <div>
                    <p>Produtos:</p>
                    <p>R$ {props.subTotal}</p>
                </div>
                <div>
                    <p>Frete:</p>
                    <p>R$ {props.shippingTotal}</p>
                </div>
                <div className='discount'>
                    <p>Desconto:</p>
                    <p>-R$ {props.discount}</p>
                </div>
                <div className='total-value'>
                    <p>Total:</p>
                    <p>R$ {props.totalPrice}</p>
                </div>
            </div>
            <Link className='button' form='form-test' to={'/payment'}>Seguir para o pagamento</Link>
        </C.Container>
    )
}
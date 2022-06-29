import React from 'react'
import * as C from './style'


export const PriceData = () => {
    return(
        <C.Container>
            <div className='datas'>
                <div>
                    <p>Produtos:</p>
                    <p>R$ 624, 80</p>
                </div>
                <div>
                    <p>Frete:</p>
                    <p>R$ 5,30</p>
                </div>
                <div className='discount'>
                    <p>Desconto:</p>
                    <p>-R$ 30,00</p>
                </div>
                <div className='total-value'>
                    <p>Total:</p>
                    <p>R$ 600,10</p>
                </div>
            </div>
            <button>Seguir para o pagamento</button>
        </C.Container>
    )
}
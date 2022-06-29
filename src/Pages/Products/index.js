import React from 'react'
import { Produto } from '../../components/Product'
import {PriceData} from '../../components/PriceData'
import * as C from './style'

export const Products = () => {
    return(
        <C.Container>
            <h2>Produtos</h2>
            <C.Content>
                <div className='products-div'>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                    <Produto/>
                </div>
                <div className='data-product'>
                    <PriceData/>
                </div>
            </C.Content>
        </C.Container>
    )
}
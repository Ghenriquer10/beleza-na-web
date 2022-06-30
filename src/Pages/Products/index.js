import React, { useEffect, useState } from 'react'
import { Produto } from '../../components/Product'
import {PriceData} from '../../components/PriceData'
import * as C from './style'
import apiData from '../../services/api'

export const Products = () => {

    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        apiData.get()
        .then((response) => {
            setProducts(response.data)
            console.log(response.data)
            setLoading(false)
        })
    }, [])

    

   
    return(
        <C.Container>
            <h2>Produtos</h2>
            <C.Content>
                <div className='products-div'>
                    {loading ? <h1>Carregando produtos</h1> : 
                     products.items.map((item) => {
                        return(
                            <Produto 
                                key={item.product.priceSpecification.sku}
                                image={item.product.imageObjects[0].small}
                                name={item.product.name}
                                price={item.product.priceSpecification.price.toFixed(2)}
                            />
                        )
                     })   
                    }
                </div>
                <div className='data-product'>
                    {loading ? <h1>Carregando valores</h1> :
                    <PriceData
                      subTotal={products.subTotal.toFixed(2)}  
                      shippingTotal={products.shippingTotal.toFixed(2)}
                      discount={products.discount.toFixed(2)}
                      totalPrice={products.total.toFixed(2)}  
                    />
                    } 
                </div>
            </C.Content>
        </C.Container>
    )
}
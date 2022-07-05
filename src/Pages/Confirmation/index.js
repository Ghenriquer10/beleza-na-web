import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import apiData from '../../services/api'
import * as C from './style'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'


export const Confirmation = () => {

    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const { register, handleSubmit } = useForm()

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
            <C.Message>
                <IoIosCheckmarkCircleOutline size={60}/>
                <h1>Compra efetuada com sucesso</h1>
            </C.Message>
            <C.Content>
                <C.OwnerCard>
                    <h1>Cartão</h1>
                </C.OwnerCard>
                <C.ProductData>
                    <h1>Produto</h1>
                </C.ProductData>
                <C.PriceData>
                        {loading ? <h1>Carregado dados...</h1> :
                        <div className='datas'>
                            <div>
                                <p>Produtos:</p>
                                <p>R$ <input readOnly value={products.subTotal.toFixed(2)} {...register("subtotal")}/></p>
                            </div>
                            <div>
                                <p>Frete:</p>
                                <p>R$ <input readOnly value={products.shippingTotal.toFixed(2)} {...register("shipping-total")}/></p>
                            </div>
                            <div className='discount'>
                                <p>Desconto:</p>
                                <p>R$ <input readOnly value={products.discount.toFixed(2)} {...register("discount")}/></p>
                            </div>
                            <div className='total-value'>
                                <p>Total:</p>
                                <p>R$ <input readOnly value={products.total.toFixed(2)} {...register("total")}/></p>
                            </div>
                        </div>
                        }
                        <button>Seguir para o pagamento</button>
                    </C.PriceData>
            </C.Content>
        </C.Container>
    )
}
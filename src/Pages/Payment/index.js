import React, { useEffect, useState } from 'react'
import apiData from '../../services/api'
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import * as C from './style'


export const Payment = (props) => {

    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)

    const { register, handleSubmit } = useForm()
    const { cardData, setCardData } = useState()


    const onSubmit = data => {
        setCardData(data)
        alert("clicou")
    }

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
            <h2>Pagamento</h2>
            <C.Content>
                <div className='products-div'>
                <form id='form-test' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Número do cartão:</label>
                        <ReactInputMask required mask="9999 9999 9999 9999" minLength={16} {...register("number-card") }/>
                    </div>
                    <div>
                        <label>Nome do titular:</label>
                        <input required {...register("card-owner-name")}/>
                    </div>
                    <div>
                        <div className='space'>
                            <label>Validade(Mês/ano):</label>
                            <ReactInputMask required mask="99/9999" minLength={6} {...register("card-validate")}/>
                        </div>
                        <div>
                            <label>CVV:</label>
                            <ReactInputMask required type={'password'}  minLength={3} maxLength={3} {...register("card-cvv")}/>
                        </div>
                    </div>
                </form>
                </div>
                <C.PriceData className='data-product'>
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
                </C.PriceData>
            </C.Content>
        </C.Container>
    )
}
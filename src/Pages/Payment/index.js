import React, { useEffect, useState, useContext } from 'react'
import apiData from '../../services/api'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import { SaleContext } from '../../contexts/saleDatas'
import * as C from './style'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Payment = () => {

    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const { register, handleSubmit } = useForm()

    const {setSale} = useContext(SaleContext)
    const navigate = useNavigate()

    useEffect(() => {
        apiData.get()
        .then((response) => {
            setProducts(response.data)
            console.log(response.data)
            setLoading(false)
        })
    }, [])
    
    const onSubmit = (data) => {
        data["products"] = products.items
        setSale(data)
        console.log(data)
        toast.success('Compra realizada com sucesso!')
        setTimeout(() => {
            return navigate("/confirmation")
        }, 2000)
    }
 
    return(
        <C.Container>
            <C.Content onSubmit={handleSubmit(onSubmit)}>
                <C.CardData>
                    <div className='card-number'>
                        <label>Número do cartão:</label>
                        <ReactInputMask 
                        required minLength={16} 
                        mask={"9999-9999-9999-9999"}
                        {...register("card-number")}
                        />
                    </div>
                    <div className='card-owner'>
                        <label>Titular do cartão:</label>
                        <input required
                        {...register("card-owner")}
                        />
                    </div>
                    <div className='card-about'>
                        <div className='card-date'>
                            <label>Validade(Mês/ano):</label>
                            <ReactInputMask 
                            required 
                            mask={"99/9999"}
                            {...register("card-date")}
                            />
                        </div>
                        <div className='card-password'>
                            <label>CVV:</label>
                            <ReactInputMask
                            required 
                            type={"password"} 
                            maxLength={3}
                            {...register("card-password")}
                            />
                        </div>
                    </div>
                </C.CardData>
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
                    <button type='submit'>Seguir para o pagamento</button>
                </C.PriceData>
            </C.Content> 
        </C.Container>
    )
}
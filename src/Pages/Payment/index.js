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
        localStorage.setItem('saleStorage', JSON.stringify(data))
        console.log(data)
        toast.success('Compra realizada com sucesso!')
        setTimeout(() => {
            return navigate("/confirmation")
        }, 2000)
    }
 
    return(
        <C.Container>
            <h2>Pagamento</h2>
            <C.Content onSubmit={handleSubmit(onSubmit)}>
                <C.CardData>
                    <div className='card-number'>
                        <label>Número do cartão:</label>
                        <ReactInputMask 
                        required minLength={16} 
                        mask={"9999.9999.9999.9999"}
                        {...register("cardNumber")}
                        />
                    </div>
                    <div className='card-owner'>
                        <label>Titular do cartão:</label>
                        <input required
                        {...register("cardOwner")}
                        />
                    </div>
                    <div className='card-about'>
                        <div className='card-date'>
                            <label>Validade(Mês/ano):</label>
                            <ReactInputMask 
                            required 
                            mask={"99/9999"}
                            {...register("cardDate")}
                            />
                        </div>
                        <div className='card-password'>
                            <label>CVV:</label>
                            <ReactInputMask
                            required 
                            type={"password"} 
                            maxLength={3}
                            {...register("cardPassword")}
                            />
                        </div>
                    </div>
                </C.CardData>
                <C.PriceData>
                    {loading ? <h1 className='loading'>Carregado dados...</h1> :
                    <div className='datas'>
                        <div>
                            <p>Produtos:</p>
                            <p>R$ <input readOnly value={products.subTotal.toFixed(2)} {...register("subtotal")}/></p>
                        </div>
                        <div>
                            <p>Frete:</p>
                            <p>R$ <input readOnly value={products.shippingTotal.toFixed(2)} {...register("shippingTotal")}/></p>
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
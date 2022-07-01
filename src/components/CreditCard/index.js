import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import * as C from './style'

export const CreditCard = () => {

    const { register, handleSubmit } = useForm()
    const { cardData, setCardData } = useState()


    const onSubmit = data => {
        setCardData(data)
        alert("clicou")
    }

    return(
        <C.Container>
            <C.Content>
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
            </C.Content>
        </C.Container>
    )
}
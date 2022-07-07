import React, { useEffect, useState, useContext } from 'react'
import { SaleContext } from '../../contexts/saleDatas'
import * as C from './style'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export const Confirmation = () => {

    const [loading, setLoading] = useState(true)
    const {sale} = useContext(SaleContext) 
    const [saleData, setSaleData] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        const loadStorage = async () => {
            const saleStorage = await JSON.parse(localStorage.getItem('saleStorage'))
            if(sale === undefined || saleStorage === null ){
                setTimeout(() => {
                    toast.error('Não foram encontrados dados de pagamento, redirecionado...')
                    return navigate("/payment")
                }, 2000)
                
            } else {
                setSaleData(sale || saleStorage)
                setLoading(false)
            }
        }
        loadStorage()
    }, [navigate, sale])

    return(
        <C.Container>
            <C.Message>
                <IoIosCheckmarkCircleOutline size={60}/>
                <h1>Compra efetuada com sucesso</h1>
            </C.Message>
                {loading ? <h1>Carregando...</h1> : 
                    <C.Content>
                        <C.OwnerCard>
                            <div className='title'>
                                <h1>Pagamento</h1>
                            </div>
                            <div className='card-area'>
                                <div className='about'>
                                    <input readOnly value={saleData.cardNumber} />
                                </div>
                                <div className='about'>
                                    <input readOnly value={saleData.cardOwner}/>
                                </div>
                                <div className='about'>
                                    <input readOnly value={saleData.cardDate}/>
                                </div>
                            </div>
                        </C.OwnerCard>
                        <C.ProductData>
                            <div className='title'>
                                <h1>Produtos</h1>
                            </div>
                            {loading ? <h1>Carregado dados...</h1> :
                                    <div className='product-area'>
                                        {saleData.products.map((product => {
                                            return(
                                                <div className='poduct-item' key={product.product.sku}>
                                                    <div className='image'>
                                                        <img src={product.product.imageObjects[0].small} alt="cell"/>
                                                    </div>
                                                    <div className='about'>
                                                        <p className='name'>{product.product.name}</p>
                                                    </div>
                                                </div>
                                            )
                                        }))}
                                    </div>
                                }
                        </C.ProductData>
                        <C.PriceData>
                            {loading ? <h1>Carregado dados...</h1> :
                            <div className='datas'>
                                <div>
                                    <p>Produtos:</p>
                                    <p>R$ <input readOnly value={saleData.subtotal} /></p>
                                </div>
                                <div>
                                    <p>Frete:</p>
                                    <p>R$ <input readOnly value={saleData.shippingTotal} /></p>
                                </div>
                                <div className='discount'>
                                    <p>Desconto:</p>
                                    <p>- R$<input readOnly value={saleData.discount} /></p>
                                </div>
                                <div className='total-value'>
                                    <p>Total:</p>
                                    <p>R$ <input readOnly value={saleData.total} /></p>
                                </div>
                            </div>
                            }
                        </C.PriceData>
                    </C.Content>
                }
        </C.Container>
    )
}
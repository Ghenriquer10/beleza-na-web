import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Header } from '../components/Header'
import { Confirmation } from '../Pages/Confirmation'
import { Payment } from '../Pages/Payment'
import { Products } from '../Pages/Products'


const HandleRoutes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Products/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path='/confirmation' element={<Confirmation/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default HandleRoutes;
import React from 'react'
import GlobalStyle from './styles/global'
import HandleRoutes from "./Routes/routes";
import UserProvider from './contexts/saleDatas';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <UserProvider>
      <GlobalStyle/>
      <ToastContainer autoClose={3000} draggable={false} transition={Zoom}/>
      <HandleRoutes/>
    </UserProvider>  
  );
}

export default App;

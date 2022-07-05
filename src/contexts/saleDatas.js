import { useState, createContext } from "react";

export const SaleContext = createContext({});

function UserProvider({children}){

    const [sale, setSale] = useState()

    return(
        <SaleContext.Provider value={{sale, setSale}}>
            {children}
        </SaleContext.Provider>
    )
}

export default UserProvider; 
import React, { createContext } from 'react'
import Deneme from '../Deneme';

export const DenemeContext = createContext();

const DenemeContextProvider = (props) => {
    return (
        <DenemeContext.Provider value={"Ahmet"}>
            {props.children}
        </DenemeContext.Provider>
    )
}

export default DenemeContextProvider

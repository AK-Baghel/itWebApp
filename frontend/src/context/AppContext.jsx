import React, { useState } from 'react'
import { createContext } from 'react'
export const Context = createContext();

function AppContext({ children }) {
    const [value, setvalue] = useState(true)
    return (
        <Context.Provider value={
            { value }
        }>
            {children}
        </Context.Provider>
    )
}

export default AppContext
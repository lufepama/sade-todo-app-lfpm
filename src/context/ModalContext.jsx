import React, { useState } from 'react'

const Context = React.createContext({})

export const ModalProvider = ({ children }) => {

    const [open, setOpen] = useState(false)

    return (
        <Context.Provider value={{ open, setOpen }}>
            {children}
        </Context.Provider>
    )
}

export default Context
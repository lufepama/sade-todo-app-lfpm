import React, { useState } from 'react'

const Context = React.createContext({})

var id = 0

const getUniqueId = () => {
    return id++ + ''
}

const initialData = [
    {
        id: getUniqueId(),
        title: 'Item 1',
    },
    {
        id: getUniqueId(),
        title: 'Item 2',
    },
    {
        id: getUniqueId(),
        title: 'Item 3',
    },
    {
        id: getUniqueId(),
        title: 'Item 4',
    }
]

export const ItemsProvider = ({ children }) => {

    const [itemList, setItemList] = useState(initialData)
    const [temporalItemList, setTemporalItemList] = useState([])
    const [trackEvents, setTrackEvents] = useState({})

    return (
        <Context.Provider value={{
            itemList, setItemList,
            temporalItemList, setTemporalItemList,
            trackEvents, setTrackEvents
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
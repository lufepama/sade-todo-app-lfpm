import React from 'react'
import { useItems } from '../../hooks/useItems'

const ItemList = () => {

    const { itemList } = useItems()

    console.log({ itemList })

    return (
        <div className='it-list-main-container'>
            <h1>Listas</h1>
            <h1>Listas</h1>
            <h1>Listas</h1>
        </div>
    )
}

export default ItemList
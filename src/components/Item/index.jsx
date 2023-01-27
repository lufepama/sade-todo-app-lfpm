import React from 'react'
import { useItems } from '../../hooks/useItems'

export const Item = ({ item }) => {

    const { handleItemClick } = useItems()


    return (
        <div onClick={() => handleItemClick(item.id)} className='item-main-container'>
            <p className='item-text'>{item.title}</p>
        </div>
    )
}

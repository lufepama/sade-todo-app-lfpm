import React, { useState } from 'react'
import { useItems } from '../../hooks/useItems'

export const Item = ({ item }) => {

    const { handleItemClick } = useItems()
    const [isSelected, setIsSelected] = useState(false)

    const handleSelectItem = () => {
        handleItemClick(item)
        setIsSelected(true)
    }

    return (
        <div onClick={() => handleSelectItem()} className='item-main-container'>
            <p className={`${isSelected ? 'item-text-selected' : 'item-text-no-selected'}`}>{item.title}</p>
        </div>
    )
}

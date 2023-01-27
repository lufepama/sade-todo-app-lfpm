import React, { useState } from 'react'
import { useEffect } from 'react'
import { useItems } from '../../hooks/useItems'
import { useSingleAndDoubleClick } from '../../hooks/useSingleAndDoubleClick'

export const Item = ({ item }) => {

    const { handleItemClick, deleteSingleItem, itemList } = useItems()
    const [isSelected, setIsSelected] = useState(false)

    const handleSingleClick = () => {
        handleItemClick(item)
        setIsSelected(true)
    }

    const handleDoubleClick = () => {
        deleteSingleItem(item)
    }


    return (
        <div onClick={useSingleAndDoubleClick(handleSingleClick, handleDoubleClick)} className='item-main-container'>
            <p className={`${isSelected ? 'item-text-selected' : 'item-text-no-selected'}`}>{item.title}</p>
        </div>
    )
}

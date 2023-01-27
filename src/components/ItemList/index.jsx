import React from 'react'
import { useItems } from '../../hooks/useItems'
import { Item } from '../Item'

const ItemList = () => {

    const { itemList } = useItems()

    return (
        <>
            {
                itemList.map((item, index) =>
                    <Item key={item.id} item={item} />
                )
            }
        </>
    )
}

export default ItemList
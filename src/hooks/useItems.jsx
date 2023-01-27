import React, { useContext, useEffect, useState } from 'react'
import ItemsContext from '../context/ItemsContext'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateRandomId(length = 10) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


export const useItems = () => {

    //Get params from items context
    const { itemList, setItemList } = useContext(ItemsContext)

    const handleItemClick = (itemId) => {
        console.log(itemId)
    }

    const onAddItem = (newItem) => {
        const itemData = {
            title: newItem,
            id: generateRandomId()
        }
        setItemList([...itemList, itemData])
    }

    const onDeleteItem = () => {

    }

    return {
        itemList,
        handleItemClick,
        onAddItem,
        onDeleteItem
    }
}

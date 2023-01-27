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
    const { itemList, setItemList, temporalItemList, setTemporalItemList } = useContext(ItemsContext)

    //Updates temporalItemList state -> Items that will be removed when delete btn is pressed
    const handleItemClick = (item) => {
        const isAlreadyInList = temporalItemList.includes(item.id)
        if (!isAlreadyInList) setTemporalItemList([...temporalItemList, item.id])
    }

    //Add item into list
    const onAddItem = (newItem) => {
        const itemData = {
            title: newItem,
            id: generateRandomId()
        }
        setItemList([...itemList, itemData])
    }

    //Delete items taking into account temporalItemList data
    const onDeleteItems = () => {
        const filteredList = itemList.filter((item) => !temporalItemList.includes(item.id))
        setItemList(filteredList)
    }

    //Delete single item
    const deleteSingleItem = (delItem) => {
        const filteredList = itemList.filter((item) => item.id != delItem.id)
        setItemList(filteredList)
    }

    return {
        itemList,
        temporalItemList,
        handleItemClick,
        onAddItem,
        onDeleteItems,
        deleteSingleItem
    }
}

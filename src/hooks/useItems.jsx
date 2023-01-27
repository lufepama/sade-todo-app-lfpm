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
    const { itemList, setItemList,
        temporalItemList, setTemporalItemList,
        trackEvents, setTrackEvents
    } = useContext(ItemsContext)

    //Updates temporalItemList state -> Items that will be removed when delete btn is pressed
    const handleItemClick = (item) => {
        const isAlreadyInList = temporalItemList.includes(item.id)
        if (!isAlreadyInList) setTemporalItemList([...temporalItemList, item])
    }

    //Add item into list
    const onAddItem = (newItem) => {
        const itemData = {
            title: newItem,
            id: generateRandomId(),
        }
        setItemList([...itemList, itemData])

        //We need to update the trackdata state.
        const trackData = {
            operation: 'Add',
            data: new Array(itemData)
        }
        setTrackEvents(trackData)
    }

    //Delete items taking into account temporalItemList data
    const onDeleteItems = () => {
        const filteredList = itemList.filter((item) => !temporalItemList.includes(item))
        setItemList(filteredList)

        //We need to update the trackdata state.
        const trackData = {
            operation: 'Del',
            data: temporalItemList
        }
        setTrackEvents(trackData)
    }

    //Delete single item
    const deleteSingleItem = (delItem) => {
        const filteredList = itemList.filter((item) => item.id != delItem.id)
        setItemList(filteredList)
    }

    //Manages undo, depending on operation value
    const onUndo = () => {
        if (trackEvents?.operation === 'Del') {
            setItemList((prevData) => prevData.concat([...trackEvents?.data]))
            setTrackEvents({})
            setTemporalItemList([])
        } else if (trackEvents?.operation === 'Add') {
            const filteredList = itemList.filter((item) => item.id != trackEvents?.data[0].id)
            setItemList(filteredList)
            setTrackEvents({})
            setTemporalItemList([])
        }

    }

    return {
        itemList,
        temporalItemList,
        handleItemClick,
        onAddItem,
        onDeleteItems,
        deleteSingleItem,
        onUndo
    }
}

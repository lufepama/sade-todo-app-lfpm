import React, { useContext, useEffect, useState } from 'react'
import ItemsContext from '../context/ItemsContext'


export const useItems = () => {

    //Get params from items context
    const { itemList, setItemList } = useContext(ItemsContext)



    return {
        itemList
    }
}

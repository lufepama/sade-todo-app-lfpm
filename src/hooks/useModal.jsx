import React, { useContext, useEffect, useState } from 'react'
import ModalContext from '../context/ModalContext'


export const useModal = () => {

    //Get params from items context
    const { open, setOpen } = useContext(ModalContext)


    //Methods definition
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return {
        open,
        handleClose,
        handleOpen
    }
}

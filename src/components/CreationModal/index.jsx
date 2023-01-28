import { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useModal } from '../../hooks/useModal'
import TextField from '@mui/material/TextField';
import CustomButton from '../shared/CustomButton';
import { useItems } from '../../hooks/useItems';

const style = {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '12px',
    p: 4,
};

const CreationModal = () => {

    const { open, handleClose } = useModal()
    const { onAddItem } = useItems()
    const [inputValue, setInputValue] = useState('')

    //Handle input value change
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    //Manages the creation of new entry
    const handleCreate = () => {
        if (inputValue.length > 0) {
            onAddItem(inputValue)
            handleClose()
            setInputValue('')
        }
    }

    //Manges the close event of the modal
    const handleCloseModal = () => {
        setInputValue('')
        handleClose()
    }


    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='modal-main-container'>
                        <div className='modal-inner-container'>
                            <div className='modal-header'>
                                <span className='modal-title'>Add item to list</span>
                            </div>
                            <TextField
                                value={inputValue}
                                className='modal-input' placeholder='Type the text here...'
                                onChange={handleChange}
                            />
                            <div className='modal-btns-container'>
                                <div className='modal-btns-inner-container'>
                                    <CustomButton isFilled={true} title={'Add'} handleClick={() => handleCreate()} />
                                    <CustomButton isFilled={false} title={'Cancel'} handleClick={() => handleCloseModal()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default CreationModal
import React from 'react'
import ItemList from '../ItemList/index'
import CustomButton from '../../components/shared/CustomButton'
import Button from '@mui/material/Button';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { ModalProvider } from '../../context/ModalContext'
import { useModal } from '../../hooks/useModal'
import CreationModal from '../CreationModal/CreationModal';


const MainCard = () => {

  const { handleOpen } = useModal()

  return (
    <div className='mcard-main-container'>
      <div className='mcard-inner-container'>
        <CreationModal />

        <div className='mcard-header'>
          <h1 className='mcard-title-header'>
            This is technical proof
          </h1>
          <p className='mcard-subtitle-header'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='mcard-items-list'>
          <ItemList />
        </div>
        <div className='mcard-btns-container'>
          <div className='mcard-first-btns'>
            <CustomButton isIcon={true} iconRef={faRotateLeft} />
            <CustomButton isFilled={false} title={'Delete'} />
          </div>
          <Button onClick={handleOpen}>Open modal</Button>
          <CustomButton isFilled={true} title={'Add'} />
        </div>
      </div>
    </div>
  )
}

export default MainCard
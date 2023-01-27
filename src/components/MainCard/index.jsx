import React from 'react'
import ItemList from '../ItemList/index'
import CustomButton from '../../components/shared/CustomButton'
import Button from '@mui/material/Button';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { ModalProvider } from '../../context/ModalContext'
import { useModal } from '../../hooks/useModal'
import CreationModal from '../CreationModal/CreationModal';
import { useItems } from '../../hooks/useItems';


const MainCard = () => {

  const { handleOpen } = useModal()
  const { onDeleteItems, itemList } = useItems()


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
          {
            itemList.length
              ? <ItemList />
              : <p className='mcard-empty-text'>Empty list</p>
          }

        </div>
        <div className='mcard-btns-container'>
          <div className='mcard-first-btns'>
            <CustomButton isIcon={true} iconRef={faRotateLeft} />
            <CustomButton isFilled={false} title={'Delete'} handleClick={() => onDeleteItems()} />
          </div>
          <CustomButton isFilled={true} title={'Add'} handleClick={() => handleOpen()} />
        </div>
      </div>
    </div>
  )
}

export default MainCard
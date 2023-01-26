import React from 'react'
import ItemList from '../ItemList/index'

const MainCard = () => {
  return (
    <div className='mcard-main-container'>
      <div className='mcard-inner-container'>
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
        <div className=''>
          <ItemList />
        </div>
      </div>
    </div>
  )
}

export default MainCard
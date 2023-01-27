import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CustomButton = ({ isFilled = false, isIcon = false, iconRef = null, title = null, handleClick }) => {


    return (
        <button onClick={() => handleClick()} className={`${isFilled ? 'btn-filled' : 'btn-unfilled'}`}>

            {
                isIcon && iconRef != null
                    ? <FontAwesomeIcon className='btn-icon' icon={iconRef} />
                    : <p className={`${isFilled ? 'btn-text-filled' : 'btn-text-unfilled'}`}>{title}</p>
            }
        </button>
    )
}

export default CustomButton
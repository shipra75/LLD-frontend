import React from 'react'
import Button from '../Button'
import './Modal.css'

const Modal = ({handleClick}) => {
    return (<div className='modalBody'>
        <div className ='a'>
            Header
            <Button text={'close'} handleClick={handleClick}></Button>
        </div>
    </div>)
}
export default Modal
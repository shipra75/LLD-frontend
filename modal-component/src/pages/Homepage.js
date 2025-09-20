import React, {useState} from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal /Modal'
const HomePage =() => {
    const [displayModal, setDisplayModal]= useState()
    const handleOpenClick= ()=> {
        setDisplayModal(true)
    }
const handleCloseClick =()=> {
    setDisplayModal(false)
}
    return ( <div>
        HomePage
        <Button text ={'show Modal '} handleClick ={handleOpenClick}></Button>
        {displayModal && <Modal handleClick={handleCloseClick}/>}
    </div>)
}
export default HomePage
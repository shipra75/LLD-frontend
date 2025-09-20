import React, {useState} from 'react'
const WorkTile =({title, workList, setWorkList})=> {
    const [isEditing, setIsEditing]= useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const handleDelete =(clickedTitle)=> {
        let workListFiltered =workList.filter((item)=> item!==clickedTitle)
        setWorkList(workListFiltered)
    }
    const handleEdit =() => {
        setIsEditing(true)
    }
    const handleSave=()=> {
        let workListUpdated = workList.map((item)=> (item===title ? newTitle :item));
        setWorkList(workListUpdated)
        setIsEditing(false)
    }
    const handleCancel =() => {
        setNewTitle(title)
        setIsEditing(false)
    }
    const handleChange =(e)=> {
        setNewTitle(e.target.value)
    }
    return (<div className='tile'>
        {isEditing ? (
             <>
            <input type ='text'
            value ={newTitle}
            onChange={handleChange}
            className='titleInput'></input>
            <button onClick={handleSave} className='tileButton saveButton'> save</button>
            <button onClick={handleCancel} className='tileButton cancelButton'> cancel</button>
       </> ):(
        <><p className='titleTitle'>{title}</p>
        <button onClick={handleEdit} className='tileButton editButton'> Edit</button>
        <button onClick={()=> handleDelete(title)} className='titleButton deleteButton'> Delete</button></>
       )}
    </div>)
}
export default WorkTile
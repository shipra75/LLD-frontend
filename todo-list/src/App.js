import { useState } from 'react';
import './App.css';
import WorkTile from './components/WorkTile';
function App() {
  const [title, setTitle] =useState(null)
  const [workList, setWorkList] = useState([])
  const handleSave =()=> {
    setWorkList((prev)=> [...workList, title])
    setTitle('')
  }
  const handleInputChange =(e)=> {
    setTitle((prev)=> e.target.value)
  }
  return (
    <div className="App">
      <input type='text' value={title} onChange={(e)=> handleInputChange(e)}></input>
      <input type='submit' text='Submit' onClick={handleSave}></input>
      {workList.map((item)=> {
        return(
          <WorkTile title={item} workList={workList} setWorkList ={ setWorkList}/>
        )
      })}
    </div>
  );
}

export default App;

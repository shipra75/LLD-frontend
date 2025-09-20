import './App.css';
import useLocalStorage from "./useLocalStorage"

function App() {
  const [count,setCount] = useLocalStorage("count", 0)
  return (
    <div  style={{ display:"grid", placeItems:"center"}}>
      <h1 style ={{color:"green"}}> GeeksForGeeks</h1>
      <h2>useLocalstorage</h2>
      <h4>count-{count}</h4>
     <button onClick={()=> setCount((prevcount)=>prevcount+1)}> Increment</button>

    </div>
  );
}

export default App;

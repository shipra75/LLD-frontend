import './App.css';
import React from "react"
import schema from "./schema"
import FormRenderer from "./FormRenderer";

function App() {
//  const [submittedData, setSubmittedData]= useState(null);
  return (
    <div className="App">
     <FormRenderer schema ={schema}  />
      
    </div>
  );
}

export default App;

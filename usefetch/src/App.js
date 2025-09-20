import './App.css';
import useFetch from './useFetch';

function App() {
  const {data:quote, loading, error } = useFetch(' https://www.youtube.com/shorts/HQiQxG80_sY')
  return (
    <div className="App">
    {loading && <p>{loading}</p>}
    {quote && <p>{quote}</p>}
    {error&& <p>{error}</p>}
    </div>
  );
}

export default App;

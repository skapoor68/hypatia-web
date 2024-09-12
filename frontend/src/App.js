import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://floating-hamlet-57375-16c0be74a380.herokuapp.com/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Data from Flask API:</h1>
      {error ? <p>Error: {error}</p> : null}
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
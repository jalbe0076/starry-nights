import logo from '../../logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import { getPictureOfDay } from '../../apiCalls';

function App() { 
  const [imageOfDay, setImageOfDay] = useState('');
  const [networkError, setNetworkError] = useState(false)

  useEffect(() => {
    (async() => {
      try {
        const data = await getPictureOfDay();
        console.log(data.url)
        setImageOfDay(data.url)
      } catch (error) {
        console.log(error)
        setNetworkError(error.message)
      }
    })();
  }, []);

  return (
    <div className="App">
      {!networkError ? 
        <img src={imageOfDay} className="App-logo" alt="logo" />
        : <h2>{networkError}</h2>
      }
    </div>
  );
}

export default App;

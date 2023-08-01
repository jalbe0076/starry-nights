import './App.scss';
import { useEffect, useState } from 'react';
import { getPictureOfDay, getIncomingNearEarthObjects } from '../../apiCalls';
import IncomingObjects from '../IncomingObjects/IncomingObjects';

function App() { 
  const [imageOfDay, setImageOfDay] = useState('');
  const [networkError, setNetworkError] = useState(false)

  useEffect(() => {
    (async() => {
      try {
        const data = await getPictureOfDay();
        setImageOfDay(data.url)
      } catch (error) {
        handleNetworkErrors(error)
      }
    })();
  }, []);

  const handleNetworkErrors = (error) => {
    setNetworkError(error.message)
  }

  return (
    <div className="App">
      {!networkError ? 
        <main>
          <img src={imageOfDay} className="App-logo" alt="logo" />
          <IncomingObjects handleNetworkErrors={handleNetworkErrors} />
        </main>
        : <h2>{networkError}</h2>
      }
    </div>
  );
}

export default App;

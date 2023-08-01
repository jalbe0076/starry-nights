import './App.scss';
import { useEffect, useState } from 'react';
import { getPictureOfDay, getIncomingNearEarthObjects } from '../../apiCalls';
import IncomingObjects from '../IncomingObjects/IncomingObjects';
import Nav from '../Nav/Nav';
import ImageOfDay from '../ImageOfDay/ImageOfDay';

function App() { 
  const [networkError, setNetworkError] = useState(false)

  const handleNetworkErrors = (error) => {
    setNetworkError(error.message)
  }

  return (
    <div className="app">
      {!networkError ? 
        <>
          <Nav />
          <main>
            <ImageOfDay handleNetworkErrors={handleNetworkErrors} />
            <IncomingObjects handleNetworkErrors={handleNetworkErrors} />
          </main>
        </>
        : <h2>{networkError}</h2>
      }
    </div>
  );
}

export default App;

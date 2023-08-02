import './App.scss';
import { useEffect, useState } from 'react';
import { getPictureOfDay, getIncomingNearEarthObjects } from '../../apiCalls';
import IncomingObjects from '../IncomingObjects/IncomingObjects';
import Nav from '../Nav/Nav';
import EventDetails from '../EventDetails/EventDetails';
import ImageOfDay from '../ImageOfDay/ImageOfDay';
import { Routes, Route } from 'react-router-dom'

function App() { 
  const [networkError, setNetworkError] = useState(false);
  const [eventDetails, setEventDetails] = useState();

  const handleNetworkErrors = (error) => {
    setNetworkError(error.message)
  }

  const handleEvent = (data) => {
    (async() => {
      await setEventDetails(data);
    })()
    console.log(eventDetails)
  }

  return (
    <div className="app">
      <Nav />
      {!networkError ? 
        <main>
          <Routes>
            <Route path='/' element={<ImageOfDay handleNetworkErrors={handleNetworkErrors}/>} />
            <Route path='stargazing-events' element={<IncomingObjects handleEvent={handleEvent} handleNetworkErrors={handleNetworkErrors} />} />
            <Route path='stargazing-events/:jd/:des' element={eventDetails && <EventDetails eventDetails={eventDetails} handleNetworkErrors={handleNetworkErrors} />} />
          </Routes>
        </main>
        : <h2>{networkError}</h2>
      }
    </div>
  );
}

export default App;

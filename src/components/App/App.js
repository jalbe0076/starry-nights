import './App.scss';
import { useState } from 'react';
import IncomingObjects from '../IncomingObjects/IncomingObjects';
import Nav from '../Nav/Nav';
import SavedEvents from '../SavedEvents/SavedEvents';
import EventDetails from '../EventDetails/EventDetails';
import ImageOfDay from '../ImageOfDay/ImageOfDay';
import { Routes, Route } from 'react-router-dom';

function App() { 
  const [networkError, setNetworkError] = useState(false);
  const [eventDetails, setEventDetails] = useState();
  const [savedEvents, setSavedEvents] = useState([]);

  const handleNetworkErrors = (error) => {
    setNetworkError(error.message)
  }

  const handleEvent = (data) => {
      setEventDetails(data);
  }

  const addToSavedEvents = (newEvent) => {
    setSavedEvents(newEvent)
  }

  return (
    <div className="app">
      <Nav />
      {!networkError ? 
        <main>
          <Routes>
            <Route path='/' element={<ImageOfDay handleNetworkErrors={handleNetworkErrors}/>} />
            <Route path='stargazing-events' element={<IncomingObjects handleEvent={handleEvent} handleNetworkErrors={handleNetworkErrors} />} />
            <Route path='saved-events' element={<SavedEvents handleNetworkErrors={handleNetworkErrors} savedEvents={savedEvents} />} />
            <Route path='stargazing-events/:jd/:des' element={eventDetails && <EventDetails eventDetails={eventDetails} addToSavedEvents={addToSavedEvents} />} />
            {/* <Route path='*' /> */}
          </Routes>
        </main>
        : <h2>{networkError}</h2>
      }
    </div>
  );
}

export default App;

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

  const handleEventList = (data) => {
      setEventDetails(data);
  }

  const addToSavedEvents = (newEvent) => {
    const searchIfSaved = savedEvents.find(event => event[3] === newEvent[3] && event[0] === newEvent[0]);
    !searchIfSaved && setSavedEvents(prevEvents => [...prevEvents, newEvent]);
  }

  const deleteSavedEvent = (removeEvent) => {
    setSavedEvents(prevEvents => prevEvents.filter(event => event[3] !== removeEvent[3] && event[0] !== removeEvent[0]));
  }

  return (
    <div className="app">
      <Nav />
      {!networkError ? 
        <main>
          <Routes>
            <Route path='/' element={<ImageOfDay handleNetworkErrors={handleNetworkErrors}/>} />
            <Route path='stargazing-events' element={<IncomingObjects handleEventList={handleEventList} handleNetworkErrors={handleNetworkErrors} />} />
            <Route path='saved-events' element={<SavedEvents handleEventList={handleEventList} savedEvents={savedEvents} />} />
            <Route path='stargazing-events/:jd/:des' element={eventDetails && <EventDetails eventDetails={eventDetails} addToSavedEvents={addToSavedEvents} deleteSavedEvent={deleteSavedEvent} savedEvents={savedEvents} />} />
            {/* <Route path='*' /> */}
          </Routes>
        </main>
        : <h2>{networkError}</h2>
      }
    </div>
  );
}

export default App;

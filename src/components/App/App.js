import './App.scss';
import { useState } from 'react';
import IncomingObjects from '../IncomingObjects/IncomingObjects';
import Nav from '../Nav/Nav';
import SavedEvents from '../SavedEvents/SavedEvents';
import EventDetails from '../EventDetails/EventDetails';
import BadPath from '../Bad-path/BadPath';
import ImageOfDay from '../ImageOfDay/ImageOfDay';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() { 
  const [networkError, setNetworkError] = useState(false);
  const [eventDetails, setEventDetails] = useState();
  const [savedEvents, setSavedEvents] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleLoading = () => {
    setLoading(current => !current);
  }

  return (
    <div className="app">
      <Nav />
      {!networkError ? 
        <main>
          {loading && <div className='loading-container'><span className='loading'></span></div>}
          <Routes>
            <Route path='/' element={<ImageOfDay handleNetworkErrors={handleNetworkErrors} handleLoading={handleLoading} loading={loading} />} />
            <Route path='stargazing-events' element={<IncomingObjects handleEventList={handleEventList} handleNetworkErrors={handleNetworkErrors} handleLoading={handleLoading} />} />
            <Route path='saved-events' element={<SavedEvents handleEventList={handleEventList} savedEvents={savedEvents} deleteSavedEvent={deleteSavedEvent} />} />
            <Route path='stargazing-events/:jd/:des' element={eventDetails && <EventDetails eventDetails={eventDetails} addToSavedEvents={addToSavedEvents} deleteSavedEvent={deleteSavedEvent} savedEvents={savedEvents} />} />
            <Route path='*' element={<BadPath />} />
          </Routes>
          <ToastContainer 
            position="bottom-center"
            autoClose={3000}
            theme="dark" 
          />
        </main>
        : <h2>{networkError}</h2>
      }
    </div>
  );
}

export default App;

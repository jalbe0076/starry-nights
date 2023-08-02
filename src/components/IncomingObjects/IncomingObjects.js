import './IncomingObjects.scss';
import { getIncomingNearEarthObjects } from '../../apiCalls';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EventList from '../EventList/EventList';

const IncomingObjects = ({ handleNetworkErrors }) => {
  const [incomingObjects, setIncomingObjects] = useState([]);
  const [expandedInfo, setExpandedInfo] = useState(true);
  
  useEffect(() => {
    (async() => {
      try {
        const futureDate = setFutureDate();
        const data = await getIncomingNearEarthObjects(futureDate)
        console.log('incoming', data)
        setIncomingObjects({fields: data.fields, data: data.data})
      } catch (error) {
        handleNetworkErrors(error);
      }
    })();
  }, []);

  const objectEventList = incomingObjects.data && incomingObjects.data.map((event, i) => {
    return (
      <EventList data={event} key={i} id={i} />
    );
  });


  const setFutureDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + 60)
    return date.toLocaleDateString('en-CA');
  }

  const handleExpandInfo = () => {
    setExpandedInfo(current => !current)
  }

  return(
    <section className='general-container'>
      <h2 className='events-subtitle'>Celestial Appointments</h2>
      <p className='list-action'>Mark your cosmic calendar!</p>
      <p className='list-explanation' >Get ready for upcoming celestial close approaches, click on any event to get more information. </p>
    
      
      <div className='upcoming-container'>
        <p className='upcoming-item list-leader'>Date & Time</p>  
        <p className='upcoming-item list-leader'>Designation</p>
      </div>
        {objectEventList}
    </section>
  );
};

export default IncomingObjects;

IncomingObjects.propTypes = {
  handleNetworkErrors: PropTypes.func.isRequired
}

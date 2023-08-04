import './IncomingObjects.scss';
import { getIncomingNearEarthObjects } from '../../apiCalls';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EventList from '../EventList/EventList';
import { nanoid } from 'nanoid';

const IncomingObjects = ({ handleNetworkErrors, handleEventList, handleLoading, loading }) => {
  const [incomingObjects, setIncomingObjects] = useState([]);
  
  useEffect(() => {
    (async() => {
      try {
        handleLoading()
        const futureDate = setFutureDate();
        const data = await getIncomingNearEarthObjects(futureDate)
        setIncomingObjects({fields: data.fields, data: data.data})
        data && handleLoading();
      } catch (error) {
        handleNetworkErrors(error);
      }
    })();
  }, []);

  const objectEventList = incomingObjects.data && incomingObjects.data.map((event) => {
    const id = nanoid();
    return (
      <EventList handleEventList={handleEventList} data={event} key={id} id={id} />
    );
  });


  const setFutureDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + 60)
    return date.toLocaleDateString('en-CA');
  }

  return(
    <>
      {!loading && (<section className='general-container'>
        <h2 className='events-subtitle'>Upcoming Celestial Events</h2>
        <p className='list-action'>Mark your cosmic calendar!</p>
        <p className='list-explanation' >Get ready for upcoming celestial close approaches, click on any event to get more information. </p>
        <div className='upcoming-container'>
          <p className='upcoming-item list-leader'>Date & Time</p>  
          <p className='upcoming-item list-leader'>Designation</p>
        </div>
          {objectEventList}
      </section>)}
    </>
  );
};

export default IncomingObjects;

IncomingObjects.propTypes = {
  handleNetworkErrors: PropTypes.func.isRequired,
  handleEventList: PropTypes.func.isRequired
}

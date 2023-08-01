import './IncomingObjects.scss';
import { getIncomingNearEarthObjects } from '../../apiCalls';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EventList from '../EventList/EventList';

const IncomingObjects = ({ handleNetworkErrors }) => {
  const [incomingObjects, setIncomingObjects] = useState([]);
  
  useEffect(() => {
    (async() => {
      try {
        const futureDate = setFutureDate();
        const data = await await getIncomingNearEarthObjects(futureDate)
        console.log('incoming', data)
        setIncomingObjects(data.data)
      } catch (error) {
        handleNetworkErrors(error)
      }
    })();
  }, []);

  

  const setFutureDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + 60)
    return date.toLocaleDateString('en-CA');
  }

  return(
    <>
    </>
  );
};

export default IncomingObjects;

IncomingObjects.propTypes = {
  handleNetworkErrors: PropTypes.func.isRequired
}

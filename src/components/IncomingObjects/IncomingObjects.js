import './IncomingObjects.scss';
import { getIncomingNearEarthObjects } from '../../apiCalls';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const IncomingObjects = ({ handleNetworkErrors }) => {
  
  useEffect(() => {
    (async() => {
      try {
        const futureDate = setFutureDate();
        const data = await await getIncomingNearEarthObjects(futureDate)
        console.log(data)
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
  setFutureDate: PropTypes.func.isRequired
}

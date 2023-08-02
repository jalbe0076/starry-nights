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

  const objectEventList = incomingObjects.map(event => {
    return (
      <EventList fields={event.fields} data={event.data} />
    );
  });

  const setFutureDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + 60)
    return date.toLocaleDateString('en-CA');
  }

  return(
    <>
    <h2 className='events-subtitle'>Remember, patience and curiosity are the key to experiencing the wonders of the cosmos. Happy stargazing!</h2>
    <button className='display-info-btn'>UNDERSTAND THE DATA<img src={process.env.PUBLIC_URL + '/images/chevron-expand.png'} className='icons'/></button>
    <section className='info-container'>
      <li>
        <ol><span className='list-leader'>Designation (des): </span>This is the name or designation of the celestial object, often the asteroid's name. It's a unique identifier, helping you keep track of different objects.</ol>
        <ol><span className='list-leader'>Orbit ID:</span>Each object has a unique orbit ID associated with its trajectory in space. This ID aids in studying its path and movement.</ol>
        <ol><span className='list-leader'>Julian Date (jd):</span>The Julian date represents the date and time of the close approach event in numerical form. You can convert it to a human-readable format to know when the event will happen.</ol>
        <ol><span className='list-leader'>Date (cd): </span>This is the human-readable date and time of the close approach event. It allows you to easily identify when the asteroid will pass close to Earth.</ol>
        <ol><span className='list-leader'>Distance from Earth (dist):</span>The distance between the asteroid and Earth during the close approach event. It is measured in astronomical units (AU), where 1 AU is the average distance from Earth to the Sun (about 93 million miles or 150 million kilometers).</ol>
        <ol><span className='list-leader'>Minimum Distance (dist_min) and Maximum Distance (dist_max):</span>These represent the closest and farthest distances of the asteroid from Earth during the close approach event. Both values are in astronomical units (AU).</ol>
        <ol><span className='list-leader'>Relative Velocity (v_rel): </span>The speed at which the asteroid moves relative to Earth during the close approach. It is measured in kilometers per second (km/s).</ol>
        <ol><span className='list-leader'>Relative Velocity at Infinity (v_inf):</span>This indicates the relative speed of the asteroid concerning Earth when it is very far away. Also measured in kilometers per second (km/s).</ol>
        <ol><span className='list-leader'>Time Uncertainty (t_sigma_f): </span>This provides the time duration uncertainty of the close approach event. It tells you the range of possible times for the event.</ol>
        <ol><span className='list-leader'>Absolute Magnitude (h):</span>The absolute magnitude of the object indicates its brightness. A lower value usually means a brighter object. Though it lacks a specific unit, it is measured on the absolute magnitude scale.</ol>       
      </li>
    </section>
    </>
  );
};

export default IncomingObjects;

IncomingObjects.propTypes = {
  handleNetworkErrors: PropTypes.func.isRequired
}

import './EventDetails.scss';
import { useState } from 'react';

const EventDetails = ({ eventDetails }) => {
  const [expandedInfo, setExpandedInfo] = useState(true);
  const handleExpandInfo = () => {
    setExpandedInfo(current => !current)
  }

  return (
    <section className='general-container'>
      <h2 className='events-subtitle'>Remember, patience and curiosity are the key to experiencing the wonders of the cosmos. Happy stargazing!</h2>
      <button className='display-info-btn' onClick={() => handleExpandInfo()}>UNDERSTAND THE DATA
        {expandedInfo ? <img src={process.env.PUBLIC_URL + '/images/chevron-expand.png'} className='icons'/>
        : <img src={process.env.PUBLIC_URL + '/images/chevron-expand-less.png'} className='icons'/>}
      </button>
      <div className={`info-container ${expandedInfo && 'expanded-closed'}`}>
        <ol className='info-list'>
          <li><span className='list-leader'>Designation (des): </span><br/>This is the name or designation of the celestial object, often the asteroid's name. It's a unique identifier, helping you keep track of different objects.</li>
          <li><span className='list-leader'>Orbit ID:</span><br/>Each object has a unique orbit ID associated with its trajectory in space. This ID aids in studying its path and movement.</li>
          <li><span className='list-leader'>Date (cd): </span><br/>This is the human-readable date and time of the close approach event. It allows you to easily identify when the asteroid will pass close to Earth.</li>
          <li><span className='list-leader'>Distance from Earth (dist): </span><br/>The distance between the asteroid and Earth during the close approach event. It is measured in astronomical units (AU), where 1 AU is the average distance from Earth to the Sun (about 93 million miles or 150 million kilometers).</li>
          <li><span className='list-leader'>Minimum Distance (dist_min) and Maximum Distance (dist_max):</span><br/>These represent the closest and farthest distances of the asteroid from Earth during the close approach event. Both values are in astronomical units (AU).</li>
          <li><span className='list-leader'>Relative Velocity (v_rel): </span><br/>The speed at which the asteroid moves relative to Earth during the close approach. It is measured in kilometers per second (km/s).</li>
          <li><span className='list-leader'>Relative Velocity at Infinity (v_inf): </span><br/>This indicates the relative speed of the asteroid concerning Earth when it is very far away. Also measured in kilometers per second (km/s).</li>
          <li><span className='list-leader'>Time Uncertainty (t_sigma_f): </span><br/>This provides the time duration uncertainty of the close approach event. It tells you the range of possible times for the event.</li>
          <li><span className='list-leader'>Absolute Magnitude (h): </span><br/>The absolute magnitude of the object indicates its brightness. A lower value usually means a brighter object. Though it lacks a specific unit, it is measured on the absolute magnitude scale.</li>       
        </ol>
      </div>
        <h3 className='description'>{eventDetails[0]}</h3>
      <article className='event-details'>
        <ol className='info-list'>
            <ul className='info-details'><span className='list-leader'>Date of Event: </span><p></p>{eventDetails[3]}</ul>
            <ul className='info-details'><span className='list-leader'>Orbit ID: </span>{eventDetails[1]}</ul>
            <ul className='info-details'><span className='list-leader'>Distance from Earth: </span>{eventDetails[4]} AU</ul>
            <ul className='info-details'><span className='list-leader'>Minimum Distance: </span>{eventDetails[5]} AU</ul>
            <ul className='info-details'><span className='list-leader'>Maximum Distance: </span>{eventDetails[6]} AU</ul>
            <ul className='info-details'><span className='list-leader'>Relative Velocity: </span>{eventDetails[7]} km/s</ul>
            <ul className='info-details'><span className='list-leader'>Relative Velocity at Infinity: </span>{eventDetails[8]} km/s</ul>
            <ul className='info-details'><span className='list-leader'>Time Uncertainty: </span>{eventDetails[9]}</ul>
            <ul className='info-details'><span className='list-leader'>Absolute Magnitude: </span>{eventDetails[10]}</ul>       
          </ol>
      </article>
    </section>
  )
}

export default EventDetails;
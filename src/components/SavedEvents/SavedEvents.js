import EventList from '../EventList/EventList';
import './SavedEvents.scss';
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

const SavedEvents = ({ savedEvents, handleEventList }) => {

  const savedEventList = savedEvents.map((event) => {
    const id = nanoid();
    return (
      <div className='delete-container'>
      <button className='delete-event-btn'><img className='delete-icon' src={process.env.PUBLIC_URL + '/images/close-icon.png'} /> </button>
      <EventList handleEventList={handleEventList} data={event} key={id} id={id} />
      </div>
    );
  });

  return (
    <section className='general-container'>
      <h2 className='events-subtitle'>Celestial Appointments</h2>
      <p className='saved-subtitle' >Get ready for upcoming celestial close approaches, click on any event to get more information. </p>
      <div className='saved-upcoming'>
        <p className='list-leader'>Date,Time & Designation</p>  
      </div>
      <div className='saved-events-container'>
      {savedEventList}
      </div>
    </section>
  )
};

export default SavedEvents;

SavedEvents.propTypes = {
  savedEvents: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleEventList: PropTypes.func.isRequired
}
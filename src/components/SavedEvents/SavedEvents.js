import EventList from '../EventList/EventList';
import './SavedEvents.scss';
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

const SavedEvents = ({ savedEvents, handleEventList }) => {

  console.log(savedEvents)

  const savedEventList = savedEvents.map((event) => {
    const id = nanoid();
    return (
      <EventList handleEventList={handleEventList} data={event} key={id} id={id} />
    );
  });

  return (
    <section className='general-container'>
      <h2 className='events-subtitle'>Celestial Appointments</h2>
      <p className='saved-subtitle' >Get ready for upcoming celestial close approaches, click on any event to get more information. </p>
      <div className='upcoming-container'>
        <p className='upcoming-item list-leader'>Date & Time</p>  
        <p className='upcoming-item list-leader'>Designation</p>
      </div>
      {savedEventList}
    </section>
  )
};

export default SavedEvents;

SavedEvents.propTypes = {
  savedEvents: PropTypes.arrayOf(PropTypes.array).isRequired,
  handleEventList: PropTypes.func.isRequired
}
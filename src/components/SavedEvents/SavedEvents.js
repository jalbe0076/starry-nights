import './SavedEvents.scss';
import PropTypes from 'prop-types'

const SavedEvents = ({ savedEvents }) => {

  return (
    <section className='general-container'>
      <h2 className='events-subtitle'>Celestial Appointments</h2>
      <p className='saved-subtitle' >Get ready for upcoming celestial close approaches, click on any event to get more information. </p>
      <div className='upcoming-container'>
        <p className='upcoming-item list-leader'>Date & Time</p>  
        <p className='upcoming-item list-leader'>Designation</p>
      </div>
      {savedEvents}
    </section>
  )
};

export default SavedEvents;

SavedEvents.propTypes = {
  savedEvents: PropTypes.arrayOf(PropTypes.string).isRequired
}
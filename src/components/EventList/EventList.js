import './EventList.scss';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventList = ({data, handleEventList}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    handleEventList(data);
    navigate(`/stargazing-events/${data[2]}/${data[0]}`)
  }

  return (
   <button  className='upcoming-container upcoming-container-selectable' onClick={(() => handleClick())}> 
      <p className='upcoming-item'>
        <span className='hover-colour-join saved-event-style' >{data[3].split(' ')[0]}</span>
        <br />
        <span className='hover-colour-join saved-event-style'>{data[3].split(' ')[1]}</span>
      </p>
      <p className='upcoming-item hover-colour-join'>{data[0]}</p>
  </button>
  )
}

export default EventList;

EventList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEventList: PropTypes.func.isRequired
}

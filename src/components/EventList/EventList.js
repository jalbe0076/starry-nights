import './EventList.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import EventDetails from '../EventDetails/EventDetails';

const EventList = ({data, handleEvent}) => {
  const navigate = useNavigate();


  const handleClick = () => {
    // console.log(id)
    console.log('my data goes in', data)
    handleEvent(data);
    navigate(`/stargazing-events/${data[2]}/${data[0]}`)
  }


  return (
   <div className='upcoming-container upcoming-container-selectable' onClick={(() => handleClick())}> 
      <p className='upcoming-item'>
        <span className='hover-colour-join' >{data[3].split(' ')[0]}</span>
        <br />
        <span className='hover-colour-join'>{data[3].split(' ')[1]}</span>
      </p>
      <p className='upcoming-item hover-colour-join'>{data[0]}</p>
  </div>
  )
}

export default EventList;

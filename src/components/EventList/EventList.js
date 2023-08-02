import './EventList.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const EventList = ({data, id}) => {
  const navigate = useNavigate();
  // console.log('FIlds', fields)
  // console.log('DATA', data)

  const handleClick = () => {
    console.log(id)
    navigate(`/stargazing-events/${id}`)
  }

  return (
   <div className='upcoming-container upcoming-container-selectable' onClick={(() => handleClick())}> 
    {/* <a href='#'> */}
      <p className='upcoming-item'>
        <span className='hover-colour-join' >{data[3].split(' ')[0]}</span>
        <br />
        <span className='hover-colour-join'>{data[3].split(' ')[1]}</span>
      </p>
    {/* </a> */}
    {/* <a href='#'> */}
      <p className='upcoming-item hover-colour-join'>{data[0]}</p>
    {/* </a> */}
  </div>
  )
}

export default EventList;
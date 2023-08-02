import './EventList.scss';
import { useState } from 'react';

const EventList = ({data}) => {
  
  // console.log('FIlds', fields)
  console.log('DATA', data)

  return (
    <div className='upcoming-container'>
    <p className='upcoming-item'>
      <span>{data[3].split(' ')[0]}</span>
      <br />
      <span>{data[3].split(' ')[1]}</span>  
    </p>
    <p className='upcoming-item'>{data[0]}</p>
  </div>
  )
}

export default EventList;
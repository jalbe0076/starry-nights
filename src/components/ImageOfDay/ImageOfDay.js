import './ImageOfDay';
import { useEffect, useState } from 'react';
import { getPictureOfDay } from '../../apiCalls';
import PropTypes from 'prop-types'

const ImageOfDay = ({handleNetworkErrors}) => {
  const [imageOfDay, setImageOfDay] = useState({
    url: '',
    title: '',
    explanation: ''
  });

  useEffect(() => {
    (async() => {
      try {
        const data = await getPictureOfDay();
        setImageOfDay(data)
      } catch (error) {
        handleNetworkErrors(error)
      }
    })();
  }, []);

  return (
    <section className='image-of-day-container'>
      <h2 className='image-of-day-title'>{imageOfDay.title}</h2>
      <img src={imageOfDay.url} className="image-of-day" alt={imageOfDay.title} />
      <p className='image-of-day-description'>{imageOfDay.explanation}</p>
    </section>  
  );
}

export default ImageOfDay;

ImageOfDay.propTypes = {
  handleNetworkErrors: PropTypes.func.isRequired
}

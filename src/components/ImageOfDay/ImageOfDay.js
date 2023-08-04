import './ImageOfDay.scss';
import { useEffect, useState } from 'react';
import { getPictureOfDay } from '../../apiCalls';
import PropTypes from 'prop-types';

const ImageOfDay = ({ handleNetworkErrors, handleLoading, loading }) => {
  const [imageOfDay, setImageOfDay] = useState({});

  useEffect(() => {
    (async() => {
      try {
        handleLoading()
        const data = await getPictureOfDay();
        setImageOfDay(data);
        data && handleLoading();
      } catch (error) {
        handleNetworkErrors(error);
      }
    })();
  }, []);

  return (
    <>
      {!loading && (
      <section className='general-container'>
        <h2 className='image-of-day-title'>{imageOfDay.title}</h2>
        <img src={imageOfDay.url} className="image-of-day" alt={imageOfDay.title} />
        <p className='image-of-day-description'>{imageOfDay.explanation}</p>
      </section>)}
    </>
  );
}

export default ImageOfDay;

ImageOfDay.propTypes = {
  handleNetworkErrors: PropTypes.func.isRequired
}

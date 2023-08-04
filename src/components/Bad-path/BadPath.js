import './BadPath.scss';

const BadPath = () => {
  return(
    <div className='bad-img-container'>
      <h2>LOST IN SPACE</h2>
      <div className="image-wrapper">
        <img className="bad-image" src={process.env.PUBLIC_URL + `/images/galaxies.jpg`} alt='9 different galaxies visible before you' />
      </div>
    </div>
  )
};

export default BadPath;
 
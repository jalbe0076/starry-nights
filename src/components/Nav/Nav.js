import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
      <nav >
        <section className='banner-container' id='stick'>
          <NavLink to='/' className='title'><h1>STARRY NIGHTS</h1></NavLink> 
          <div className='nav-tabs'>
            <NavLink to='/stargazing-events' className='nav-links'>STARGAZING EVENTS</NavLink>
            <NavLink to='/saved-events' className='nav-links'>SAVED EVENTS</NavLink>
          </div>
          <img src={process.env.PUBLIC_URL + '/images/user-icon.png'} className='icons' />
        </section>
      </nav>
  );
}

export default Nav;

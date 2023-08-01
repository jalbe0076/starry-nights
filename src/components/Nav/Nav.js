import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
      <nav >
        <section className='nav-container'>
          <NavLink to='/' className='title'><h1>STARRY NIGHTS</h1></NavLink> 
          <div className='nav-tabs'>
            <NavLink to='/stargazing-events' className='nav-links' >STARGAZING EVENTS</NavLink>
            <NavLink to='/saved-events' className='nav-links' >SAVED EVENTS</NavLink>
          </div>
        </section>
      </nav>
  );
}

export default Nav;
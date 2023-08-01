import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <h1 className='title'>STARRY NIGHTS</h1>
      <nav >
        <NavLink to='/stargazing-events' className='nav--links' >STARGAZING EVENTS</NavLink>
        <NavLink to='/stargazing-events' className='nav--links' >SAVED EVENTS</NavLink>
      </nav>
    </header>
  );
}

export default Nav;
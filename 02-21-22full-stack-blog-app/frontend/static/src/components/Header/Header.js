import { Navigate, NavLink } from 'react-router-dom';

function Header(props) {
  const handleLogout = (e) => {
    // implement logout logic
    props.navigate('/login');
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <button type="button">Logout</button>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
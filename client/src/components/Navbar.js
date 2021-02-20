
import { Link } from "react-router-dom";
import {useContext} from 'react';
import { AuthContext } from '../context/authContext';
import authService from '../services/authService';

const Navbar = () => {

  const { user, setUser, authenticated, setAuthenticated } = useContext(AuthContext)

  const logout = () => {
    authService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setAuthenticated(false);
      }
    })
  }

  const unAuthenticatedNav = () => {
    return (
        <div>
          <ul className="nav">
            <li className="nav-item p-2">
              <Link className="nav-link active" to="/register"> Register</Link>
          </li>
          <li className="nav-item p-2">
              <Link className="nav-link active" to="/login"> Login</Link>
          </li>
          </ul>
        </div>
    )
  }

  const authenticatedNav = () => {
    return (
      <div>
        <ul className="nav">
        <li className="nav-item p-2">
          <p>Welcome, {user.username} </p>
        </li>
          <li className="nav-item p-2">
              <button className="btn btn-link nav-item nav-link" onClick={logout}> Logout</button>
          </li>
          </ul>
        </div>
    )
  }

  const adminNav = () => {
    return (
      <div>
        <li className="nav-item p-2">
          <a href="/" > Admin Panel</a>
        </li>
      </div>
    )
  }
  user && console.log('Navbar test', user);

  return ( 
    <nav className="d-flex justify-content-between">
        <div>
            <ul className="nav">
              <li className="nav-item p-2">
                <Link className="nav-link active" to="/"> Home</Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/about">About</Link>
          </li>
          {user && user.role === "admin" ? adminNav() : null }
            </ul>
      </div>
      {authenticated ? authenticatedNav() : unAuthenticatedNav() }
    </nav>
   );
}
 
export default Navbar;
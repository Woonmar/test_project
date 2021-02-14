
import { Link } from "react-router-dom";

const Navbar = () => {

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
            </ul>
        </div>
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
    </nav>
   );
}
 
export default Navbar;
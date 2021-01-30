
import { Link } from "react-router-dom";

const Navbar = () => {

  return ( 
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/"> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:8000"> Admin site </a>
        </li>
      </ul>
    </div>
   );
}
 
export default Navbar;
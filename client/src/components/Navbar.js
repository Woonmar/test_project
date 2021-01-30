
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
      </ul>
    </div>
   );
}
 
export default Navbar;
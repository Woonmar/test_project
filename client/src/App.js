import { useContext } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogDetails from "./components/blogDetails";
import BlogsList from "./components/BlogsList";
import Navbar from "./components/Navbar";
import About from "./screens/about";
import Login from "./screens/login";
import Register from "./screens/register"
import {AuthContext} from './context/authContext'

function App() {
  const { user, setUser, authenticated, setAuthenticated } = useContext(AuthContext);
  console.log(user);
  console.log(authenticated);
  return (
    <Router>
      <Navbar></Navbar>

      <div className="container">
        <Switch>
          <Route exact path="/" component={BlogsList} />
          <Route exact path="/about" component={About} />
          <Route path="/blog/:id" component={BlogDetails} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

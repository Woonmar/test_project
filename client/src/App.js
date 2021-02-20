import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogDetails from "./components/blogDetails";
import BlogsList from "./components/BlogsList";
import Navbar from "./components/Navbar";
import About from "./screens/about";
import Login from "./screens/login";
import Register from "./screens/register"
import PrivateRoute from './hocs/privateRoute'
import UnPrivateRoute from "./hocs/unprivateRoute";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={BlogsList} />
          <Route path="/blog/:id" component={BlogDetails} />
          <UnPrivateRoute path="/register" component={Register} />
          <UnPrivateRoute path="/login" component={Login} />
          <PrivateRoute path="/about" roles={['user', 'admin']} component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

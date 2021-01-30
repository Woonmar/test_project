
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogDetails from "./components/blogDetails";
import BlogsList from "./components/BlogsList";
import Navbar from "./components/Navbar";
import About from "./screens/about";

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <div className="container">
      <Switch>
        <Route exact path="/">
          <BlogsList></BlogsList>
        </Route>
        <Route exact path="/about" >
          <About></About>
        </Route>
        <Route path="/blog/:id">
          <BlogDetails></BlogDetails>
        </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;

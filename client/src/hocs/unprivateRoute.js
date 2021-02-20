import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const UnPrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);
  return ( 
    <Route {...rest} render={props => {
      if (authenticated) 
        return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      return <Component {...props} />
    }} />
  )
}

export default UnPrivateRoute;
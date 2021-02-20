import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { authenticated, user } = useContext(AuthContext);
  return ( 
    <Route {...rest} render={props => {
      if (!authenticated) 
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      if (!roles.includes(user.role))
        return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      return <Component {...props} />
    }} />
  )
}

export default PrivateRoute;
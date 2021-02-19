import {createContext, useState, useEffect} from 'react'
import authService from '../services/authService';

export const AuthContext = createContext();

const Auth = ({children}) => {
  const [user, setUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    authService.isAuthenticated().then(data => {
      setUser(data.user);
      setAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    })
  }, []);
  
  return (
    <div>
      {!isLoaded ? <h1>Loading...</h1> : 
        <AuthContext.Provider value={{ user, setUser, authenticated, setAuthenticated }}> 
          {children}
        </AuthContext.Provider>
       }
    </div>
  )

}
export default Auth;
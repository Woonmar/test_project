import { useState } from "react";
import authService from '../services/authService';

const Login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const login = (e) => {
    e.preventDefault()
    const user = {username, password}
    authService.login(user)
  }

  return ( 
    <div>
      <form onSubmit={login} className="form-group">
        <label htmlFor="username"> Username </label>
        <input type="text" name="username" className="form-control" onChange={(e)=> setUsername(e.target.value) }/>
        
        <label htmlFor="">Password</label>
        <input type="password" name="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn btn-primary btn-block mt-4">Login</button>
      </form>

    </div>
   );
}
 
export default Login;
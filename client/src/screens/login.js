import { useEffect, useState } from "react";
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const login = (e) => {
    e.preventDefault()
    const user = {username, password}
    axios.post('user/login', user, {withCredentials:true})
      .then(() => window.location.replace("/"))
  }

  return ( 
    <div>
      <form onSubmit={login} className="form-group">
        <label htmlFor=""> Username </label>
        <input type="text" name="username" className="form-control" onChange={(e)=> setUsername(e.target.value) }/>
        
        <label htmlFor="">Password</label>
        <input type="password" name="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn btn-primary btn-block mt-4">Login</button>
      </form>

    </div>
   );
}
 
export default Login;
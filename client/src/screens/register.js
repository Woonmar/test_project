import { useState } from "react";
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  const register = (e) => {
    e.preventDefault()
    const user = {username, password, email, role}
    axios.post('user/register', user, {withCredentials:true})
      .then((result) => console.log(result))
  }

  return ( 
    <div>
      <form onSubmit={register} className="form-group">
        <label htmlFor=""> Username </label>
        <input type="text" name="username" className="form-control" onChange={(e)=> setUsername(e.target.value) }/>

        <label htmlFor=""> Email </label>
        <input type="text" name="email" className="form-control" onChange={(e)=> setEmail(e.target.value) }/>

        <label htmlFor=""> Role </label>
        <input type="text" name="email" className="form-control" onChange={(e)=> setRole(e.target.value) }/>
        
        <label htmlFor="">Password</label>
        <input type="password" name="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn btn-primary btn-block mt-4">Register</button>
      </form>
    </div>
   );
}
 
export default Register;
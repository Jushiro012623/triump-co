import React, {useState} from 'react'
import { GoEye,GoEyeClosed  } from "react-icons/go";
import { Link } from 'react-router-dom';
import axios from 'axios'

function Login() {
  const [isHidden, setIsHidden] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handlePassword = () => {
    setIsHidden(!isHidden)
  } 
  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:8800/user', {email, password})
    .then(res => {
        console.log("Success")
    })
    .catch(err => console.log("Failed"))

}

  return (
    <div className='login-create'>
        <h1>login</h1>
        <form onSubmit={handleSubmit} className="form-wrapper">
            <label htmlFor="">email</label>
            <div>
              <input type="email"  onChange={e => setEmail(e.target.value)}/>
            </div>
            <label htmlFor="">password</label>
            <div className='pass-area'>
              <input type={isHidden ? 'text' : 'password'} required onChange={e => setPassword(e.target.value)}/>

              {
                isHidden ? <GoEye onClick={handlePassword} /> : <GoEyeClosed onClick={handlePassword} />
              }
            </div>
            <div className='forgot-area'>
              <Link >forgot password?</Link>
            </div>
            <button type='submit' className='login-area'>login</button>
            <Link to='/signup' className='create-area'>create account</Link>
        </form>
    </div>
  )
}

export default Login
import React, {useState, useRef} from 'react'
import { GoEye,GoEyeClosed  } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

import { AiOutlineLoading } from "react-icons/ai";
function Login() {

  const navigate = useNavigate();

  const [forgot, setForgot] = useState()
  const [isHidden, setIsHidden] = useState();
  const [user_pass, setPassword] = useState();
  const [email, setEmail] = useState();
  const [user_name, setUserName] = useState();
  const emailRef = useRef(null);
  const [success, setSuceess] = useState(false)


  const handlePassword = () => {
    setIsHidden(!isHidden)
  } 
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:8800/user_info', {email, user_name, user_pass})
    .then(res => {
      setForgot(false);
      setSuceess(true)
        setTimeout(() => {
            navigate('/profile');
        }, 1000);
    })
    .catch(err => {
      emailRef.current.focus();
      console.log("Failed to connect", err);
      setForgot(true);
    })

  }
  const handleChange =(e) => {
    setUserName(e.target.value)
    setEmail(e.target.value)
    setForgot(false);
  }

  return (
    <div className='login-create'>
        <h1>login</h1>
        <form onSubmit={handleSubmit} className="form-wrapper">
            <span>email</span>
            <div>
              <input id='email' ref={emailRef} 
                     type="text"  
                     onChange={handleChange} 
                     autoComplete='on'
              />
            </div>
            <span>password</span>
            <div className='pass-area'>
              <input id='password' 
                     type={isHidden ? 'text' : 'password'}  
                     required onChange={(e) => {setForgot(false);setPassword(e.target.value)}}
              />
              {isHidden ? 
                    <GoEye onClick={handlePassword} /> : 
                    <GoEyeClosed onClick={handlePassword} />
              }
              {forgot && 
                <p className='invalid'>Invalid Credential</p>
              }
            </div>
            <div className='forgot-area'>
              <Link >forgot password?</Link>
            </div>
            <button type='submit' 
                    className='login-area'>
                    {success ? 
                      <AiOutlineLoading className='success-loading'/> :
                      "login"
                    }
            </button>
            <Link to='/signup' className='create-area'>create account</Link>
        </form>
    </div>
  )
}

export default Login
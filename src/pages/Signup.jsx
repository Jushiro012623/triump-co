import React, {useState} from 'react'
import { GoEye,GoEyeClosed  } from "react-icons/go";
import { Link,useNavigate  } from 'react-router-dom';
import axios from 'axios'
export default function Signup() {
    
    const [isHidden, setIsHidden] = useState();
    
    
    const [values, setValues] = useState({
        password: '',
        fname: '',
        lname: '',
        mobile: '',
        email: ''
    })
    
    const navigate = useNavigate();

    const input =[
        {label: 'first name', type:'text', name:'fname'},
        {label: 'last name', type:'text', name:'lname'},
        {label: 'password', type:'password', name:'password'},
        {label: 'email', type:'text', name:'email'},
        {label: 'mobile', type:'text', name:'mobile'}
    ]
    const handlePassword = () => {
      setIsHidden(!isHidden)
    } 
    const handleSubmit = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:8800/dbtc' , values)
        .then(res => {
            console.log("Success")
            navigate('/login');
        })
        .catch(err => console.log("Failed"))
    }

    const handleChange =(event) => {
        setValues({...values, [event.target.name]:event.target.value})
    }
  return (
    <div className='login-create'>
        <h1>sign up</h1>
        <form  onSubmit={handleSubmit} className="form-wrapper">
            {input.map((inputs, index) => (
                <React.Fragment key={index}>
                    <label htmlFor="">{inputs.label}</label>
                    <div className={inputs.label === 'password' ? 'pass-area' : null}>
                    {inputs.label === 'password' ? (
                        <>
                            <input type={isHidden ? 'text' : 'password'} name='password' required onChange={handleChange}/>

                            {
                                isHidden ? <GoEye onClick={handlePassword} /> : <GoEyeClosed onClick={handlePassword} />
                            }
                        </>
                        ) : (
                            <input type={inputs.type} name={inputs.name} required onChange={handleChange}/>
                        )}
                    </div>
                </React.Fragment>
            ))}
            <button type='submit' className='signup-area'>sign up</button>
            <Link to='/login' className='cancel-area'>cancel</Link>
        </form>
    </div>
  )
}

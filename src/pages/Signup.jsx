import React, { useState, useRef, useEffect } from 'react';
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineLoading } from "react-icons/ai";


export default function Signup() {
    
    const [isHidden, setIsHidden] = useState(false);
    const [existEmail, setExistEmail] = useState(false);
    const [shortUsername ,setshortUsername] = useState(false);
    const [passwordMet, setpasswordMet] = useState(false);
    const [success, setSuceess] = useState(false)
    const [values, setValues] = useState({
        email: '',
        user_name: '',
        user_pass: ''
    });

    const emailInputRef = useRef(null);
    const passInputRef = useRef(null);
    const userNameInputRef = useRef(null);
    
    const navigate = useNavigate();

    const exist ={
        color:'red',
        fontSize:'10px',
        position: 'absolute', 
        bottom: '-17px'
    };
    const input = [
        {   
            labelId: 1, 
            label: 'username', 
            type: 'text', 
            name: 'user_name' 
        },
        { 
            labelId: 2, 
            label: 'email', 
            type: 'email', 
            name: 'email' 
        },
        { 
            labelId: 3, 
            label: 'password', 
            type: 'password', 
            name: 'user_pass' 
        }
    ];

    const handlePassword = () => {
        setIsHidden(!isHidden);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8800/dbtc', values)
            .then(res => {
                if (res.data && !res.data.error) {
                    setSuceess(true)
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                } else {
                    if(res.data.error.includes('Username')){
                        setshortUsername(true);
                        userNameInputRef.current.focus();
                    }
                    if (res.data.error.includes('Email')) {
                        setExistEmail(true);
                        emailInputRef.current.focus();
                    }
                    if (res.data.error && res.data.error.includes('Password')) {
                        setpasswordMet(true);
                        passInputRef.current.focus();
                    }
                }
            })
            .catch(err => console.log("Error:", err));
    };
    
    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    };
 
    useEffect(() => {
        setExistEmail(false);
        setpasswordMet(false);
        setshortUsername(false);
    }, [values.email, values.user_pass, values.user_name]);

    return (
        <div className='login-create'>
            <h1>sign up</h1>
            <form onSubmit={handleSubmit} className="form-wrapper">
                {input.map((inputs, index) => (
                    <React.Fragment key={index}>
                        <span id={inputs.labelId}>{inputs.label}</span>
                        <div className={inputs.label === 'password' ? 'pass-area' : null}>
                            {inputs.label === 'password' ? 
                            (
                                <>
                                    <input type={isHidden ? 'text' : 'password'} 
                                           name='user_pass' 
                                           required onChange={handleChange}
                                           style={ 
                                                    (passwordMet && inputs.label === 'password') ? 
                                                    {borderColor: 'red'} : null 
                                                }
                                    />
                                    {isHidden ? 
                                        <GoEye onClick={handlePassword} /> : 
                                        <GoEyeClosed onClick={handlePassword} />
                                    }
                                    {(passwordMet && inputs.label === 'password') && 
                                        <p className='pass-error' style={exist}>
                                            Password must be atleast 8-25 long including lowecase and uppercase
                                        </p>
                                    }
                                    
                                </>
                            ) : 
                            (
                                <>
                                    <input
                                        autoComplete='off' 
                                        ref={inputs.label === 'email' ? emailInputRef : null}
                                        type={inputs.type}
                                        name={inputs.name}
                                        required
                                        onChange={handleChange}
                                        style={
                                            (existEmail && inputs.label === 'email') || 
                                            (shortUsername && inputs.label === 'username') ? 
                                            {borderColor: 'red'} : null
                                        }
                                    />
                                    {
                                        (shortUsername && inputs.label === 'username') && 
                                        <p style={exist}>Username is too short</p>
                                    }
                                    {   (existEmail && inputs.label === 'email') && 
                                        <p style={exist}>Email already exists</p>
                                    }
                                </>
                            )}
                        </div>
                    </React.Fragment>
                ))}
                <button type='submit' className='signup-area'>
                    {success ? <AiOutlineLoading className='success-loading'/> : "sign up"}
                </button>
                <Link to='/login' className='cancel-area'>login</Link>
            </form>
        </div>
    );
}

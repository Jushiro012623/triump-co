import React, {useState, useEffect} from 'react'
import axios from 'axios';
function Settings() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [birthday, setBirthday] = useState('');
  const [username, setUserName] = useState('');
  const [edit,setEdit] =useState(false);
  const [profileValues, setValues] = useState({});

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8800/dbtc', { ...profileValues, source: 'settings' })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err, 'settings error')
      })
  }
  useEffect(() => {
    axios.get('http://localhost:8800')
      .then(res => {
        console.log(res.data);
        if (res.data.valid) {
          setUserName(res.data.user_name);
          setEmail(res.data.email);
        }
      })
      .catch(err => console.log(err));
    
      axios.get('http://localhost:8800/user_profile')
      .then(res => {
        console.log(res.data);
        const userData = res.data[0];
        setFirstname(userData.firstname);
        setLastname(userData.lastname);
        setMobile(userData.mobile);
        setBirthday(userData.birthday);
      })
      .catch(err => console.log(err));
  }, []);
  
  const handleEdit = ()=> {
    setEdit(false);
    setValues({
      // email: email,
      // username: username,
      // firstname: firstname,
      // lastname: lastname,
      // mobile: mobile,
      // birthday: birthday
    });
  }
 
  const handleOnChange = (event) => {
    setValues({...profileValues, [event.target.name]: event.target.value});
};
  // const handleChange =(e) => {
  //   setUserName(e.target.value)
  //   setFirstname(e.target.value)
  //   setLastname(e.target.value)
  //   setEmail(e.target.value)
  //   setMobile(e.target.value)
  //   setBirthday(e.target.value)
  // }
  return (
    <div className='form'>
        <form onSubmit={onSubmit} className='formAccount'>
            <span>firstname</span>
            <input type="text"  
              name='firstname' 
              onChange={handleOnChange} 
              disabled={!edit}
              required
            />
            <span>lastname</span>
            <input type="text" 
              name='lastname' 
              onChange={handleOnChange} 
              disabled={!edit}
              required
            />
            <span>mobile</span>
            <input type="tel" 
              name='mobile' 
              onChange={handleOnChange} 
              disabled={!edit}
              required
            />
            <span>birthday</span>
            <input type="date"  
              style={{textTransform:"uppercase"}} 
              name='birthday' 
              onChange={handleOnChange} 
              disabled={!edit}
              required
            />
            <p>In order to access some features of the Services, you will have to fill out your account details.</p>

            {edit? 
            <>
              <button type='submit'>Save</button>
              <button style={{marginTop:"-1em", backgroundColor:'transparent', color:'var(--clr-tmain)', border:'1px solid var(--clr-tmain'}}
                      onClick={handleEdit}>cancel</button>
            </>
            : 
            <button onClick={()=>{setEdit(true)}}>edit</button>
            }
        </form>
    </div>
  )
}

export default Settings
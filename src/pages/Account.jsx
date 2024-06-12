import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import profile from '../image/nopic.png'
import { CiViewList,CiCircleInfo,CiLocationOn,CiEdit  } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import Orders from '../components/Orders';
import Settings from '../components/Settings';
import Password from '../components/Password';
import Address from '../components/Address';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Modal from '../components/Modal';
function Account() {
  const [username, setUsername] = useState('User');
  const navigate = useNavigate();
  const [isOrder, setIsOrder] = useState(true)
  const [isSettings, setIsSettings] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isAddress, setIsAddress] = useState(false)
  const [name, setName] = useState()
  const [isEdit, setIsEdit] = useState(false);

  useEffect (() => {
    axios.get('http://localhost:8800/')
    .then(res => {
      console.log(res.data);
      if (res.data.valid){
        setUsername(res.data.user_name);  
      }
      else{
        navigate('/login')
      }
      console.log(res)
    })
    .catch(err => console.log(err))

    axios.get('http://localhost:8800/user_profile')
    .then(res => {
      const userData = res.data[0];
      setName(userData.firstname + ' ' + userData.lastname );
    })
    .catch(err => console.log(err))
  }, [])

  const arrowStyle = {
    transform: 'rotate(90deg)'
  }
  const handleClickOrder = () =>{
    setIsOrder(!isOrder)
    setIsSettings(false)
    setIsPassword(false)
    setIsAddress(false)
  }
  const handleClickSettings = () =>{
    setIsOrder(false)
    setIsSettings(!isSettings)
    setIsPassword(false)
    setIsAddress(false)
  }
  const handleClickPass = () =>{
    setIsOrder(false)
    setIsSettings(false)
    setIsPassword(!isPassword)
    setIsAddress(false)
  }
  const handleClickAddr = () =>{
    setIsOrder(false)
    setIsSettings(false)
    setIsPassword(false)
    setIsAddress(!isAddress)
  }

  const handleEditProfile = () =>{
    setIsEdit(!isEdit)
    if (!isEdit){
      document.body.classList.add('modal-open');
    } else{
      document.body.classList.remove('modal-open');
    }
  }
  return (
    <div className="left">
        <div className='profile-area'>
            <div className='profile'><img src={profile} alt="" /></div>
            <p>{username}</p>
            <p className='name'>{name}</p>
            <div className="edit">
              <button onClick={handleEditProfile}><CiEdit /> edit profile </button>
              <IoSettingsOutline className='settings'/>
            </div>
        </div>
        <ul className="nav_area" onClick={handleClickOrder} >
          <li><CiViewList/>My Orders <MdOutlineKeyboardArrowRight className='arrow' style={isOrder ? arrowStyle : ''}/> </li>
          {isOrder ? <Orders /> : null}
        </ul>
        <ul className='nav_area'  >
          <li onClick={handleClickSettings}><CiCircleInfo />Personal Information<MdOutlineKeyboardArrowRight className='arrow' style={isSettings ? arrowStyle : ''}/></li>
          {isSettings ? <Settings /> : null}
          <li onClick={handleClickPass} ><CiLocationOn />Password<MdOutlineKeyboardArrowRight className='arrow' style={isPassword ? arrowStyle : ''} /></li>
          {isPassword ? <Password /> : null}
          <li onClick={handleClickAddr}><CiLocationOn />Addresses<MdOutlineKeyboardArrowRight className='arrow'  style={isAddress ? arrowStyle : ''} /></li>
          {isAddress ? <Address /> : null}
        </ul>
        { isEdit ? 
          <Modal onClick={handleEditProfile}/> : null
        }
    </div>
  )
}

export default Account
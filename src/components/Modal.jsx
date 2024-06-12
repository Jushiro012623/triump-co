import React from 'react'

import { IoMdClose } from "react-icons/io";
import { CiEdit  } from "react-icons/ci";
import profile from '../image/nopic.png'
function Modal({onClick}) {
  return (
    <div className='modal-container'>
        <div className="modal_profile">
          <h4>edit profile <IoMdClose style={{cursor:'pointer'}} onClick={onClick}/></h4>

          <div className='picture'>
            <span>Profile Photo</span>
            <div className='profile'>
              <img src={profile} alt="" />
              <i className='edit_icon'><CiEdit /></i>
            </div>
          </div>
          <div className='info'>
            <span>Username</span>
            <input type="text" required/>
            <p>Usernames can only contain letters, numbers, underscores and period.</p>
          </div>
          <div className='info' >
            <span>Email</span>
            <input type="email" required/>
            <p>Kindly ensure that the email address provided will be accessible for communication regarding your order to facilitate a seamless experience.</p>
          </div>
        </div>
    </div>
  )
}

export default Modal
import React from 'react'

function Password() {
  return (
    <div className='form'>
        <form action="" className='formAccount'>
            <span>old password</span>
            <input type="password" />
            <span>new password</span>
            <input type="password" />
            <span>confirm new password</span>
            <input type="password" />
            <button type='submit' style={{marginTop:'1em'}}>Save</button>
        </form>
    </div>
  )
}

export default Password
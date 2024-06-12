import React from 'react'

function Address() {
  return (
    <div className='form'>
        <form action="" className='formAccount'>
            <span>address line</span>
            <input type="text" />
            <span>province</span>
            <input type="text" />
            <span>municipality</span>
            <input type="text" />
            <span>country</span>
            <input type="text" />
            <span>postal code</span>
            <input type="text" />
            <button type='submit' style={{marginTop:'1em'}}>Save</button>
        </form>
    </div>
  )
}

export default Address
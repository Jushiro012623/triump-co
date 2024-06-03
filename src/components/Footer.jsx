import React from 'react'
import tc from '../image/TC.png'

import { CiPhone,CiMail  } from "react-icons/ci";

function Footer() {
  return (
    <div className='footer'>
       <div className="wrapper">
            <div className="connect">
                <div className="logo">
                    <img src={tc} alt="" />
                </div>
                <div className='connect-info'>
                    <p>connect</p>
                    <ul>
                        <li>
                            <CiPhone/>+6399-1339-0922
                        </li>
                        <li>
                            <CiMail/>truimphsco@gmail.com
                        </li>

                    </ul>
                </div>
            </div>
            <div className="social">
                <ul>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>tiktok</li>
                </ul>
            </div>
            <div className="copyright">
                <p>copyright 2024 triump co.ph</p>
            </div>
       </div>
    </div>
  )
}

export default Footer
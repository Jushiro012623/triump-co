import {useState} from 'react'

//icons
import { CiSearch, CiShoppingCart ,  CiUser ,CiMenuFries  } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FaTiktok,FaFacebook,FaInstagram} from "react-icons/fa";
import tc from '../image/TC.png'


export default function Nav() {

  const socialMedia = [<FaFacebook/>, <FaInstagram/>, <FaTiktok/>]
  const [Search, setSearch] = useState(false);
  const [Menu, setMenu] = useState(false);

  const ShowMenu = () =>{
    setMenu(!Menu);
    setSearch(false);
  }
  const ShowSearch= () => {
    setSearch(!Search);
    setMenu(false);
  }

  return (
    <div className='nav-container'>
      <div className='navbar'>
          <div className='img'>
              <img src={tc} alt="" />
          </div>
          <ul>
              <li className='links' onClick={ShowSearch}><CiSearch/></li>
              <li className='links'><CiShoppingCart/></li>
              <li className='links'><CiUser /></li>
              <li className='links' onClick={ShowMenu}><CiMenuFries /></li>
          </ul>
      </div>
      
      {Search && (
          <div className="search-nav">
            <CiSearch />
            <input type="text" name="" id="" placeholder='Search' />
            <IoCloseOutline onClick={ShowSearch}/>
          </div>
        )}
      {Menu && (
          <div className={`nav-menu ${Menu ? 'showing' : 'hiding'}`}>
              <h2>Menu</h2>
              <ul>
                <li className='menu-links'>new arival</li>
                <li className='menu-links'>tops</li>
                <li className='menu-links'>women's</li>
                <li className='menu-links'>men's</li>
                <li className='menu-links'>kid's</li>
                <li className='menu-links'>in stock</li>
                <li className='menu-links'>login</li>
                <li className='menu-links'>
                  {socialMedia.map((social, index) => (
                    <span>{social}</span>
                  ))}
                </li>
              </ul>
          </div>

      )}
    </div>

  )
}

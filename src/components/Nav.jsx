import React, { useState, useEffect, useRef } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { CiSearch, CiShoppingCart, CiUser, CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";
import tc from '../image/TC.png';
import axios from 'axios';
export default function Nav() {
    const socialMedia = [<FaFacebook/>, <FaInstagram/>, <FaTiktok/>];

    const [Search, setSearch] = useState(false);
    const [Menu, setMenu] = useState(false);
    const navRef = useRef(null);
    const [name, setName] = useState();
    const [isLogin ,setIsLogin] = useState(false);
    const navigate =useNavigate();

    const handleLogout = () => {
      // axios.post('http://localhost:8800/logout')
      //   .then(res => {
      //     setIsLogin(false); // Update state to reflect logout
      //     setName(''); // Clear user name
      //     navigate('/login'); // Redirect to login page
      //   })
      //   .catch(err => console.error('Logout failed:', err));
    };

    useEffect (() => {
      axios.get('http://localhost:8800')
      .then(res => {
        console.log(res.data);
        if (res.data.valid){
          setIsLogin(true);
          setName(res.data.user_name);  
        }
        else{
          navigate('/login')
        }
        console.log(res)
      })
      .catch(err => console.log(err))
    }, [])

    const ShowMenu = () =>{
      setMenu(!Menu);
      setSearch(false);
    };

    const ShowSearch= () => {
      setSearch(!Search);
      setMenu(false);
    };

    const Close = () =>{
      setMenu(false);
      setSearch(false);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  return (
    <div className='nav-container' ref={navRef}>
      <div className='navbar'>
        <div className='img'>
          <Link to='/'>
            <img src={tc} alt="" onClick={Close} />
            <span>{name}</span>
          </Link>
        </div>
        <ul>
          <li className='links' onClick={ShowSearch}>
            <Link>
                <CiSearch/>
            </Link>
          </li>
          <li className='links'>
            <Link>
                <CiShoppingCart/>
            </Link>
          </li>
          <li className='links'>
            <Link>
                <CiUser/>
            </Link>
          </li>
          <li className='links' onClick={ShowMenu}>
            <Link>
                <CiMenuFries />
            </Link>
          </li>
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
            <li className='menu-links'>
              <Link  onClick={ShowMenu}>new arrival</Link>
            </li>
            <li className='menu-links'>
              <Link  onClick={ShowMenu}>tops</Link>
            </li>
            <li className='menu-links'>
              <Link  onClick={ShowMenu}>women's</Link>
            </li>
            <li className='menu-links'>
              <Link  onClick={ShowMenu}>men's</Link>
            </li>
            <li className='menu-links'>
              <Link  onClick={ShowMenu}>kid's</Link>
            </li>
            <li className='menu-links'>
              <Link  onClick={ShowMenu}>in stock</Link>
            </li>
            <li className='menu-links'>
              {isLogin ?  
                  <Link to='/login' onClick={{handleLogout, ShowMenu}}>logout</Link>:
                  <Link to='/login' onClick={ShowMenu}>login</Link>
              }
            </li>
            <li className='menu-links'>
              {socialMedia.map((social, index) => (
                <span key={index}>{social}</span>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

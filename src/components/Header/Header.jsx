import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then()
        .catch(error => console.error(error))
    }
    return (
        <div className='header' id='header'>
            <div className="navbar bg-[#161723] text-white py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-[#161723] rounded-box w-52">
              <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
              <li><NavLink to='/blogs' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blogs</NavLink></li>
              <li><NavLink to='/resister' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Resister</NavLink></li>
            </ul>
          </div>
          <Link to='/' className=" text-xl md:text-3xl font-bold md:ml-10 ml-0"><span className='text-orange-500 font-normal text-2xl md:text-5xl'>C</span>rab  <span className='text-orange-500'> Hut</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className='menu-btn text-lg font-medium'> 
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
            <NavLink to='/blogs' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blog</NavLink>
            <NavLink to='/resister' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Resister</NavLink>
          </div>
        </div>
        <div className="navbar-end mr-2 md:mr-12">
        {
            user ? <>
            <button className='mr-2 custom-primary-btn' onClick={handleLogOut}>LogOut</button>
            <label tabIndex={0} className="btn btn-ghost border border-orange-400 border-b-2 btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} title={user.displayName} />
            </div>
          </label></>:<><NavLink  to='/login' className='text-lg font-medium'>Login</NavLink></>
        }
        </div>
      </div>
        </div>
    );
};

export default Header;
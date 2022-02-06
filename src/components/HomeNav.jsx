import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
//styling is done in "index.css"
const HomeNav = () => {
    

    const navLinkStyles = ({isActive}) => {
        return {
              fontWeight : isActive ? 'bold' : 'normal',
              textDecoration : isActive ? 'none' : 'underline',
        }

    }

    //nav link component will set a property called "isActive" which can be destructured from this function parameter
   
        return (
            <nav>
                <NavLink style={navLinkStyles}  to='/'>Home</NavLink>&nbsp;&nbsp;
                <NavLink style={navLinkStyles} to='/blogs'>Blogs</NavLink>
            </nav>
        );
    
}
 
export default HomeNav;



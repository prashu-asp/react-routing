import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class HomeNav extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Link to='/'>Home</Link>&nbsp;&nbsp;
                <Link to='/blogs'>Blogs</Link>
            </div>
        );
    }
}
 
export default HomeNav;



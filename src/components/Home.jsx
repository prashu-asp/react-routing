import React, { Component } from 'react';
import HomeNav from './HomeNav'
import { useNavigate } from 'react-router-dom';   //useNavigate is a hook

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <HomeNav />
            <br></br>
            <button onClick={()=>navigate('order-summary', {replace:true})}>Place order</button>
            
        </div>
    )
    //{replace :true} makes such that when we click button we will come all the way back instead of going back to the home page this is because we replaced instead of pushing order summary onto the history stack. Generally order confirmation pages will be like this

    //Normally a call to navigate will push a new entry into the history stack so the user can click the back button to get back to the page. If you pass replace: true to navigate then the current entry in the history stack will be replaced with the new one.

    //An example is when the user clicks a “purchase” button but needs to log in first, after they log in, you can replace the login screen with the checkout screen you wanted them to be at. Then when they click the back button they won’t see the login page again.
}

export default Home;

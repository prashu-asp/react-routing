import React, { Component } from "react";
import Cardlist from '../components/CardList';
import SearchBox from '../components/SearchBox';
import bg from '../images/bg.jpg'
import { blogs } from '../components/blogs';
import BlogsPage from '../components/blogsPage'
import {Routes , Route} from 'react-router-dom'
import Home from '../components/Home';
import {OrderSummary} from '../components/ordersummary'
import {NoMatch} from '../components/NoMatch'

class App extends React.Component {
    render() {
        return (
            <div  className="tc" /*style={{backgroundImage : `url(${bg})`}} */ >
            <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/blogs' element={<BlogsPage />}></Route>
                    <Route path='/order-summary' element={<OrderSummary />}></Route>
                    <Route path='*' element={<NoMatch />}></Route> 
            </Routes>
            </div>

           //here  path='*' means when no routing matched load this component
        );
    }
}

export default App;
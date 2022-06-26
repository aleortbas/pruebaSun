import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { Routes, Route, } from 'react-router-dom';

class Main extends Component {
    render(){

        const HomePage = () => {
            return(
                <Home />
            );
        }

        return(
            <div>
            <Header/>
            <Routes>
            <Route path='/home' element={<HomePage/>} />
            </Routes>
            <Footer/>
            </div>
        );
    }
}

export default Main;
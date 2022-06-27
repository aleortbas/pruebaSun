import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { Routes, Route, } from 'react-router-dom';
import Registro from './RegistroComponent';

class Main extends Component {
    render(){

        const HomePage = () => {
            return(
                <Home />
            );
        }

        const RegistroPage = () => {
            return(
                <Registro />
            );
        }

        return(
            <div>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/registro' element={<RegistroPage/>} />
            </Routes>
            <Footer/>
            </div>
        );
    }
}

export default Main;
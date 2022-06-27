import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Registro from './RegistroComponent';
import Login from './login'
import { Routes, Route, } from 'react-router-dom';

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
        const LoginPage = () => {
            return(
                <Login />
            );
        }

        return(
            <div>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/registro' element={<RegistroPage/>} />
                <Route path='/login' element={<LoginPage/>} />
            </Routes>
            <Footer/>
            </div>
        );
    }
}

export default Main;
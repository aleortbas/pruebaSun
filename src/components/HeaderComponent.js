import React, { Component } from 'react';
import { NavbarBrand, Navbar, Nav, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <span>Suntic S.A.S</span>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Inicio
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> Terminos y Condiciones
                                    </NavLink>
                                </NavItem>
                                <Nav className="justify-content-end">
                                    <NavItem>
                                        <Button outline onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>SUNTIC S.A.S</h1>
                            <p>Sociedad con el propósito de desarrollar negocios que provean al mercado de productos y 
                                servicios de Tecnología Informática, las Telecomunicaciones, medio ambiente y energías renovables.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
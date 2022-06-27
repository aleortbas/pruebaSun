import React, { Component, useState } from 'react';
import { NavbarBrand, Navbar, Nav, NavbarToggler, Collapse, NavItem, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from 'firebase/auth'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();

        
        if(this.userame.value.length < 10)
            alert("Username shouldn't be less than 10: " + this.userame.value);

        else if(this.password.value === "")
            alert("Password shouldn't be empty");

        else if(this.password.value === "password")
            alert("Password can't be: " + this.password.value);

        else if(this.password.value.length < 6)
            alert("Password shouldn't be less than 6: " + this.password.value);

        else if(this.password.value.length > 20)
            alert("Password shouldn't be more than 20: " + this.password.value);

        else {
            alert("Username: " + this.userame.value + " Password: " + this.password.value + " Remeber me: " + this.remember.checked);
        }

        event.preventDefault();
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
                                    <NavLink className="nav-link" to="/">
                                        <span className="fa fa-home fa-lg"></span> Inicio
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/registro">
                                        <span className="fa fa-user fa-lg"></span> Registrar Usuario
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

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="email">Correo electronico</Label>
                                <Input type="email" id="email" name="email"
                                    innerRef={(input) => this.userame = input}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Contraseña</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}
                                    />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remeber" 
                                        innerRef={(input) => this.remember = input}/> 
                                    Recordarme
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Iniciar</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;
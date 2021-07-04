import React, { Component } from 'react';

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
            import { NavLink } from 'react-router-dom';
import { useState } from 'react';
 
const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const namePassword = {
        username: '',
        password: '',
        remember: ''
    };

    function toggleNav() {
        setIsNavOpen(!isNavOpen);
    }
 
    function toggleModal () {
        setIsModalOpen(!isModalOpen);
    }

    function handleLogin(event) {
        toggleModal();
        console.log("event: "+ event);
        // alert("Username: " + namePassword.username.value  + ";  Password: " + namePassword.password.value 
        //     + ";  Remember: " + namePassword.remember.checked );
 
        event.preventDefault();
    }

    console.log("isModalOpen:  "+isModalOpen);
    console.log("isNavOpen:  "+isNavOpen);
    return(
    <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={() => toggleNav()} />
                        <NavbarBrand className="mr-auto" href="/"><img src={process.env.PUBLIC_URL +'/assets/images/logo.png'} height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
        <Modal isOpen={ isModalOpen} toggle={ toggleModal}>
            <ModalHeader toggle={ toggleModal}> Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={ handleLogin}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username"
                            innerRef={(x) => (namePassword.username = x) }/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password"
                            innerRef={(x) => (namePassword.password = x) } />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="remember"
                            innerRef={(x) =>(namePassword.remember = x )} />
                            Remember me
                        </Label>
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Login</Button>
                </Form>
            </ModalBody>
        </Modal>
    </React.Fragment>
    );
  }
 

export default Header;
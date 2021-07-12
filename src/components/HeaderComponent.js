import React, { Component } from 'react';

import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
            import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import {AiFillHome, AiFillInfoCircle, AiOutlineMenuUnfold, AiOutlineContacts, AiOutlineLogin} from "react-icons/ai";
import { IconContext } from "react-icons";
 
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
        // console.log("event: "+ event);
        // alert("Username: " + namePassword.username.value  + ";  Password: " + namePassword.password.value 
        //     + ";  Remember: " + namePassword.remember.checked );
 
        event.preventDefault();
    }

    // console.log("isModalOpen:  "+isModalOpen);
    // console.log("isNavOpen:  "+isNavOpen);
    return(
    <React.Fragment>
                <Navbar dark className="headerNavBar" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={() => toggleNav()} />
                        <NavbarBrand className="mr-auto" href="/"><img src={process.env.PUBLIC_URL +'/assets/images/logo.svg'} height="50" width="50" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={isNavOpen} navbar className="row callapseNav">

                            <Nav navbar className ="col-md-7 row">

                            <NavItem className="col-md-3">
                                <NavLink className="normal"  activeClassName="active"  to='/home'>
                                    {/* <span className="fa fa-home fa-lg"></span>  */}
                                    <IconContext.Provider value={{ color: "#ffffff", size: "2em", className: "global-class-name" }}>
                                        <AiFillHome />
                                    </IconContext.Provider>
                                        &nbsp;  Home
                                    </NavLink>
                            </NavItem>

                            <NavItem className="col-md-3">
                                <NavLink  className="normal"  activeClassName="active" to='/aboutus'>
                                    <IconContext.Provider value={{ color: "#ffffff", size: "2em", className: "global-class-name" }}>
                                        <AiFillInfoCircle/>
                                    </IconContext.Provider>
                                     &nbsp;  Info
                                </NavLink>
                            </NavItem>

                            <NavItem className="col-md-3">
                                <NavLink className="normal"  activeClassName="active"  to='/menu'>
                                    <IconContext.Provider value={{ color: "#ffffff", size: "2em", className: "global-class-name" }}>
                                        <AiOutlineMenuUnfold/>
                                    </IconContext.Provider>
                                    
                                    &nbsp; Menu
                                                                           
                                </NavLink>
                            </NavItem>

                            <NavItem className="col-md-3">
                                <NavLink  className="normal"  activeClassName="active" to='/contactus'>
                                    <IconContext.Provider value={{ color: "#ffffff", size: "2em", className: "global-class-name" }}>
                                        <AiOutlineContacts/>
                                    </IconContext.Provider>                               
                                    &nbsp; Contact
                                    </NavLink>
                            </NavItem>


                            </Nav>
                        
                            <Nav className="ml-auto" navbar className ="col-md-5 justify-content-end">
                                <NavItem>
                                    <Button outline onClick={toggleModal} className="loginBtn">
                                    <IconContext.Provider value={{ color: "#ffffff", size: "2em", className: "global-class-name" }}>
                                        <AiOutlineLogin/>
                                    </IconContext.Provider> 
                                        Login                                        
                                    </Button>                                                                 
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Haolao hotpot</h1>
                       <p>Taking customer experience as our top priority, we always provide innovative and pleasant services to our customers. All the personalized services offered by our restaurants are derived from the innovative ideas of our staff. These warm and personalized services turn every meal into a happy experience. </p>
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
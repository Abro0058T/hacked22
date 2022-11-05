import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './LandingPage.css'
import Login from '../Login/Login';
import NavDropdown from 'react-bootstrap/NavDropdown';
import svg from '../../assist/background.svg'
import CommunityLogin from '../CommunityLogin/CommunityLogin';
import CommunitySignIn from '../CommunitySignIn/CommunitySignIn';
import {useNavigate} from 'react-router-dom'
// import image from '../../assist/landingPage.jpg'

function LandingPage() {
    const navigate=useNavigate()
  return (
    <div>
    <Navbar className='nav' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">WeConnect</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <span  className='lplogin' 
          >About us </span>
             </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <div className="lpmain-body">
        <div className="lpmain-right">
            <h1>WeConnect</h1>
            <p >
            WeConnect is a digital platform fuelling hundreds of young people to change the world, and create an impact both online and offline, in every global locality. 
            </p>
            <h4>Join us to serve !</h4>
            <div className="lpbutts">
                <button className='lpcommunity' onClick={()=>{navigate('com-login')}}>Community Login/SignIn</button>
                <button className='lpusers'onClick={()=>{navigate('/us-login')}}>
                User Login/SignIn
                </button>
            </div>
        </div>
        <div className="lpmain-left">
           <img src={require('../../assist/landingpage.png')} alt="" />
        </div>
    </div>
</div>
  )
}

export default LandingPage
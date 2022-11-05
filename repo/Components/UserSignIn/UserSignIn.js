import React from 'react'
// import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import './LandingPage.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import svg from '../../assist/background.svg'
import "./UserSignIn.css"
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
function UserSignIn() {
  const navigate =useNavigate()
    const [userdetails,setuserdetails]=useState({
       user_name:'',
        intrest:'',
        email:'',
        password:''
 })
 const changename=(e)=>{
    setuserdetails({...userdetails,user_name:e.target.value})

 }
 const changetype=(e)=>{
    setuserdetails({...userdetails,intrest:e.target.value})

}
const changeaddress=(e)=>{
    setuserdetails({...userdetails,email:e.target.value})

}
const changepass=(e)=>{
    setuserdetails({...userdetails,password:e.target.value})

}

const submit =async (e)=>{
    e.preventDefault();
    console.log(userdetails);
    // e.preventDefault();
    const res= await fetch(
`https://hacked-e6f56-default-rtdb.firebaseio.com/users/${userdetails.user_name}.json`,{
method:"PUT",
headers:{
    'Content-Type':"application/json",
},
body:
    JSON.stringify({

       user_name:userdetails.user_name,
        intrest:userdetails.intrest,
        email:userdetails.email,
        password:userdetails.password
    })

}

    );
     fetch("https://hacked-e6f56-default-rtdb.firebaseio.com/Community.json").then((response)=>{
        return response.json()
     }).then(data=>{
        console.log(data)
     })
     navigate(-1)
}
  return (
    <div className='cl-form'>    
    <h2>Sign-In</h2>
          <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
      <br />
      <input type="text" placeholder="Enter Community Name" value={userdetails.user_name} name={userdetails.user_name} onChange={changename}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Intrest</Form.Label>
      <br />
      <input type="text" placeholder="Enter Community Type" value={userdetails.intrest} name={userdetails.intrest} onChange={changetype}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>E-mail</Form.Label>
     <br /> <input type="email" placeholder="E-mail" value={userdetails.email} name={userdetails.email} onChange={changeaddress}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <br />
      <input type="password" placeholder="Password" value={userdetails.password} name={userdetails.password} onChange={changepass}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Confirm Password</Form.Label>
      <br />
      <input type="password" placeholder="Password" />
    </Form.Group>
    <Link to="/com-sigin"></Link>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <input className='check' type="checkbox" />
        <label  htmlFor="">Agree to Terms & Conditions</label>
    </Form.Group>
    <Button className="submit-btn"type="submit" onClick={submit}>
      Submit
    </Button>
  </Form></div>
  )
}

export default UserSignIn